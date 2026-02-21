import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {ApiOkResponse} from "@nestjs/swagger";
import {LessonListDto} from "./dto/list-lesson.dto";
import {LessonCreateDto} from "./dto/create-lesson.dto";
import {LessonUpdateDto} from "./dto/update-lesson.dto";
import {LessonService} from "./lessons.service";

@Controller('lesson')
export class LessonController {
    constructor(private readonly service: LessonService) {}

    @Post()
    @ApiOkResponse({type: LessonListDto})
    async create(@Body() payload: LessonCreateDto) {
        return await this.service.create(payload)
    }

    @Get()
    @ApiOkResponse({type: LessonListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

    @Get(':id')
    @ApiOkResponse({type: LessonListDto })
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Patch(':id')
    async update(@Param("id") id: number, @Body() payload: LessonUpdateDto) {
        return await this.service.update(id, payload)
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.service.delete(id);
    }
}