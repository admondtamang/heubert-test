import React, { useMemo, useState } from "react";
import useCustomSwr from "src/hooks/use-swr";
import Table from "../components/customTable";
import MainLayout from "../layouts/MainLayout";

export default function Leads() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const { data, error } = useCustomSwr(`/api/leads?limit=${rowsPerPage}&pageNumber=${page}`);

    function handleChangePage(event, newPage) {
        setPage(newPage);
    }

    function handleChangeRowsPerPage(event) {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(1);
    }

    if (error) {
        return <p>Error = {error}</p>;
    }

    return (
        <MainLayout>
            <Table
                data={data}
                queryPageSize={rowsPerPage}
                page={page}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </MainLayout>
    );
}
