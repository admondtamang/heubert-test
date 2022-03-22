const { db } = require("@/config/db");

async function executeQueryAndCount(query) {
    let data = await executeQuery(query.data, []);
    let count = await executeQuery(query.count, []);
    return { data, count };
}

async function executeQuery(query_string, values = []) {
    try {
        const results = await db.query(query_string, values);
        await db.end();
        return results;
    } catch (e) {
        throw new Error(e.message);
    }
}
module.exports = { executeQueryAndCount, executeQuery };
