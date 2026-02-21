import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsString, MaxLength} from "class-validator";
import {Type} from "class-transformer";

export class FileCreateDto {

    @ApiProperty()
    @Type(() => Number)
    studentId: number;

    @ApiProperty()
    @Type(() => Number)
    lessonId: number;

    @ApiProperty()
    @Type(() => Number)
    submissionId: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    path: string;

    @ApiProperty()
    @IsNumber()
    size: number;

}