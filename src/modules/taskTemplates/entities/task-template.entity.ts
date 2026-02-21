import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {TaskCategory} from "../../taskCategories/entities/task-category.entity";


@Entity('taskTemplates')
export class TaskTemplate {

    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(() => TaskCategory)
    category: TaskCategory;

    @Column()
    categoryId: number;

    @Column({type: 'varchar', length: 128})
    title: string;

    @Column({ length: 1024, nullable: true })
    description?: string;

    @Column('text')
    content: string;
}
