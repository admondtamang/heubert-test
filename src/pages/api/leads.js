// import executeQuery from "@/config/executeQuery";
import { executeQueryAndCount } from "@/utils/query";
import { respond } from "@/utils/response";
import { HTTP } from "src/constants/response";

export default async function handler(req, res) {
    const { _limit, _page, searchTerms, _order, _sort, Lead_Source, Engagement_Score, Lead_Number } = req.query;

    const offset = _limit * _page - _limit;

    function headerQuery(query) {
        return `${query} 
        from leads ls
        ${
            searchTerms
                ? `where Notes like '%${searchTerms}%' or Lead_Source like '%${searchTerms}%' or Engagement_Score like '%${searchTerms}%' `
                : ""
        }
        ${Lead_Source ? `where Lead_Source like '%${Lead_Source}%' ` : ""}
        ${Engagement_Score ? `where Engagement_Score like '%${Engagement_Score}%' ` : ""}
        ${Lead_Number ? `where Lead_Number like '%${Lead_Number}%' ` : ""}
        ${_order ? `ORDER BY ${_sort} ${_order}` : ""}
        `;
    }

    const query = {
        data: headerQuery("select * ") + ` limit ${offset},${_limit}`,
        count: headerQuery("select count(*) count "),
    };

    try {
        const { data, count } = await executeQueryAndCount(query);

        return respond(res, HTTP.StatusOk, "", { leads: data, count: count[0]?.count, page: _page });
    } catch (err) {
        console.log(err);
        return respond(res, HTTP.StatusInternalServerError, "Error getting data");
    }
}
