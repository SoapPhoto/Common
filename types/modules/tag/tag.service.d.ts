/// <reference types="../typings/index" />
import { Repository } from 'typeorm';
import { PictureService } from '../picture/picture.service';
import { UserEntity } from '../user/user.entity';
import { TagEntity } from './tag.entity';
export declare class TagService {
    private tagRepository;
    private readonly pictureService;
    constructor(tagRepository: Repository<TagEntity>, pictureService: PictureService);
    createTag(tag: Partial<TagEntity>): Promise<TagEntity>;
    getTagInfo(name: string, _user: Maybe<UserEntity>): Promise<TagEntity | undefined>;
}
