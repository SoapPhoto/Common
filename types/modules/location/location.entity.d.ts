import { BaseEntity } from '../../common/base.entity';
export interface ILocation {
    lng: number;
    lat: number;
}
export interface ILocationDetail {
    tag: string;
    navi_location: ILocation;
    shop_hours: string;
    detail_url: string;
    type: string;
    overall_rating: string;
    image_num: string;
    comment_num: string;
    scope_type: string;
    content_tag: string;
}
export declare class LocationEntity extends BaseEntity {
    uid: string;
    form: string;
    streetId: string;
    location: ILocation;
    name: string;
    address: string;
    province: string;
    city: string;
    area: string;
    detail: ILocationDetail;
}
