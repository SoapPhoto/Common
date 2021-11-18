/// <reference types="@mapbox/mapbox-sdk" />
import { LngLatLike } from 'mapbox-gl';
import { IMapboxGeocodeFeature } from './mapbox.interface';
export declare class MapboxService {
    private geocodingClient;
    forwardGeocode(value: string): Promise<IMapboxGeocodeFeature[]>;
    reverseGeocode(location: string | LngLatLike): Promise<IMapboxGeocodeFeature | null>;
}
