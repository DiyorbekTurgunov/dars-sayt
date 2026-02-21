import { Entity, ManyToOne, Column, PrimaryGeneratedColumn } from 'typeorm';
import {Group} from "../../groups/entities/group.entity";

@Entity('lessons')
export class Lesson {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Group)
    group: Group;

    @Column()
    groupId: number;

    @Column({type: 'varchar', length: 128 })
    title: string;

    @Column({ type: 'date' })
    startDate: Date;
}
