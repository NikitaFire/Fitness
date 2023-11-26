import _ from "lodash";
declare global {
    interface Window {
        [key: string]: any;
    }
    interface Navigator {
        camera: any
        notification: any
        device: any
        splashscreen: any
    }
    var device, cordova, Media, StatusBar, Camera, CameraPopoverOptions, CameraPopoverHandle;
    var _: _;
}
// Appery.io models
export interface $aio_empty_object {};
//
interface __ProductModel_sub_003 extends Array < string > {}
interface __ProductModel_sub_002 extends Array < string > {}
interface __ProductModel_sub_001 extends Array < string > {}
export interface ProductModel {
    "description": string,
    "price": string,
    "name": string,
    "sizes": __ProductModel_sub_001,
    "rating": number,
    "availability": boolean,
    "photos": __ProductModel_sub_002,
    "originalPrice": string,
    "colors": __ProductModel_sub_003
}