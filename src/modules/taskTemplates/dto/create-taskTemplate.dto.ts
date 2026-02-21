import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";

export class TaskTemplateCreateDto {

    @ApiProperty()
    @Type(() => Number)
    id: number;

    @ApiProperty()
    @IsString()
    @MaxLength(128)
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    @MaxLength(1024)
    @IsOptional()
    description: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    content: string;
}