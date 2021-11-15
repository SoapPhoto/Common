import { MapboxService } from '../../shared/mapbox/mapbox.service';
import { BaiduService } from '../../shared/baidu/baidu.service';
export declare class LocationService {
    private readonly mapboxService;
    private readonly baiduService;
    constructor(mapboxService: MapboxService, baiduService: BaiduService);
    search(value: string, region?: string): Promise<import("./interface/place.interface").Place[]>;
    placeSuggestion(value: string, region: string): Promise<import("./interface/place.interface").Place[]>;
    placeDetail(uid: string): Promise<import("./interface/place.interface").Place | undefined>;
    reverseGeocoding(location: string): Promise<import("./interface/place.interface").Place[]>;
}
