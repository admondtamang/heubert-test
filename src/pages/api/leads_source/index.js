import { executeQuery } from "@/utils/query";
import { respond } from "@/utils/response";
import { HTTP } from "src/constants/response";

export default async function handler(req, res) {
    const query = "select ls.Lead_Source,count(ls.Lead_Source) total from leads ls group by ls.Lead_Source";
    try {
        let data = await executeQuery(query, []);
        respond(res, HTTP.StatusOk, "", data);
    } catch (err) {
        respond(res, HTTP.StatusInternalServerError, "Error while getting data");
    }
}
