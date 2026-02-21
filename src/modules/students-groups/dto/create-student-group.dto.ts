import {ApiProperty} from "@nestjs/swagger";
import { IsDate } from "class-validator";
import {Type} from "class-transformer";

export class StudentGroupCreateDto {

    @ApiProperty()
    @Type(() => Number)
    studentId: number;

    @ApiProperty()
    @Type(() => Number)
    groupId: number;

    @ApiProperty()
    @IsDate()
    @Type(()=> Date)
    joinedDate: Date;

    @ApiProperty()
    @Type(() => Boolean)
    isActive: boolean;

}