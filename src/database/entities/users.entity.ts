import { BaseEntity, Column, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from './interfaces/iuser';
import { Roles } from './roles.enity';

export class Users extends BaseEntity implements IUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({
        nullable: true,
    })
    avatar: string;

    @Column({
        type: 'date',
        nullable: true,
    })
    birthDate: Date;

    @Column({
        type: 'date',
    })
    hireDate: Date;

    @Column({ unique: true })
    email: string;

    @Column({
        unique: true,
        nullable: true,
    })
    additionalEmail: string;

    @Column({
        nullable: true,
    })
    phone: number;

    @Column({
        nullable: true,
    })
    skype: string;

    @Column()
    password: string;

    @Column({ type: 'float' })
    balance: number;

    @Column({ type: 'float' })
    salary: number;

    @ManyToMany(type => Roles)
    @JoinColumn()
    roles: Roles;
}
