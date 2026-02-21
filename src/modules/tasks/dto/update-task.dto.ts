import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsNotEmpty, IsNumber} from "class-validator";

export class TaskUpdateDto {

    @ApiProperty()
    @Type(() => Number)
    lessonId: number;

    @ApiProperty()
    @Type(() => Number)
    templateId: number;

    @ApiProperty()
    @IsNumber()
    order?: number;
}