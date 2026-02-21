import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {ApiOkResponse} from "@nestjs/swagger";
import {StudentGroupListDto} from "./dto/list-student-group.dto";
import {StudentGroupCreateDto} from "./dto/create-student-group.dto";
import {StudentGroupUpdateDto} from "./dto/update-student-group.dto";
import {StudentGroupService} from "./students-groups.service";

@Controller('student-group')
export class StudentGroupController {
    constructor(private readonly service: StudentGroupService) {}

    @Post()
    @ApiOkResponse({type: StudentGroupListDto})
    async create(@Body() payload: StudentGroupCreateDto) {
        return await this.service.create(payload)
    }

    @Get()
    @ApiOkResponse({type: StudentGroupListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

    @Get(':id')
    @ApiOkResponse({type: StudentGroupListDto, isArray: true })
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Patch(':id')
    async update(@Param("id") id: number, @Body() payload: StudentGroupUpdateDto) {
        return await this.service.update(id, payload)
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.service.delete(id);
    }
}