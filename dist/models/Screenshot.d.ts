/// <reference types="node" />
import { ScreenshotClip } from "puppeteer";
import { ImageType, Encoding, Content, ScreenshotParams } from "../types";
export declare class Screenshot {
    output: string;
    content: Content;
    selector: string;
    html: string;
    quality?: number;
    buffer?: Buffer | string;
    type?: ImageType;
    encoding?: Encoding;
    transparent?: boolean;
    clip?: ScreenshotClip;
    constructor(params: ScreenshotParams);
    setHTML(html: string): void;
    setBuffer(buffer: Buffer | string): void;
}
