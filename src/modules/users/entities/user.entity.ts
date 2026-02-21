import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Gender } from '../../../common/enums/gender.enum';
import { Roles } from '../../../common/enums/roles.enum';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'enum', enum: Roles })
    role: Roles;

    @Column({ unique: true, length: 32 })
    login: string;

    @Column()
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ nullable: true })
    middleName?: string;

    @Column({ nullable: true })
    profileImage?: string;

    @Column({ type: 'date' })
    birthDate: Date;

    @Column({ type: 'enum', enum: Gender })
    gender: Gender;
}
