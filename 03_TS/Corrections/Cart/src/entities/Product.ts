export class Product {

    constructor(private _name: string, private _price: number) {
        this._name = _name;
        this._price = _price;
    }

    // Getter pour _name
    get name(): string {
        return this._name;
    }

    // Getter pour _price
    get price(): number {
        return this._price;
    }

    // Setter pour _price
    set price(value: number) {
        if (value > 0) {
            this._price = value;

            return
        }

        throw new Error("Price must be greater than 0.")
    }

    set name(value: string) {
        if (value.length > 0) {
            this._name = value;
        } else {
            throw new Error("Name cannot be empty.")
        }
    }
}