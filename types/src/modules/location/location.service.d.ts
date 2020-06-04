import { MapboxService } from '@server/shared/mapbox/mapbox.service';
import { PictureLocation } from '../picture/interface/location.interface';
export declare class LocationService {
    private readonly mapboxService;
    constructor(mapboxService: MapboxService);
    search(value: string): Promise<any>;
    reverseGeocoding(location: string): Promise<PictureLocation>;
}
