import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {ApiOkResponse} from "@nestjs/swagger";
import {GroupListDto} from "./dto/list-group.dto";
import {GroupCreateDto} from "./dto/create-group.dto";
import {GroupUpdateDto} from "./dto/update-group.dto";
import {GroupService} from "./groups.service";

@Controller('group')
export class GroupController {
    constructor(private readonly service: GroupService) {}

    @Post()
    @ApiOkResponse({type: GroupListDto})
    async create(@Body() payload: GroupCreateDto) {
        return await this.service.create(payload)
    }

    @Get()
    @ApiOkResponse({type: GroupListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

    @Get(':id')
    @ApiOkResponse({type: GroupListDto })
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Patch(':id')
    async update(@Param("id") id: number, @Body() payload: GroupUpdateDto) {
        return await this.service.update(id, payload)
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.service.delete(id);
    }
}