import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {ApiOkResponse} from "@nestjs/swagger";
import {FileListDto} from "./dto/list-file.dto";
import {FileCreateDto} from "./dto/create-file.dto";
import {FileUpdateDto} from "./dto/update-file.dto";
import {FileService} from "./files.service";

@Controller('file')
export class FileController {
    constructor(private readonly service: FileService) {}

    @Post()
    @ApiOkResponse({type: FileListDto})
    async create(@Body() payload: FileCreateDto) {
        return await this.service.create(payload)
    }

    @Get()
    @ApiOkResponse({type: FileListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

    @Get(':id')
    @ApiOkResponse({type: FileListDto })
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Patch(':id')
    async update(@Param("id") id: number, @Body() payload: FileUpdateDto) {
        return await this.service.update(id, payload)
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.service.delete(id);
    }
}
