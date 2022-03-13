const { createPool } = require("mysql");
const { DATABASE } = require("./credentials");
const pool = createPool({
    host: DATABASE.DB_HOST,
    user: DATABASE.DB_USER,
    password: DATABASE.DB_PASS,
    port: 1433,
    database: DATABASE.DB_NAME,
});

pool.getConnection((err) => {
    if (err) {
        console.log("Error conntecting to db...");
    }
    console.log("Connected to db...");
});

const executeQuery = (query, arraParms) => {
    return new Promise((resolve, reject) => {
        try {
            pool.query(query, arraParms, (err, data) => {
                if (err) {
                    console.log("error in executing the query");
                    reject(err);
                }
                resolve(data);
            });
        } catch (err) {
            reject(err);
        }
    });
};

module.exports = { executeQuery };
