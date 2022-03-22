import { DATABASE } from "./credentials";
import mysql from "serverless-mysql";

export const db = mysql({
    config: {
        host: DATABASE.DB_HOST,
        database: DATABASE.DB_NAME,
        user: DATABASE.DB_USER,
        port: 8080,
        password: DATABASE.DB_PASS,
    },
});
