import { Place } from '../../modules/location/interface/place.interface';
import { LocationEntity } from '../../modules/location/location.entity';
import { BaiduClassify, BaiduToken } from './interface/baidu.interface';
export declare class BaiduService {
    private mapToken;
    private token?;
    private expiresDate;
    getAccountToken(): Promise<BaiduToken>;
    getImageClassify(image: string, url?: boolean): Promise<BaiduClassify[]>;
    chinaPlaceSearch(query: string, region?: string): Promise<Place[]>;
    abroadPlaceSearch(region: string, query: string): Promise<Place[]>;
    reverseGeocoding(location: string): Promise<Place[]>;
    placeSuggestion(query: string, region?: string): Promise<Place[]>;
    placeDetail(uid: string): Promise<LocationEntity | undefined>;
}
