import {Injectable, NotFoundException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {plainToInstance} from "class-transformer";
import {UserListDto} from "../users/dto/list-user.dto";
import {Lesson} from "./entities/lesson.entity";
import {LessonCreateDto} from "./dto/create-lesson.dto";
import {LessonListDto} from "./dto/list-lesson.dto";
import {LessonUpdateDto} from "./dto/update-lesson.dto";

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson)
        private readonly repo: Repository<Lesson>,
    ) {}

    async create(payload: LessonCreateDto) {
        const newLesson = this.repo.create(payload as Lesson);
        await this.repo.save(newLesson);
        return plainToInstance(UserListDto, newLesson, {
            excludeExtraneousValues: true,
        })
    }

    async getAll() {
        const  rawLessons = await this.repo.find();
        const lessons = plainToInstance(
            LessonListDto,
            rawLessons,
            {
                excludeExtraneousValues: true
            },
        )
        return lessons;
    }

    async getOne(id: number) {
        const rawLesson = await this.repo.findOneBy({id})
        if (!rawLesson) {
            throw new NotFoundException('User not found');
        }
        return plainToInstance(LessonListDto, rawLesson, {
            excludeExtraneousValues: true,
        });
    }

    async update(id: number, payload: LessonUpdateDto) {
        const lessons = await this.repo.findOneBy({id})
        if(!lessons) {
            throw new NotFoundException();
        }

        Object.assign(
            lessons,
            Object.fromEntries(
                Object.entries(payload).filter(
                    ([key, value]) => value !== null && value !== undefined,
                )
            )
        );
        await this.repo.save(lessons);
        return lessons;
    }

    async delete(id: number) {
        const lessons = await this.repo.findOneBy({id})
        if(!lessons) {
            throw new Error("User not found");
        }
        return await this.repo.remove(lessons);
    }
}