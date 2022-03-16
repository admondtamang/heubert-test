import executeQuery from "@/config/executeQuery";

async function executeQueryAndCount(query) {
    let data = await executeQuery(query.data, []);
    let count = await executeQuery(query.count, []);
    return { data, count };
}

export default async function handler(req, res) {
    const { limit, pageNumber } = req.query;
    const offset = limit * (pageNumber + 1) - limit;

    console.log(offset, limit, pageNumber);
    const query = {
        data: `select * from leads ls limit ${offset},${limit}`,
        count: "select count(*) count from leads ls",
    };

    try {
        let data = await executeQuery(query.data, []);
        let count = await executeQuery(query.count, []);
        // const { data, count } = executeQueryAndCount(query);
        res.status(200).json({ data, count: count[0]?.count });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}
