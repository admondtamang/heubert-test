import MaterialUITable from "@/components/MaterialUITable";
import MaterialTable from "material-table";
import React, { useMemo, useState } from "react";
import useCustomSwr from "src/hooks/use-swr";
import Table from "../components/customTable";
import MainLayout from "../layouts/MainLayout";

export default function Leads() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [column, setColumn] = useState("");
    const [value, setValue] = useState("");
    // const { data, error } = useCustomSwr(`/api/leads?limit=${rowsPerPage}&pageNumber=${page}&searchTerms=${value}&orderBy=${column}`);

    function handleChangePage(event, newPage) {
        setPage(newPage);
    }

    function handleChangeRowsPerPage(event) {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(1);
    }

    // if (error) {
    //     return <p>Error = {error}</p>;
    // }

    const columns = [
        { title: "Lead_Number", field: "Lead_Number" },
        { title: "Lead_Origin", field: "Lead_Origin" },
        { title: "Lead_Source", field: "Lead_Source" },
        { title: "Notes", field: "Notes" },
        { title: "Lead_Stage", field: "Lead_Stage" },
        { title: "Engagement_Score", field: "Engagement_Score" },
        { title: "Last_Activity", field: "Last_Activity" },
    ];

    return (
        <MainLayout>
            {/* <form>
                <input
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    className="px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
            </form> */}
            {/* 
            <Table
                data={data}
                queryPageSize={rowsPerPage}
                page={page}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
            /> */}

            <MaterialUITable columns={columns} name="Leads Table" />
        </MainLayout>
    );
}
