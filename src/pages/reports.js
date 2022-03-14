import React, { useState } from "react";
import useSWR from "swr";
import BarChart from "../components/charts/barChart";
import MainLayout from "../layouts/MainLayout";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Reports() {
    const { data, error } = useSWR("/api/leads_source", fetcher);
    console.log(data);
    if (error) return "An error has occurred.";
    if (!data) return "Loading...";
    return (
        <MainLayout>
            <BarChart data={data} />
        </MainLayout>
    );
}
