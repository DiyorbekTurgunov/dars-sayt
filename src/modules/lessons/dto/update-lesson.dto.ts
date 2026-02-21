import {ApiProperty} from "@nestjs/swagger";
import {IsDate, IsOptional, IsString, MaxLength} from "class-validator";
import {Type} from "class-transformer";

export class LessonUpdateDto {

    @ApiProperty()
    @IsOptional()
    @Type(() => Number)
    groupId: number;

    @ApiProperty()
    @IsOptional()
    @MaxLength(128)
    @IsString()
    title: string;

    @ApiProperty()
    @IsOptional()
    @IsDate()
    @Type(() => Date)
    startDate: Date;
}