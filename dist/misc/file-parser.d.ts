interface ParsedUpload {
    fieldDotsPath: string;
    fieldSlashesPath: string;
    rawFile: File | any;
}
export declare function parseDocGetAllUploads(obj: {}): ParsedUpload[];
export declare function recusivelyParseObjectValue(input: any, fieldPath: string, uploads: ParsedUpload[]): any;
export {};
