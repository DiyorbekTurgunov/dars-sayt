import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {Lesson} from "../../lessons/entities/lesson.entity";
import {TaskTemplate} from "../../taskTemplates/entities/task-template.entity";


@Entity('tasks')
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Lesson)
    lesson: Lesson;

    @Column()
    lessonId: number;

    @ManyToOne(() => TaskTemplate)
    template: TaskTemplate;

    @Column()
    templateId: number;

    @Column({ nullable: true })
    order?: number;
}
