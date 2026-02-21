import {ApiProperty} from "@nestjs/swagger";
import {SubmissionStatus} from "../../../common/enums/submission-status.enum";
import {Type} from "class-transformer";
import {IsNumber, IsOptional, IsString} from "class-validator";

export class SubmissionUpdateDto {

    @ApiProperty()
    @Type(() => Number)
    @IsOptional()
    studentId: number;

    @ApiProperty()
    @Type(() => Number)
    @IsOptional()
    taskId: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    content?: string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    mark?: number;

    @ApiProperty()
    @IsOptional()
    feedback?: string;

    @ApiProperty()
    @IsOptional()
    status: SubmissionStatus;

}