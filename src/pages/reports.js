import React, { useState } from "react";
import BarChart from "../components/charts/barChart";
import PieChart from "../components/charts/pieChart";
import MainLayout from "../layouts/MainLayout";

export default function Reports() {
    return (
        <MainLayout>
            <BarChart />
            {/* <Modal open={open} close={closeFunction}> */}
            <PieChart />
            {/* </Modal> */}
        </MainLayout>
    );
}
