import {TypeOrmModule} from "@nestjs/typeorm";
import {StudentGroup} from "./entities/student-group.entity";
import {Module} from "@nestjs/common";
import {StudentGroupController} from "./students-groups.controller";
import {StudentGroupService} from "./students-groups.service";

@Module({
    imports: [TypeOrmModule.forFeature([StudentGroup])],
    controllers: [StudentGroupController],
    providers: [StudentGroupService],
    exports: [StudentGroupService]
})
export class StudentGroupModule {}