import React, { useRef, useState } from "react";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Modal, Button } from "antd";
import PieChart from "./pieChart";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
    labels,
    datasets: [
        {
            label: "Dataset 1",
            data: [28, 273, 32, 342, 234, 324, 324],
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
    ],
};

export default function BarChart() {
    const [open, setOpen] = useState(false);

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
                console.log(element, element[0].element.base);
                // you can also get dataset of your selected element
                console.log(data.datasets[element[0]._datasetIndex]);
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: "right",
            },
            title: {
                display: true,
                text: "Chart.js Horizontal Bar Chart",
            },
        },
        events: ["click"],
    };

    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <>
            <Bar options={options} data={data} style={{ height: 500 }} />
            <Modal title="Basic Modal" visible={open} onOk={handleCancel} onCancel={handleCancel}>
                <PieChart />
            </Modal>
        </>
    );
}
