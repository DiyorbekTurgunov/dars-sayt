import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsDate, IsNotEmpty, IsString, MaxLength} from "class-validator";

export class LessonCreateDto {

    @ApiProperty()
    @Type(() => Number)
    groupId: number;

    @ApiProperty()
    @MaxLength(128)
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsDate()
    @Type(() => Date)
    startDate: Date;
}