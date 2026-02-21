import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {User} from "../../users/entities/user.entity";
import {Lesson} from "../../lessons/entities/lesson.entity";
import {Submission} from "../../submissions/entities/submission.entity";


@Entity('files')
export class FileEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    student: User;

    @Column()
    studentId: number;

    @ManyToOne(() => Lesson)
    lesson: Lesson;

    @Column()
    lessonId: number;

    @ManyToOne(() => Submission)
    submission: Submission;

    @Column()
    submissionId: number;

    @Column({type: 'varchar', length: 128})
    path: string;

    @Column()
    size: number;
}
