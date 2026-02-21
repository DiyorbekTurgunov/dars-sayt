import {Expose} from "class-transformer";


export class StudentGroupListDto {

    @Expose()
    id: number;

    @Expose()
    studentId: number;

    @Expose()
    groupId: number;

    @Expose()
    joinedDate: Date

    @Expose()
    isActive: boolean;

    @Expose()
    createdAt: Date;

    @Expose()
    updatedAt: Date;
}