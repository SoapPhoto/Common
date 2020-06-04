/// <reference types="@mapbox/mapbox-sdk" />
import { GeocodeFeature } from '@mapbox/mapbox-sdk/services/geocoding';
export interface IMapboxGeocodeFeature extends Omit<GeocodeFeature, 'context'> {
    context: Record<string, GeocodeFeature>;
}
