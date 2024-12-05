import express, { Request, Response, NextFunction } from "express";
import main from "../../adapters/api/main";  // Exemple d'un routeur d'API

const app = express();

// Middlewares
app.use(express.json());
app.use("/", main);  // Exemple de route

// Middleware pour gérer les erreurs 404
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: "Page not found" });
});

// Optionnel : Middleware pour gérer les erreurs internes
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

export default app;
