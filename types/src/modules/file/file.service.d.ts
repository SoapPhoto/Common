import { Repository } from 'typeorm';
import { FileEntity } from './file.entity';
import { CreateFileDot } from './dto/file.dto';
import { UserService } from '../user/user.service';
import { PictureEntity } from '../picture/picture.entity';
export declare class FileService {
    private fileRepository;
    private readonly userService;
    constructor(fileRepository: Repository<FileEntity>, userService: UserService);
    create(data: CreateFileDot): Promise<void>;
    getOne(key: string): Promise<FileEntity>;
    activated(key: string): Promise<import("typeorm").UpdateResult>;
    bindPicture(key: string, picture: PictureEntity): Promise<import("typeorm").UpdateResult>;
}
