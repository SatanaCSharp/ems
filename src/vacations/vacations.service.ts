import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IVacationService } from './interfaces/ivacation.service';
import { CreateVacationDto } from './dto/create-vacation.dto';
import { VacationDto } from './dto/vacation.dto';
import { UpdateVacationDto } from './dto/update-vacation.dto';
import { VACATION_BALANCES_REPOSITORY, VACATIONS_REPOSITORY } from '../utils/constants/repositories.constants';
import { IVacationRepository } from './interfaces/ivacation.repository';
import { IVacationBalancesRepository } from '../vacation-balances/interfaces/ivacation-balances.repository';
import { VACATIONS_BALANCE_CALCULATOR_SERVICE } from '../utils/constants/services.constants';
import { IVacationBalanceCalculatorService } from '../vacation-balances/interfaces/ivacation-balance-calculator.service';
import { VACATIONS_MAPPER } from '../utils/constants/mappers.constants';
import { IVacationMapper } from './interfaces/ivacation.mapper';
import { IVacation } from './interfaces/ivacation';

@Injectable()
export class VacationsService implements IVacationService {
    constructor(
        @Inject(VACATIONS_REPOSITORY) private vacationsRepository: IVacationRepository,
        @Inject(VACATION_BALANCES_REPOSITORY) private vacationBalancesRepository: IVacationBalancesRepository,
        @Inject(VACATIONS_BALANCE_CALCULATOR_SERVICE) private vacationBalanceCalculatorService: IVacationBalanceCalculatorService,
        @Inject(VACATIONS_MAPPER) private vacationsMapper: IVacationMapper,
    ) {
    }

    public findAll = async (): Promise<VacationDto[]> => {
        try {
            const vacations: IVacation[] = await this.vacationsRepository.findAll();
            return this.vacationsMapper.mapToDTOs(vacations);
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    public findOne = async (id: string | number): Promise<VacationDto> => {
        try {
            const vacation: IVacation = await this.vacationsRepository.findById(id);
            return this.vacationsMapper.mapToDTO(vacation);
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    public create = async (createDto: CreateVacationDto): Promise<VacationDto> => {
        try {
            const duration: number = this.vacationBalanceCalculatorService.getDurationOfVacation(createDto.startDate, createDto.endDate);
            createDto.duration = duration;
            const userVacationBalance = await this.vacationBalancesRepository.findByUserId(createDto.user.id);
            const amount = userVacationBalance.amount - duration;
            const updateVacationBalanceDto = { UserId: createDto.user.id, amount };
            const [vacation] = await Promise.all([
                this.vacationsRepository.create(createDto),
                this.vacationBalancesRepository.update(updateVacationBalanceDto),
            ]);
            return this.vacationsMapper.mapToDTO(vacation);
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    public update = async (id: string | number, updateDto: UpdateVacationDto): Promise<VacationDto> => {
        try {
            const vacation = await this.vacationsRepository.findById(id);
            const userId = vacation.user.id;
            updateDto.duration =  this.vacationBalanceCalculatorService.getDurationOfVacation(updateDto.startDate, updateDto.endDate);
            const userVacationBalance = await this.vacationBalancesRepository.findByUserId(userId);
            const updateVacationBalanceDto = { UserId: userId, amount: userVacationBalance.amount };
            this.vacationBalanceCalculatorService.actualizeBalance({
                balanceDto: updateVacationBalanceDto,
                durationOfVacationBeforeUpdate: vacation.duration,
                actualDurationOfVacation: updateDto.duration
            });
            await Promise.all([
                this.vacationsRepository.update(id, updateDto),
                this.vacationBalancesRepository.update(updateVacationBalanceDto),
            ])
            return this.findOne(id);
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    public delete = async (id: string | number): Promise<void> => {
        try {
            const vacation = await this.vacationsRepository.findById(id);
            const userId = vacation.user.id;
            const userVacationBalance = await this.vacationBalancesRepository.findByUserId(userId);
            const amount = userVacationBalance.amount + vacation.duration;
            const updateVacationBalanceDto = { UserId: userId, amount };
            await Promise.all([
                this.vacationsRepository.delete(id),
                this.vacationBalancesRepository.update(updateVacationBalanceDto),
            ])
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

}
