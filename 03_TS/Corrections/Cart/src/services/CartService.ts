import { Product } from "../entities/Product";
import { IStorage } from "../interfaces/IStorage";
import { ProducCommand } from "../types/ProductCommand";

export class CartService {

    constructor(private storage: IStorage<ProducCommand>) {

    }

    /**
     * Cette méthode permet d'acheter un produit en spécifiant une quantité.
     * Si la quantité est inférieure ou égale à 0, une erreur est lancée.
     * La valeur totale pour le produit est ensuite enregistrée dans le stockage.
     * @param product - Le produit à acheter.
     * @param quantity - La quantité à acheter.
     * @throws Error si la quantité est invalide (inférieure ou égale à zéro).
     */
    buy(product: Product, quantity: number) {

        // Vérification de la quantité, on s'assure qu'elle est positive
        const q = Math.abs(Math.floor(quantity));

        // Si la quantité est inférieure ou égale à 0, une erreur est lancée
        if (q <= 0) throw new Error("bad quantity command");

        // Enregistrement de la valeur totale du produit dans le stockage
        this.storage.setValue(product.name, q * product.price);
    }

    /**
     * Cette méthode calcule le prix total TTC de tous les produits dans le panier.
     * @returns Le prix total TTC.
     */
    total(): number {
        let total: number = 0;
        
        // Récupération de tous les produits commandés dans le stockage
        const productsCommand = this.storage.all();

        // Parcours des produits commandés et ajout de leur valeur au total
        for (const p of productsCommand) {
            total += p.value;
        }

        return total;
    }

    /**
     * Cette méthode réinitialise la commande, supprimant tous les produits du panier.
     */
    resetCommand() {
        this.storage.reset();
    }

    /**
     * Cette méthode permet de supprimer un produit du panier en fonction de son nom.
     * @param name - Le nom du produit à supprimer.
     */
    restoreCommand(name: string) {
        this.storage.restore(name);
    }

}
