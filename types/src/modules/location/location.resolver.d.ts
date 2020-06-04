import { LocationService } from './location.service';
export declare class LocationResolver {
    private readonly locationService;
    constructor(locationService: LocationService);
    searchPlace(value: string): Promise<any>;
    reverseGeocoding(location: string): Promise<import("../picture/interface/location.interface").PictureLocation>;
}
