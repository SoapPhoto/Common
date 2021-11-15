export declare class Poi {
    addr?: string;
    name?: string;
    poiType?: string;
    point?: any;
    tag?: string;
}
export declare class PictureLocation {
    formatted_address?: string;
    business?: string;
    country?: string;
    country_code?: string;
    province: string;
    city: string;
    district: string;
    town: string;
    pois: Poi[];
    location: {
        lng: number;
        lat: number;
    };
}
