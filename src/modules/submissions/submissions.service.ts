import {Injectable, NotFoundException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {plainToInstance} from "class-transformer";
import {UserListDto} from "../users/dto/list-user.dto";
import {Submission} from "./entities/submission.entity";
import {SubmissionCreateDto} from "./dto/create-submission.dto";
import {SubmissionListDto} from "./dto/list-submission.dto";
import {SubmissionUpdateDto} from "./dto/update-submission.dto";

@Injectable()
export class SubmissionService {
    constructor(
        @InjectRepository(Submission)
        private readonly repo: Repository<Submission>,
    ) {}

    async create(payload: SubmissionCreateDto) {
        const newSubmission = this.repo.create(payload as Submission);
        await this.repo.save(newSubmission);
        return plainToInstance(SubmissionListDto, newSubmission, {
            excludeExtraneousValues: true,
        })
    }

    async getAll() {
        const  rawSubmissions = await this.repo.find();
        const submissions = plainToInstance(
            UserListDto,
            rawSubmissions,
            {
                excludeExtraneousValues: true
            },
        )
        return submissions;
    }

    async getOne(id: number) {
        const rawSubmission = await this.repo.findOneBy({id})
        if (!rawSubmission) {
            throw new NotFoundException('User not found');
        }
        return plainToInstance(SubmissionListDto, rawSubmission, {
            excludeExtraneousValues: true,
        });
    }

    async update(id: number, payload: SubmissionUpdateDto) {
        const submissions = await this.repo.findOneBy({id})
        if(!submissions) {
            throw new NotFoundException();
        }

        Object.assign(
            submissions,
            Object.fromEntries(
                Object.entries(payload).filter(
                    ([key, value]) => value !== null && value !== undefined,
                )
            )
        );
        await this.repo.save(submissions);
        return submissions;
    }

    async delete(id: number) {
        const submissions = await this.repo.findOneBy({id})
        if(!submissions) {
            throw new Error("User not found");
        }
        return await this.repo.remove(submissions);
    }
}
