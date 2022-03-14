import executeQuery from "@/config/executeQuery";

export default async function userHandler(req, res) {
    const {
        query: { name },
        method,
    } = req;

    const query = `SELECT
                  ls.Lead_Origin,
                  COUNT(ls.Lead_Source) total
                  FROM
                  leads ls
                  where ls.Lead_Source="Google"
                  GROUP BY
                  ls.Lead_Source,
                  ls.Lead_Origin`;

    switch (method) {
        case "GET":
            let data = await executeQuery(query, []);

            // Get data from your database
            res.status(200).json(data);
            break;
        case "PUT":
            // Update or create data in your database
            res.status(200).json({ id, name: name || `User ${id}` });
            break;
        default:
            res.setHeader("Allow", ["GET", "PUT"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
