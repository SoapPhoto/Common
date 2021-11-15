import { LocationClientType } from '../../../enum/location';
import { MapboxService } from '../../shared/mapbox/mapbox.service';
import { LocationService } from './location.service';
export declare class LocationResolver {
    private readonly locationService;
    private readonly mapboxService;
    constructor(locationService: LocationService, mapboxService: MapboxService);
    searchPlace(value: string, region: string, type?: LocationClientType): Promise<import("./interface/place.interface").Place[] | import("../../shared/mapbox/mapbox.interface").IMapboxGeocodeFeature[]>;
    reverseGeocoding(location: string): Promise<import("./interface/place.interface").Place[]>;
    placeSuggestion(value: string, region: string): Promise<import("./interface/place.interface").Place[]>;
    placeDetail(uid: string): Promise<import("./location.entity").LocationEntity | undefined>;
}
