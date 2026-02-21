import {Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('taskCategories')
export class TaskCategory {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 128})
    title: string;

}
