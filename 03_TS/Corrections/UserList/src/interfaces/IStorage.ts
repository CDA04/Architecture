export interface IStorage<T>{
    /**
     * 
     * @param name of product
     * @param value price
     */
    setValue(name: string, value : number) : void ;

    /**
     * 
     * @param name of product
     */
    getValue(name: string): T;

    /**
     * reset all products
     */
    reset():void;

    /**
     * restore product by name
     * @param name of product
     */
    restore(name : string): void;

    all() : T[];
}