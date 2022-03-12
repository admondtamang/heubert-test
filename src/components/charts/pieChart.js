import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
    const data = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                display: true,
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],

                borderWidth: 1,
            },
        ],
    };

    const options = {
        tooltipTemplate: "<%= value %>",

        showTooltips: true,

        onAnimationComplete: function () {
            this.showTooltip(this.datasets[0].points, true);
        },
        tooltipEvents: [],
    };
    return <Pie data={data} options={options} />;
}
