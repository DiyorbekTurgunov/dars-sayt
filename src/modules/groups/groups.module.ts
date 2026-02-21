import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {GroupController} from "./groups.controller";
import {Group} from "./entities/group.entity";
import {GroupService} from "./groups.service";

@Module({
    imports: [TypeOrmModule.forFeature([Group])],
    controllers: [GroupController],
    providers: [GroupService],
    exports: [GroupService]
})
export class GroupModule {}