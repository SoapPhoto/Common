import { MapboxService } from '../../shared/mapbox/mapbox.service';
import { LocationClientType } from '../../../enum/location';
import { LocationService } from './location.service';
export declare class LocationController {
    private readonly locationService;
    private readonly mapboxService;
    constructor(locationService: LocationService, mapboxService: MapboxService);
    searchPlace(region: string, value: string, type?: LocationClientType): Promise<import("../../shared/mapbox/mapbox.interface").IMapboxGeocodeFeature[] | import("./interface/place.interface").Place[]>;
    reverseGeocoding(location: string): Promise<import("./interface/place.interface").Place[]>;
}
