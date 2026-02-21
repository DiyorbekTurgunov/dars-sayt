import {Expose} from "class-transformer";
import {GroupStatus} from "../../../common/enums/group-status.enum";

export class GroupListDto {

    @Expose()
    id: number;

    @Expose()
    teacherId: number;

    @Expose()
    title: string;

    @Expose()
    startDate: Date;

    @Expose()
    status: GroupStatus;

    @Expose()
    createdAt: Date;

    @Expose()
    updatedAt: Date;

}