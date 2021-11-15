interface ILocation {
    lng: number;
    lat: number;
}
export declare class PlaceDetail {
    tag: string;
    type?: string;
    naviLocation?: ILocation;
    image?: string;
}
export declare class Place {
    uid: string;
    name: string;
    province: string;
    city: string;
    district: string;
    area: string;
    location: ILocation;
    address: string;
    detail: PlaceDetail;
}
export {};
