import executeQuery from "@/config/executeQuery";

export default async function handler(req, res) {
    const query = "select ls.Lead_Source,count(ls.Lead_Source) total from leads ls group by ls.Lead_Source";
    try {
        let data = await executeQuery(query, []);
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}
