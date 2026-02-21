import {Injectable, NotFoundException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Task} from "./entities/task.entity";
import {TaskCreateDto} from "./dto/create-task.dto";
import {plainToClass, plainToInstance} from "class-transformer";
import {TaskListDto} from "./dto/list-task.dto";
import {TaskUpdateDto} from "./dto/update-task.dto";

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private readonly repo: Repository<Task>,
    ) {}

    async create(payload: TaskCreateDto) {
        const newTask = this.repo.create(payload as Task);
        await this.repo.save(newTask);
        return plainToClass(TaskListDto, newTask, {
            excludeExtraneousValues: true,
        });
    }

    async getAll() {
        const rawTasks = await this.repo.find();
        const tasks = plainToInstance(
            TaskListDto,
            rawTasks,
            {
                excludeExtraneousValues: true,
            }
        )
        return tasks;
    }

    async getOne(id: number) {
        const rawTask = await this.repo.findOneBy({id})
        if (!rawTask) {
            throw new NotFoundException("Not Found");
        }
        return plainToInstance(TaskListDto, rawTask, {
            excludeExtraneousValues: true,
        })
    }

    async update(id: number, payload: TaskUpdateDto) {
        const tasks = await this.repo.findOneBy({id})
        if (!tasks) {
            throw new NotFoundException();
        }

        Object.assign(
            tasks,
            Object.fromEntries(
                Object.entries(payload).filter(
                    ([key, value]) => value !== null && value !== undefined,
                )
            )
        );
        await this.repo.save(tasks);
        return tasks;
    }

    async delete(id: number) {
        const tasks = await this.repo.findOneBy({id})
        if (!tasks) {
            throw new Error("Not Found");
        }
        return await this.repo.remove(tasks);
    }
}