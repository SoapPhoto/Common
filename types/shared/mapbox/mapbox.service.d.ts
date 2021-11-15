/// <reference types="@mapbox/mapbox-sdk" />
import { LngLatLike } from 'mapbox-gl';
import { PictureLocation } from '../../modules/picture/interface/location.interface';
import { IMapboxGeocodeFeature } from './mapbox.interface';
export declare class MapboxService {
    private geocodingClient;
    forwardGeocode(value: string): Promise<IMapboxGeocodeFeature[]>;
    reverseGeocode(location: string | LngLatLike): Promise<PictureLocation | IMapboxGeocodeFeature | null>;
}
