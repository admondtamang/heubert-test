import executeQuery from "@/config/executeQuery";
import { executeQueryAndCount } from "@/utils/query";
import { respond } from "@/utils/response";
import { HTTP } from "src/constants/response";

export default async function handler(req, res) {
    const { limit, pageNumber } = req.query;
    const offset = limit * (pageNumber + 1) - limit;

    const query = {
        data: `select * from leads ls limit ${offset},${limit}`,
        count: "select count(*) count from leads ls",
    };

    try {
        const { data, count } = await executeQueryAndCount(query);
        console.log(data, count);
        return respond(res, HTTP.StatusOk, "", { leads: data, count: count[0]?.count });
    } catch (err) {
        return respond(res, HTTP.StatusInternalServerError, "Error getting data");
    }
}
