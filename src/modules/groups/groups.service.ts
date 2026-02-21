import {Injectable, NotFoundException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {plainToInstance} from "class-transformer";
import {UserListDto} from "../users/dto/list-user.dto";
import {Group} from "./entities/group.entity";
import {GroupCreateDto} from "./dto/create-group.dto";
import {GroupListDto} from "./dto/list-group.dto";
import {GroupUpdateDto} from "./dto/update-group.dto";

@Injectable()
export class GroupService {
    constructor(
        @InjectRepository(Group)
        private readonly repo: Repository<Group>,
    ) {}

    async create(payload: GroupCreateDto) {
        const newGroup = this.repo.create(payload as Group);
        await this.repo.save(newGroup);
        return plainToInstance(UserListDto, newGroup, {
            excludeExtraneousValues: true,
        })
    }

    async getAll() {
        const  rawGroups = await this.repo.find();
        const groups = plainToInstance(
            GroupListDto,
            rawGroups,
            {
                excludeExtraneousValues: true
            },
        )
        return groups;
    }

    async getOne(id: number) {
        const rawGroup = await this.repo.findOneBy({id})
        if (!rawGroup) {
            throw new NotFoundException('User not found');
        }
        return plainToInstance(GroupListDto, rawGroup, {
            excludeExtraneousValues: true,
        });
    }

    async update(id: number, payload: GroupUpdateDto) {
        const groups = await this.repo.findOneBy({id})
        if(!groups) {
            throw new NotFoundException();
        }

        Object.assign(
            groups,
            Object.fromEntries(
                Object.entries(payload).filter(
                    ([key, value]) => value !== null && value !== undefined,
                )
            )
        );
        await this.repo.save(groups);
        return groups;
    }

    async delete(id: number) {
        const groups = await this.repo.findOneBy({id})
        if(!groups) {
            throw new Error("User not found");
        }
        return await this.repo.remove(groups);
    }
}
