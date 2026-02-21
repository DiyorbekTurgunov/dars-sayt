import {Expose} from "class-transformer";
import {SubmissionStatus} from "../../../common/enums/submission-status.enum";

export class SubmissionListDto {

    @Expose()
    id: number;

    @Expose()
    studentId: number;

    @Expose()
    taskId: number;

    @Expose()
    content: string;

    @Expose()
    mark: number;

    @Expose()
    feedback: string;

    @Expose()
    status: SubmissionStatus;

    @Expose()
    createdAt: Date;

    @Expose()
    updatedAt: Date;
}