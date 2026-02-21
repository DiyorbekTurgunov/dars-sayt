import {Injectable, NotFoundException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {TaskCategory} from "./entities/task-category.entity";
import {Repository} from "typeorm";
import {plainToInstance} from "class-transformer";
import {TaskCategoryCreateDto} from "./dto/create-taskCategory.dto";
import {TaskCategoryListDto} from "./dto/list-taskCategory.dto";
import {TaskCategoryUpdateDto} from "./dto/update-taskCategory.dto";

@Injectable()
export class TaskCategoryService {
    constructor(
        @InjectRepository(TaskCategory)
        private readonly repo: Repository<TaskCategory>
    ) {}

    async create(payload: TaskCategoryCreateDto) {
        const newTaskCategory = this.repo.create(payload);
        await this.repo.save(newTaskCategory);
        return plainToInstance(TaskCategoryListDto, newTaskCategory, {
            excludeExtraneousValues: true,
        })
    }

    async getAll() {
        const  rawTaskCategories = await this.repo.find();
        const taskCategories = plainToInstance(
            TaskCategoryListDto,
            rawTaskCategories,
            {
                excludeExtraneousValues: true
            },
        )
        return taskCategories;
    }

    async getOne(id: number) {
        const rawTaskCategories = await this.repo.findOneBy({id})
        if (!rawTaskCategories) {
            throw new NotFoundException('User not found');
        }
        return plainToInstance(TaskCategoryListDto, rawTaskCategories, {
            excludeExtraneousValues: true,
        });
    }

    async update(id: number, payload: TaskCategoryUpdateDto) {
        const taskCategories = await this.repo.findOneBy({id})
        if(!taskCategories) {
            throw new NotFoundException();
        }

        Object.assign(
            taskCategories,
            Object.fromEntries(
                Object.entries(payload).filter(
                    ([key, value]) => value !== null && value !== undefined,
                )
            )
        );
        await this.repo.save(taskCategories);
        return taskCategories;
    }

    async delete(id: number) {
        const taskCategory = await this.repo.findOneBy({id})
        if(!taskCategory) {
            throw new Error("User not found");
        }
        return await this.repo.remove(taskCategory);
    }
}