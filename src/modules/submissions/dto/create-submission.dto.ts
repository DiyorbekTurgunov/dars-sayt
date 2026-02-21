import {ApiProperty} from "@nestjs/swagger";
import {SubmissionStatus} from "../../../common/enums/submission-status.enum";
import {IsEnum, IsNumber, IsString} from "class-validator";
import {Type} from "class-transformer";

export class SubmissionCreateDto {

    @ApiProperty()
    @Type(() => Number)
    studentId: number;

    @ApiProperty()
    @Type(() => Number)
    taskId: number;

    @ApiProperty()
    @IsString()
    @Type(() => Text)
    content?: string;

    @ApiProperty()
    @IsNumber()
    mark?: number;

    @ApiProperty()
    @IsString()
    @Type(() => Text)
    feedback?: string;

    @ApiProperty()
    @IsEnum(SubmissionStatus)
    status: SubmissionStatus;

}