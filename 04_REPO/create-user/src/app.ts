import server from "./infrastructure/frameworks/ExpressApp";
import { connectToDatabase } from "./infrastructure/database/dbConnection";
import { config } from "./config/default";

const { server: { port: PORT } } = config;

(async () => {
  try {
    // Attendre que la connexion à la base de données soit établie
    await connectToDatabase();
    console.log("Database connection established.");

    // Démarrer le serveur HTTP
    server.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
})();
