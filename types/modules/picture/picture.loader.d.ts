import { NestDataLoader } from '../../shared/graphql/loader/loader.interceptor';
import DataLoader from 'dataloader';
import { PictureService } from './picture.service';
export declare class PictureCommentCountLoader implements NestDataLoader<number, number> {
    private readonly pictureService;
    constructor(pictureService: PictureService);
    generateDataLoader(): DataLoader<number, number, number>;
}
