import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {FileController} from "./files.controller";
import {FileEntity} from "./entities/file.entity";
import {FileService} from "./files.service";

@Module({
    imports: [TypeOrmModule.forFeature([FileEntity])],
    controllers: [FileController],
    providers: [FileService],
    exports: [FileService]
})
export class FileModule {}