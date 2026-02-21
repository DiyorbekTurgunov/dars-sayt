import {Injectable, NotFoundException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {TaskTemplateCreateDto} from "./dto/create-taskTemplate.dto";
import {plainToInstance} from "class-transformer";
import {TaskTemplateListDto} from "./dto/list-taskTemplate.dto";
import {TaskTemplateUpdateDto} from "./dto/update-taskTemplate.dto";
import {TaskTemplate} from "./entities/task-template.entity";

@Injectable()
export class TaskTemplateService {
    constructor(
        @InjectRepository(TaskTemplate)
        private readonly repo: Repository<TaskTemplate>,
    ) {}

    async create(payload: TaskTemplateCreateDto) {
        const newTask = this.repo.create(payload as TaskTemplate);
        await this.repo.save(newTask);
        return plainToInstance(TaskTemplateListDto, newTask, {
            excludeExtraneousValues: true,
        })
    }

    async getAll() {
        const rawTasks = await this.repo.find();
        const taskTemplates = plainToInstance(
            TaskTemplateListDto,
            rawTasks,
            {
                excludeExtraneousValues: true,
            },
        )
        return taskTemplates;
    }

    async getOne(id: number) {
        const rawTask = await this.repo.findOneBy({id})
        if (!rawTask) {
            throw new NotFoundException("Task not found");
        }
        return plainToInstance(TaskTemplateListDto, rawTask, {
            excludeExtraneousValues: true,
        });
    }

    async update(id: number, payload: TaskTemplateUpdateDto) {
        const taskTemplates = await this.repo.findOneBy({id})
        if (!taskTemplates) {
            throw new NotFoundException()
        }

        Object.assign(
            taskTemplates,
            Object.fromEntries(
                Object.entries(payload).filter(
                    ([key, value]) => value !== null && value !== undefined,
                )
            )
        );
        await this.repo.save(taskTemplates);
        return taskTemplates;
    }

    async delete(id: number) {
        const taskTemplates = await this.repo.findOneBy({id})
        if (!taskTemplates) {
            throw new Error("Task not found");
        }
        return await this.repo.remove(taskTemplates);
    }
}