import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { GroupStatus } from '../../../common/enums/group-status.enum';
import { User } from '../../users/entities/user.entity';

@Entity('groups')
export class Group {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    teacher: User;

    @Column()
    teacherId: number;

    @Column({type: 'varchar', length: 128})
    title: string;

    @Column({ type: 'date' })
    startDate: Date;

    @Column({ type: 'enum', enum: GroupStatus })
    status: GroupStatus;
}
