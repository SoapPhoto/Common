import { InstagramService } from './instagram.service';
export declare class InstagramController {
    private readonly instagramService;
    constructor(instagramService: InstagramService);
    test(): Promise<unknown>;
    test2(): Promise<void>;
}
