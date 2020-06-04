import { MapboxService } from '@server/shared/mapbox/mapbox.service';
import { LocationClientType } from '@common/enum/location';
import { LocationService } from './location.service';
export declare class LocationController {
    private readonly locationService;
    private readonly mapboxService;
    constructor(locationService: LocationService, mapboxService: MapboxService);
    searchPlace(value: string, type?: LocationClientType): Promise<any>;
    reverseGeocoding(location: string): Promise<import("../picture/interface/location.interface").PictureLocation>;
}
