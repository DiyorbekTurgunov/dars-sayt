import {Expose} from "class-transformer";
import {User} from "../../users/entities/user.entity";
import {Lesson} from "../../lessons/entities/lesson.entity";
import {Submission} from "../../submissions/entities/submission.entity";

export class FileListDto {

    @Expose()
    id: number;

    @Expose()
    studentId: number;

    @Expose()
    lessonId: number;

    @Expose()
    submissionId: number;

    @Expose()
    path: string;

    @Expose()
    size: number;

    @Expose()
    createdAt: Date;

    @Expose()
    updatedAt: Date;

}