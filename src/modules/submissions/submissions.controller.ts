import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {ApiOkResponse} from "@nestjs/swagger";
import {SubmissionCreateDto} from "./dto/create-submission.dto";
import {SubmissionListDto} from "./dto/list-submission.dto";
import {SubmissionUpdateDto} from "./dto/update-submission.dto";
import {SubmissionService} from "./submissions.service";


@Controller('submissions')
export class SubmissionController {
    constructor(private readonly service: SubmissionService) {}

    @Post()
    @ApiOkResponse({type: SubmissionListDto})
    async create(@Body() payload: SubmissionCreateDto) {
        return await this.service.create(payload)
    }

    @Get()
    @ApiOkResponse({type: SubmissionListDto, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

    @Get(':id')
    @ApiOkResponse({type: SubmissionListDto })
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Patch(':id')
    async update(@Param("id") id: number, @Body() payload: SubmissionUpdateDto) {
        return await this.service.update(id, payload)
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.service.delete(id);
    }
}