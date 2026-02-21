import {ApiProperty} from "@nestjs/swagger";
import {IsBoolean, IsDate, IsOptional} from "class-validator";
import {Type} from "class-transformer";

export class StudentGroupUpdateDto {

    @ApiProperty()
    @IsOptional()
    studentId: number;

    @ApiProperty()
    @IsOptional()
    groupId: number;

    @ApiProperty()
    @IsOptional()
    @IsDate()
    @Type(() => Date)
    joinedDate: Date;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    isActive: boolean;

}