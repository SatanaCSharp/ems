import { Module } from '@nestjs/common';
import { WorkingTimesController } from './working-times.controller';
import { WorkingTimesService } from './working-times.service';

@Module({
  controllers: [WorkingTimesController],
  providers: [WorkingTimesService]
})
export class WorkingTimesModule {}
