import React, { useState } from "react";
import useCustomSwr from "src/hooks/use-swr";
import BarChart from "../components/charts/barChart";
import MainLayout from "../layouts/MainLayout";
export default function Reports() {
    const { data, error } = useCustomSwr("/api/leads_source");
    if (error) return "An error has occurred.";
    if (!data) return "Loading...";
    return (
        <MainLayout>
            <BarChart data={data} />
        </MainLayout>
    );
}
