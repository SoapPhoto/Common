import { MapboxService } from '../../shared/mapbox/mapbox.service';
import { BaiduService } from '../../shared/baidu/baidu.service';
import { Repository } from 'typeorm';
import { LocationEntity } from './location.entity';
export declare class LocationService {
    private readonly mapboxService;
    private readonly baiduService;
    private locationRepository;
    constructor(mapboxService: MapboxService, baiduService: BaiduService, locationRepository: Repository<LocationEntity>);
    search(value: string, region?: string): Promise<import("./interface/place.interface").Place[]>;
    placeSuggestion(value: string, region: string): Promise<import("./interface/place.interface").Place[]>;
    placeDetail(uid: string): Promise<LocationEntity | undefined>;
    reverseGeocoding(location: string): Promise<import("./interface/place.interface").Place[]>;
    getOneOrCreate(uid: string): Promise<LocationEntity | undefined>;
}
