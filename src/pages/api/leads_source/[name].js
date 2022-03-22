import { executeQuery } from "@/utils/query";
import { respond } from "@/utils/response";
import { HTTP } from "src/constants/response";

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
                  where ls.Lead_Source="${name}"
                  GROUP BY
                  ls.Lead_Source,
                  ls.Lead_Origin`;

    switch (method) {
        case "GET":
            let data = await executeQuery(query, []);
            respond(res, HTTP.StatusOk, "Sucessfully loaded", data);
            break;

        default:
            res.setHeader("Allow", ["GET"]);
            respond(res, HTTP.StatusMethodNotAllowed, `Method ${method} Not Allowed`);
    }
}
