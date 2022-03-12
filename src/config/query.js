var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "db_leads",
});

export default async function query() {
    await connection.connect();

    await connection.query("SELECT * from leads", function (error, results, fields) {
        if (error) throw error;
        console.log("The solution is: ", results);
    });

    await connection.end();
}
