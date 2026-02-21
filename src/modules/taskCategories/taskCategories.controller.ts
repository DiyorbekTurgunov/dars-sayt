import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {ApiOkResponse} from "@nestjs/swagger";
import {TaskCategoryListDto} from "./dto/list-taskCategory.dto";
import {TaskCategoryCreateDto} from "./dto/create-taskCategory.dto";
import {TaskCategoryUpdateDto} from "./dto/update-taskCategory.dto";
import {TaskCategoryService} from "./taskCategories.service";

@Controller('taskCategories')
export class TaskCategoryController {
    constructor(private readonly service: TaskCategoryService) {}

    @Post()
    @ApiOkResponse({type: TaskCategoryListDto})
    async create(@Body() payload: TaskCategoryCreateDto) {
        return await this.service.create(payload);
    }

    @Get()
    @ApiOkResponse({type: TaskCategoryListDto, isArray: true})
        async getAll() {
        return await this.service.getAll();
    }

    @Get(':id')
    @ApiOkResponse({type: TaskCategoryListDto})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Patch(':id')
    async update(@Param("id") id: number, @Body() payload: TaskCategoryUpdateDto) {
        return await this.service.update(id, payload);
    }

    @Delete(':id')
    async delete(@Param("id") id: number) {
        return this.service.delete(id);
    }

}