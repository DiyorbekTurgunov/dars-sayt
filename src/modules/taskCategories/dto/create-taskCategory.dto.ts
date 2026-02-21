import {ApiProperty} from "@nestjs/swagger";
import {IsString, MaxLength} from "class-validator";

export class TaskCategoryCreateDto {


    @ApiProperty()
    @IsString()
    @MaxLength(128)
    title: string;
}