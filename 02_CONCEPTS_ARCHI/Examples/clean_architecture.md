# Exemple de code clean Architecture 

### **Structure du projet :**

```
src/
├── core/
│   ├── entities/
│   │   └── User.ts
│   ├── usecases/
│   │   ├── CreateUserUseCase.ts
│   │   └── GetUserUseCase.ts
│   ├── interfaces/
│   │   └── UserRepository.ts
│   └── services/
│       └── AuthService.ts
├── adapters/
│   ├── database/
│   │   └── UserRepositoryImpl.ts
│   └── controllers/
│       └── UserController.ts
├── infrastructure/
│   ├── database/
│   │   └── dbConnection.ts
│   └── frameworks/
│       └── ExpressApp.ts
├── config/
│   ├── default.ts
│   └── development.ts
└── app.ts
```

---

### **Code :**

#### **1. Entité : `User.ts`**
```typescript
export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string
  ) {}

  validateEmail(): boolean {
    return /\S+@\S+\.\S+/.test(this.email);
  }
}
```

#### **2. Interface : `UserRepository.ts`**
```typescript
import { User } from "../entities/User";

export interface UserRepository {
  save(user: User): Promise<void>;
  findById(id: string): Promise<User | null>;
}
```

#### **3. Cas d’utilisation : `CreateUserUseCase.ts`**
```typescript
import { User } from "../entities/User";
import { UserRepository } from "../interfaces/UserRepository";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(name: string, email: string): Promise<User> {
    const user = new User(Date.now().toString(), name, email);
    if (!user.validateEmail()) {
      throw new Error("Invalid email");
    }
    await this.userRepository.save(user);
    return user;
  }
}
```

#### **4. Implémentation Repository : `UserRepositoryImpl.ts`**
```typescript
import { User } from "../../core/entities/User";
import { UserRepository } from "../../core/interfaces/UserRepository";

export class UserRepositoryImpl implements UserRepository {
  private users: User[] = []; // Simule une base de données en mémoire

  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
  }
}
```

#### **5. Contrôleur : `UserController.ts`**
```typescript
import { Request, Response } from "express";
import { CreateUserUseCase } from "../../core/usecases/CreateUserUseCase";
import { UserRepositoryImpl } from "../database/UserRepositoryImpl";

const userRepository = new UserRepositoryImpl();
const createUserUseCase = new CreateUserUseCase(userRepository);

export const UserController = {
  async createUser(req: Request, res: Response) {
    const { name, email } = req.body;
    try {
      const user = await createUserUseCase.execute(name, email);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
```

#### **6. Serveur Express : `ExpressApp.ts`**
```typescript
import express from "express";
import { UserController } from "../adapters/controllers/UserController";

const app = express();
app.use(express.json());

app.post("/users", UserController.createUser);

export default app;
```

#### **7. Fichier principal : `app.ts`**
```typescript
import app from "./infrastructure/frameworks/ExpressApp";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

---

### **Fonctionnement :**
1. Les entités (`User`) définissent la structure des données et contiennent des règles métier.
2. Les cas d'utilisation (`CreateUserUseCase`) orchestrent la logique métier en manipulant les entités et les dépôts.
3. Les adaptateurs (comme `UserRepositoryImpl` et `UserController`) permettent au cœur de l'application d'interagir avec des systèmes externes (comme une base de données ou une API).
4. Le serveur Express est configuré pour exposer une API minimaliste.

### **Exemple d’appel API :**
- **Méthode :** `POST`
- **Endpoint :** `http://localhost:3000/users`
- **Body :** 
```json
{
  "name": "Jane Doe",
  "email": "jane.doe@example.com"
}
```
