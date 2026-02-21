import {ApiProperty} from "@nestjs/swagger";
import {IsOptional, IsString, MaxLength} from "class-validator";

export class TaskCategoryUpdateDto {

    @ApiProperty()
    @IsString()
    @MaxLength(128)
    @IsOptional()
    title: string;

}