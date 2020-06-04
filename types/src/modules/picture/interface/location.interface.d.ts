export declare class Poi {
    /**
     * 地址
     *
     * @type {string}
     * @memberof Poi
     */
    addr?: string;
    /**
     * 名称
     *
     * @type {string}
     * @memberof Poi
     */
    name?: string;
    /**
     * 类型
     *
     * @type {string}
     * @memberof Poi
     */
    poiType?: string;
    /**
     * point
     *
     * @type {any}
     * @memberof Poi
     */
    point?: any;
    /**
     * tag
     *
     * @type {string}
     * @memberof Poi
     */
    tag?: string;
}
export declare class PictureLocation {
    /**
     * 结构化地址信息
     *
     * @type {string}
     * @memberof Location
     */
    formatted_address?: string;
    /**
     * 坐标所在商圈信息
     *
     * @type {string}
     * @memberof Location
     */
    business?: string;
    /**
     * 国家
     *
     * @type {string}
     * @memberof Location
     */
    country?: string;
    /**
     * 国家代码
     *
     * @type {string}
     * @memberof Location
     */
    country_code?: string;
    /**
     * 省名
     *
     * @type {string}
     * @memberof Location
     */
    province: string;
    /**
     * 城市名
     *
     * @type {string}
     * @memberof Location
     */
    city: string;
    /**
     * 区县名
     *
     * @type {string}
     * @memberof Location
     */
    district: string;
    /**
     * 乡镇名
     *
     * @type {string}
     * @memberof Location
     */
    town: string;
    /**
     * 当前位置结合POI的语义化结果描述
     *
     * @type {string}
     * @memberof Location
     */
    pois: Poi[];
    location: {
        lng: number;
        lat: number;
    };
}
