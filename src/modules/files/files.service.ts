import {Injectable, NotFoundException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {plainToInstance} from "class-transformer";
import {FileEntity} from "./entities/file.entity";
import {FileCreateDto} from "./dto/create-file.dto";
import {FileListDto} from "./dto/list-file.dto";
import {FileUpdateDto} from "./dto/update-file.dto";

@Injectable()
export class FileService {
    constructor(
        @InjectRepository(FileEntity)
        private readonly repo: Repository<FileEntity>,
    ) {}

    async create(payload: FileCreateDto) {
        const newFile = this.repo.create(payload as FileEntity);
        await this.repo.save(newFile);
        return plainToInstance(FileListDto, newFile, {
            excludeExtraneousValues: true,
        })
    }

    async getAll() {
        const  rawFiles = await this.repo.find();
        const files = plainToInstance(
            FileListDto,
            rawFiles,
            {
                excludeExtraneousValues: true
            },
        )
        return files;
    }

    async getOne(id: number) {
        const rawFile = await this.repo.findOneBy({id})
        if (!rawFile) {
            throw new NotFoundException('User not found');
        }
        return plainToInstance(FileListDto, rawFile, {
            excludeExtraneousValues: true,
        });
    }

    async update(id: number, payload: FileUpdateDto) {
        const files = await this.repo.findOneBy({id})
        if(!files) {
            throw new NotFoundException();
        }

        Object.assign(
            files,
            Object.fromEntries(
                Object.entries(payload).filter(
                    ([key, value]) => value !== null && value !== undefined,
                )
            )
        );
        await this.repo.save(files);
        return files;
    }

    async delete(id: number) {
        const files = await this.repo.findOneBy({id})
        if(!files) {
            throw new Error("User not found");
        }
        return await this.repo.remove(files);
    }
}