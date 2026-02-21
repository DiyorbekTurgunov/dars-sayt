import {ApiProperty} from "@nestjs/swagger";
import {IsDate, IsEnum, IsOptional, IsString, MaxLength} from "class-validator";
import {Type} from "class-transformer";
import {GroupStatus} from "../../../common/enums/group-status.enum";

export class GroupUpdateDto {

    @ApiProperty()
    @IsOptional()
    @Type(() => Number)
    teacherId: number;

    @IsString()
    @MaxLength(128)
    @IsOptional()
    title: string;

    @ApiProperty()
    @IsDate()
    @IsOptional()
    @Type(() => Date)
    startDate: Date;

    @ApiProperty()
    @IsEnum(GroupStatus)
    @IsOptional()
    status: GroupStatus;
}