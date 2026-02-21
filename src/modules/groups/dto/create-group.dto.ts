import {ApiProperty} from "@nestjs/swagger";
import {IsDate, IsEnum, IsNotEmpty, IsString, MaxLength} from "class-validator";
import {GroupStatus} from "../../../common/enums/group-status.enum";
import {Type} from "class-transformer";

export class GroupCreateDto {

    @ApiProperty()
    @Type(() => Number)
    teacherId: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(128)
    title: string;

    @ApiProperty()
    @IsDate()
    @Type(() => Date)
    startDate: Date;

    @ApiProperty()
    @IsEnum(GroupStatus)
    status: GroupStatus;
}