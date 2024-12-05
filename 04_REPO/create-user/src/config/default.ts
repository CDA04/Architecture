import { Config } from "../types/Config";

import * as dotenv from 'dotenv';
dotenv.config();  // Charge les variables du fichier .env

// Vous pouvez maintenant accéder aux variables d'environnement
const DATABASE_URL = process.env.DATABASE_URL || '';
const SERVER_PORT =  process.env.SERVER_PORT  || '3000'; 

export const config: Config = {
    database: {
      url: DATABASE_URL
    },
    server: {
      port: SERVER_PORT
    }
  };