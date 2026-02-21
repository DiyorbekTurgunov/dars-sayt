import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserUpdateDto } from './dto/update-user.dto';
import {plainToInstance} from "class-transformer";
import {UserListDto} from "./dto/list-user.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly repo: Repository<User>,
    ) {}

    async create(payload: CreateUserDto) {
        const newUser = this.repo.create(payload as User);
        await this.repo.save(newUser);
        return plainToInstance(UserListDto, newUser, {
            excludeExtraneousValues: true,
        })
    }

    async getAll() {
        const  rawUsers = await this.repo.find();
        const users = plainToInstance(
            UserListDto,
            rawUsers,
            {
                excludeExtraneousValues: true
            },
        )
        return users;
    }

    async getOne(id: number) {
        const rawUser = await this.repo.findOneBy({id})
        if (!rawUser) {
            throw new NotFoundException('User not found');
        }
        return plainToInstance(UserListDto, rawUser, {
            excludeExtraneousValues: true,
        });
    }

    async update(id: number, payload: UserUpdateDto) {
        const users = await this.repo.findOneBy({id})
        if(!users) {
            throw new NotFoundException();
        }

        Object.assign(
            users,
            Object.fromEntries(
                Object.entries(payload).filter(
                    ([key, value]) => value !== null && value !== undefined,
                )
            )
        );
        await this.repo.save(users);
        return users;
    }

    async delete(id: number) {
        const users = await this.repo.findOneBy({id})
        if(!users) {
            throw new Error("User not found");
        }
        return await this.repo.remove(users);
    }
}
