export interface SearchObj {
    searchField: string;
    searchValue: number | string | boolean;
}
export declare function getFieldReferences(fieldName: string, value: {} | number | string | boolean): SearchObj[];
export declare function objectFlatten(tree: {}): SearchObj[];
