import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {User} from "../../users/entities/user.entity";
import {Task} from "../../tasks/entities/task.entity";
import {SubmissionStatus} from "../../../common/enums/submission-status.enum";


@Entity('submissions')
export class Submission {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    student: User;

    @Column()
    studentId: number;

    @ManyToOne(() => Task)
    task: Task;

    @Column()
    taskId: number;

    @Column('text', { nullable: true })
    content?: string;

    @Column({ nullable: true })
    mark?: number;

    @Column('text', { nullable: true })
    feedback?: string;

    @Column({ type: 'enum', enum: SubmissionStatus, default: SubmissionStatus.PENDING })
    status: SubmissionStatus;
}
