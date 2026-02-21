import {TypeOrmModule} from "@nestjs/typeorm";
import {SubmissionController} from "./submissions.controller";
import {Submission} from "./entities/submission.entity";
import {Module} from "@nestjs/common";
import {SubmissionService} from "./submissions.service";

@Module({
    imports: [TypeOrmModule.forFeature([Submission])],
    controllers: [SubmissionController],
    providers: [SubmissionService],
    exports: [SubmissionService]
})
export class SubmissionModule {}