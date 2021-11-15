import { UserEntity } from '../user/user.entity';
import { GetTagPictureListDto } from './dto/tag.dto';
import { TagService } from './tag.service';
export declare class TagController {
    private readonly tagService;
    constructor(tagService: TagService);
    getTagInfo(name: string, user: UserEntity): Promise<import("./tag.entity").TagEntity | undefined>;
    getTagPictureList(name: string, user: UserEntity, query: GetTagPictureListDto): Promise<void>;
}
