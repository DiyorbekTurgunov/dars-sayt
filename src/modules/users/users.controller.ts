import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserUpdateDto  } from './dto/update-user.dto';
import {UserListDto} from "./dto/list-user.dto";
import {ApiOkResponse} from "@nestjs/swagger";

@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService) {}

    @Post()
    @ApiOkResponse({type: UserListDto})
    async create(@Body() payload: CreateUserDto) {
        return await this.service.create(payload)
    }

    @Get()
    @ApiOkResponse({type: UserListDto, isArray: true})
        async getAll() {
        return await this.service.getAll()
    }

    @Get(':id')
    @ApiOkResponse({type: UserListDto })
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Patch(':id')
    async update(@Param("id") id: number, @Body() payload: UserUpdateDto) {
        return await this.service.update(id, payload)
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.service.delete(id);
    }
}
