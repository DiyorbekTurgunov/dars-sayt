import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {ApiOkResponse} from "@nestjs/swagger";
import {TaskTemplateListDto} from "./dto/list-taskTemplate.dto";
import {TaskTemplateCreateDto} from "./dto/create-taskTemplate.dto";
import {TaskTemplateUpdateDto} from "./dto/update-taskTemplate.dto";
import {TaskTemplateService} from "./taskTemplate.service";

@Controller('TaskTemplate')
export class TaskTemplateController {
    constructor( private readonly service: TaskTemplateService) {}

    @Post()
    @ApiOkResponse({type: TaskTemplateListDto})
    async create(@Body() payload: TaskTemplateCreateDto) {
        return await this.service.create(payload)
    }

    @Get()
    @ApiOkResponse({type: TaskTemplateListDto, isArray: true})
        async getAll() {
        return await this.service.getAll()
    }

    @Get(':id')
    @ApiOkResponse({type: TaskTemplateListDto})
    async getOne(@Param('id') id: number) {
        return await this.service.getOne(id)
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() payload: TaskTemplateUpdateDto) {
        return await this.service.update(id, payload)
    }

    @Delete()
    async delete(@Param('id') id: number) {
        return this.service.delete(id)
    }
}