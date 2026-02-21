import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsOptional, IsString, MaxLength} from "class-validator";

export class TaskTemplateUpdateDto {

    @ApiProperty()
    @Type(() => Number)
    @IsOptional()
    categoryId: Number;

    @ApiProperty()
    @IsString()
    @MaxLength(128)
    @IsOptional()
    title: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    @MaxLength(128)
    description: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    @Type(() => Text)
    content: string;
}