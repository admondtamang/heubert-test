import { DATABASE } from "./credentials";
import mysql from "serverless-mysql";

// Require and initialize outside of your main handler
export const db = mysql({
    config: {
        host: DATABASE.DB_HOST,
        database: DATABASE.DB_NAME,
        user: DATABASE.DB_USER,
        password: DATABASE.DB_PASS,
    },
});

// Main handler function
// const executeQuery = async (query) => {
//     query = "SELECT * FROM leads";
//     // Run your query
//     let results = await db.query(query);

//     // Run clean up function
//     await mysql.end();
//     console.log(query, results);
//     // Return the results
//     return results;
// };

export async function executeQuery(query_string, values = []) {
    try {
        const results = await db.query(query_string, values);
        await db.end();
        return results;
    } catch (e) {
        throw Error(e.message);
    }
}

export default executeQuery;
