import { Entity, ManyToOne, Column, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Group } from '../../groups/entities/group.entity';

@Entity('students_groups')
export class StudentGroup {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    student: User;

    @Column()
    studentId: number;

    @ManyToOne(() => Group)
    group: Group;

    @Column()
    groupId: number;

    @Column({ type: 'date' })
    joinedDate: Date;

    @Column({ default: true })
    isActive: boolean;
}
