import { IStorage } from "../interfaces/IStorage";

// Définition d'un type Product qui contient un nom et une valeur
type Product = { name: string, value: number }

export class StorageArray implements IStorage<Product> {

    // Le constructeur accepte un tableau de produits (par défaut vide)
    constructor(private storage: Product[] = [] ) { }

    /**
     * Ajoute ou met à jour la valeur d'un produit dans le stockage.
     * Si le produit existe déjà, on incrémente sa valeur.
     * Sinon, on ajoute un nouveau produit au tableau.
     * @param name - Le nom du produit à ajouter ou mettre à jour.
     * @param value - La valeur à ajouter au produit existant ou à assigner au produit.
     */
    setValue(name: string, value: number): void {
        // Recherche si un produit avec ce nom existe déjà dans le tableau
        const product = this.storage.find( p => p.name == name );

        // Si le produit existe, on augmente sa valeur
        if (product) {
            product.value += value;
        } else {
            // Sinon, on ajoute un nouveau produit avec la valeur spécifiée
            this.storage.push({name, value});
        }
    }

    /**
     * Récupère un produit par son nom.
     * Si le produit est trouvé, on le retourne.
     * Si le produit n'existe pas, une erreur est lancée.
     * @param name - Le nom du produit à récupérer.
     * @returns Le produit correspondant au nom fourni.
     * @throws Error si le produit n'est pas trouvé.
     */
    getValue(name: string): Product {
        // Recherche le produit par son nom dans le tableau
        const product = this.storage.find( p => p.name == name );

        // Si le produit existe, on le retourne
        if (product) {
            return product;
        }

        // Si le produit n'est pas trouvé, on lance une erreur
        throw new Error('no product');
    }

    /**
     * Réinitialise le stockage en vidant le tableau de produits.
     */
    reset(): void {
        // Vide le tableau de produits
        this.storage = [];
    }

    /**
     * Supprime un produit du stockage en filtrant par son nom.
     * @param name - Le nom du produit à supprimer du stockage.
     */
    restore(name: string): void {
        // Supprime tous les produits qui ont ce nom
        this.storage = this.storage.filter( product => product.name != name );
    }

    /**
     * Retourne tous les produits présents dans le stockage.
     * @returns Un tableau de tous les produits.
     */
    all(): Product[] {
        // Retourne le tableau des produits
        return this.storage;
    }
}
