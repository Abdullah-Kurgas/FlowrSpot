export class Utils {
    
    static getDataFromInsideObj(item: any, key: string) {
        return item['flower'] ? item?.flower[key] : item[key];
    }
}