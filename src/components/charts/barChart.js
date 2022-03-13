import React, { useRef, useState } from "react";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Modal, Button } from "antd";
import PieChart from "./pieChart";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const myChart = new ChartJS(ctx);

export default function BarChart({ data }) {
    const [open, setOpen] = useState(false);

    if (!data) {
        return "NO data";
    }

    let labels = [],
        values = [];

    // data push to labels and values
    data.map((row) => {
        labels.push(row.Lead_Source);
        values.push(row.total);
    });

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
        onClick: function (evt, element) {
            if (element.length > 0) {
                setOpen(true);
                console.log(element, element[0].element.$context.raw);
                // console.log(element.datasets[activeElement[0]._datasetIndex].data[activeElement[0]._index]);
            }

            const points = myChart.getElementsAtEventForMode(evt, "nearest", { intersect: true }, true);

            if (points.length) {
                const firstPoint = points[0];
                const label = myChart.data.labels[firstPoint.index];
                const value = myChart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
            }
        },
        responsive: true,
        // tooltips: {
        //     mode: "label",
        // },
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
        // events: ["click"],
    };

    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <>
            <Bar options={options} data={chart_data} style={{ height: 500 }} />

            <Modal title="Basic Modal" visible={open} onOk={handleCancel} onCancel={handleCancel}>
                <PieChart />
            </Modal>
        </>
    );
}
