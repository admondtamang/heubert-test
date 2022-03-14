import React, { useRef, useState } from "react";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar, getElementAtEvent } from "react-chartjs-2";
import { Modal } from "antd";
import PieChart from "./pieChart";
import { structureChartData } from "src/utils/restructure-charts-data";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart({ data }) {
    const chartRef = useRef();
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    if (!data) {
        return "NO data";
    }

    const { labels, values } = structureChartData(data, "Lead_Source", "total");

    // chart Data
    const chart_data = {
        labels,
        datasets: [
            {
                label: "Leads",
                data: values,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };

    // chart options
    const options = {
        indexAxis: "y",
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        showTooltips: true,
        plugins: {
            legend: {
                position: "right",
            },
            title: {
                display: true,
                text: "Chart.js Horizontal Bar Chart",
            },
        },
    };

    const onClick = (event) => {
        const current_data = getElementAtEvent(chartRef.current, event)?.[0];
        setName(data[current_data?.index]?.Lead_Source);
        if (data[current_data?.index]?.Lead_Source) setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <>
            <Bar ref={chartRef} onClick={onClick} options={options} data={chart_data} style={{ height: 500 }} />

            <Modal title={`Leads Origin From ${name}`} visible={open} onOk={handleCancel} onCancel={handleCancel}>
                <PieChart name={name} />
            </Modal>
        </>
    );
}
