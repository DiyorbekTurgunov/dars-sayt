import {Injectable, NotFoundException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {plainToInstance} from "class-transformer";
import {StudentGroup} from "./entities/student-group.entity";
import {StudentGroupCreateDto} from "./dto/create-student-group.dto";
import {StudentGroupListDto} from "./dto/list-student-group.dto";
import {StudentGroupUpdateDto} from "./dto/update-student-group.dto";

@Injectable()
export class StudentGroupService {
    constructor(
        @InjectRepository(StudentGroup)
        private readonly repo: Repository<StudentGroup>,
    ) {}

    async create(payload: StudentGroupCreateDto) {
        const newStudentGroup = this.repo.create(payload as StudentGroup);
        await this.repo.save(newStudentGroup);
        return plainToInstance(StudentGroupListDto, newStudentGroup, {
            excludeExtraneousValues: true,
        })
    }

    async getAll() {
        const  rawStudentGroups = await this.repo.find();
        const studentGroups = plainToInstance(
            StudentGroupListDto,
            rawStudentGroups,
            {
                excludeExtraneousValues: true
            },
        )
        return studentGroups;
    }

    async getOne(id: number) {
        const rawStudentGroup = await this.repo.findOneBy({id})
        if (!rawStudentGroup) {
            throw new NotFoundException('User not found');
        }
        return plainToInstance(StudentGroupListDto, rawStudentGroup, {
            excludeExtraneousValues: true,
        });
    }

    async update(id: number, payload: StudentGroupUpdateDto) {
        const studentGroups = await this.repo.findOneBy({id})
        if(!studentGroups) {
            throw new NotFoundException();
        }

        Object.assign(
            studentGroups,
            Object.fromEntries(
                Object.entries(payload).filter(
                    ([key, value]) => value !== null && value !== undefined,
                )
            )
        );
        await this.repo.save(studentGroups);
        return studentGroups;
    }

    async delete(id: number) {
        const studentGroups = await this.repo.findOneBy({id})
        if(!studentGroups) {
            throw new Error("User not found");
        }
        return await this.repo.remove(studentGroups);
    }
}
