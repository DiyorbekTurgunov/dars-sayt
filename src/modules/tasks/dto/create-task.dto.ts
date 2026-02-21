import {ApiProperty} from "@nestjs/swagger";
import {IsNumber} from "class-validator";
import {Type} from "class-transformer";

export class TaskCreateDto {

    @ApiProperty()
    @Type(() => Number)
    lessonId: number;

    @ApiProperty()
    @Type(() => Number)
    templateId: number;

    @ApiProperty()
    @IsNumber()
    order: number;
}