import { RAFirebaseOptions } from "providers/RAFirebaseOptions";
export declare class SimpleLogger {
    private title;
    isEnabled(): boolean;
    get log(): (...any: any[]) => void;
    get warn(): (...any: any[]) => void;
    get error(): (...any: any[]) => void;
}
export declare function CheckLogging(config: {}, options: RAFirebaseOptions): void;
export declare const log: (...any: any[]) => void;
export declare const logWarn: (...any: any[]) => void;
export declare const logError: (...any: any[]) => void;
