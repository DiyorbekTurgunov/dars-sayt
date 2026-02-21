import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {ApiOkResponse} from "@nestjs/swagger";
import {TaskListDto} from "./dto/list-task.dto";
import {TaskCreateDto} from "./dto/create-task.dto";
import {TaskUpdateDto} from "./dto/update-task.dto";
import {TaskService} from "./tasks.service";

@Controller('task')
export class TaskController {
    constructor(private readonly service: TaskService) {}

    @Post()
    @ApiOkResponse({type: TaskListDto})
    async create(@Body() payload: TaskCreateDto) {
        return await this.service.create(payload);
    }

    @Get()
    @ApiOkResponse({type: TaskListDto, isArray: true})
        async getAll() {
        return await this.service.getAll();
    }

    @Get(':id')
    @ApiOkResponse({type: TaskListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Patch(':id')
    async update(@Param("id") id: number, @Body() payload: TaskUpdateDto) {
        return await this.service.update(id, payload);
    }

    @Delete(':id')
    async delete(@Param("id") id: number) {
        return this.service.delete(id);
    }
}