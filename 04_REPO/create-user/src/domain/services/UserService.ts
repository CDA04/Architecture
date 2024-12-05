export class UserService {
  // Méthode pour valider un email
  static validateEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
  }

  // Méthode pour vérifier si un utilisateur est majeur
  static isAdult(age: number): boolean {
    return age >= 18;
  }

}
