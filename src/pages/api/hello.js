// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import executeQuery from "../../config/executeQuery";
import query from "../../config/query";

export default async function handler(req, res) {
    await query();
    await res.status(200).json({ name: "John Doe" });
}
