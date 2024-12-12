import { Product } from "./entities/Product";
import { StorageArray } from "./storage/StorageArray";
import { CartService } from "./services/CartService";


try {

    const products: Product[] = [
        new Product("Apple", 10),
        new Product("Banana", 5),
    ];

    const cart = new CartService(new StorageArray())

    // acheter des produits
    cart.buy(products[0], 10)
    cart.buy(products[1], 20)
    cart.buy(products[0], 2)

    console.log(cart.total())
    cart.restoreCommand('Banana')
    console.log(cart.total())
    cart.resetCommand()
    console.log(cart.total())

} catch (error) {

}
