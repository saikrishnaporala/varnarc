// Basic Column Chart
import getChartColorsArray from "@/common/getChartColorsArray";

const basicColumnChart = {
    series: [{
        name: "Net Profit",
        data: [46, 57, 59, 54, 62, 58, 64, 60, 66],
    },
    {
        name: "Revenue",
        data: [74, 83, 102, 97, 86, 106, 93, 114, 94],
    },
    {
        name: "Free Cash Flow",
        data: [37, 42, 38, 26, 47, 50, 54, 55, 43],
    },
    ],
    chartOptions: {
        chart: {
            height: 350,
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "45%",
                endingShape: "rounded",
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
        },
        colors: getChartColorsArray('["--vz-danger", "--vz-primary", "--vz-success"]'),
        xaxis: {
            categories: [
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
            ],
        },
        yaxis: {
            title: {
                text: "$ (thousands)",
            },
        },
        grid: {
            borderColor: "#f1f1f1",
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands";
                },
            },
        },
    },
};

// Column with Datalabels

const columnDatalabelChart = {
    series: [{
        name: "Inflation",
        data: [2.5, 3.2, 5.0, 10.1, 4.2, 3.8, 3, 2.4, 4.0, 1.2, 3.5, 0.8],
    },],
    chartOptions: {
        chart: {
            height: 350,
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    position: "top", // top, center, bottom
                },
            },
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + "%";
            },
            offsetY: -20,
            style: {
                fontSize: "12px",
                colors: ["#adb5bd"],
            },
        },
        colors: getChartColorsArray('["--vz-success"]'),
        grid: {
            borderColor: "#f1f1f1",
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            position: "top",
            labels: {
                offsetY: -18,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                fill: {
                    type: "gradient",
                    gradient: {
                        colorFrom: "#D8E3F0",
                        colorTo: "#BED1E6",
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    },
                },
            },
            tooltip: {
                enabled: true,
                offsetY: -35,
            },
        },
        fill: {
            gradient: {
                shade: "light",
                type: "horizontal",
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [50, 0, 100, 100],
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                formatter: function (val) {
                    return val + "%";
                },
            },
        },
        title: {
            text: "Monthly Inflation in Argentina, 2002",
            floating: true,
            offsetY: 320,
            align: "center",
            style: {
                color: "#444",
                fontWeight: 500,
            },
        },
    },
};

// Stacked Columns Charts

const stackedColumnsChart = {
    series: [{
        name: "PRODUCT A",
        data: [44, 55, 41, 67, 22, 43],
    },
    {
        name: "PRODUCT B",
        data: [13, 23, 20, 8, 13, 27],
    },
    {
        name: "PRODUCT C",
        data: [11, 17, 15, 15, 21, 14],
    },
    {
        name: "PRODUCT D",
        data: [21, 7, 25, 13, 22, 8],
    },
    ],
    chartOptions: {
        chart: {
            type: "bar",
            height: 350,
            stacked: true,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: true,
            },
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: "bottom",
                    offsetX: -10,
                    offsetY: 0,
                },
            },
        },],
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 10,
            },
        },
        xaxis: {
            type: "datetime",
            categories: [
                "01/01/2011 GMT",
                "01/02/2011 GMT",
                "01/03/2011 GMT",
                "01/04/2011 GMT",
                "01/05/2011 GMT",
                "01/06/2011 GMT",
            ],
        },
        legend: {
            position: "right",
            offsetY: 40,
        },
        fill: {
            opacity: 1,
        },
        colors: getChartColorsArray('["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger"]'),
    },
};

// 100% Stacked Column Chart

const columnStackedChart = {
    series: [{
        name: "PRODUCT A",
        data: [44, 55, 41, 67, 22, 43, 21, 49],
    },
    {
        name: "PRODUCT B",
        data: [13, 23, 20, 8, 13, 27, 33, 12],
    },
    {
        name: "PRODUCT C",
        data: [11, 17, 15, 15, 21, 14, 15, 13],
    },
    ],
    chartOptions: {
        chart: {
            type: "bar",
            height: 350,
            stacked: true,
            stackType: "100%",
            toolbar: {
                show: false,
            },
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: "bottom",
                    offsetX: -10,
                    offsetY: 0,
                },
            },
        },],
        xaxis: {
            categories: [
                "2011 Q1",
                "2011 Q2",
                "2011 Q3",
                "2011 Q4",
                "2012 Q1",
                "2012 Q2",
                "2012 Q3",
                "2012 Q4",
            ],
        },
        fill: {
            opacity: 1,
        },
        legend: {
            position: "right",
            offsetX: 0,
            offsetY: 50,
        },
        colors: getChartColorsArray('["--vz-primary", "--vz-success", "--vz-warning"]'),
    },
};

// column with Markers

const columnMarkersChart = {
    series: [{
        name: "Actual",
        data: [{
            x: "2011",
            y: 1292,
            goals: [{
                name: "Expected",
                value: 1400,
                strokeWidth: 5,
                strokeColor: "#775DD0",
            },],
        },
        {
            x: "2012",
            y: 4432,
            goals: [{
                name: "Expected",
                value: 5400,
                strokeWidth: 5,
                strokeColor: "#775DD0",
            },],
        },
        {
            x: "2013",
            y: 5423,
            goals: [{
                name: "Expected",
                value: 5200,
                strokeWidth: 5,
                strokeColor: "#775DD0",
            },],
        },
        {
            x: "2014",
            y: 6653,
            goals: [{
                name: "Expected",
                value: 6500,
                strokeWidth: 5,
                strokeColor: "#775DD0",
            },],
        },
        {
            x: "2015",
            y: 8133,
            goals: [{
                name: "Expected",
                value: 6600,
                strokeWidth: 5,
                strokeColor: "#775DD0",
            },],
        },
        {
            x: "2016",
            y: 7132,
            goals: [{
                name: "Expected",
                value: 7500,
                strokeWidth: 5,
                strokeColor: "#775DD0",
            },],
        },
        {
            x: "2017",
            y: 7332,
            goals: [{
                name: "Expected",
                value: 8700,
                strokeWidth: 5,
                strokeColor: "#775DD0",
            },],
        },
        {
            x: "2018",
            y: 6553,
            goals: [{
                name: "Expected",
                value: 7300,
                strokeWidth: 5,
                strokeColor: "#775DD0",
            },],
        },
        ],
    },],
    chartOptions: {
        chart: {
            height: 350,
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                columnWidth: "30%",
            },
        },
        colors: getChartColorsArray('["--vz-success", "--vz-primary"]'),
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
            showForSingleSeries: true,
            customLegendItems: ["Actual", "Expected"],
            markers: {
                fillColors: ["#63ad6f", "#564ab1"],
            },
        },
    },
};

//  Column with Rotated Labels

const columnRotatedLabel = {
    series: [{
        name: "Servings",
        data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35],
    },],
    chartOptions: {
        colors: getChartColorsArray('["--vz-info"]'),
        annotations: {
            points: [{
                x: "Bananas",
                seriesIndex: 0,
                label: {
                    borderColor: "#775DD0",
                    offsetY: 0,
                    style: {
                        color: "#fff",
                        background: "#775DD0",
                    },
                    text: "Bananas are good",
                },
            },],
        },
        chart: {
            height: 350,
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                columnWidth: "50%",
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 2,
        },
        xaxis: {
            labels: {
                rotate: -45,
            },
            categories: [
                "Apples",
                "Oranges",
                "Strawberries",
                "Pineapples",
                "Mangoes",
                "Bananas",
                "Blackberries",
                "Pears",
                "Watermelons",
                "Cherries",
                "Pomegranates",
                "Tangerines",
                "Papayas",
            ],
            tickPlacement: "on",
        },
        yaxis: {
            title: {
                text: "Servings",
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "light",
                type: "horizontal",
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 0.85,
                opacityTo: 0.85,
                stops: [50, 0, 100],
            },
        },
    },
};

// Column with Negative Values

const columnNegativeChart = {
    series: [{
        name: "Cash Flow",
        data: [
            1.45,
            5.42,
            5.9,
            -0.42,
            -12.6,
            -18.1,
            -18.2,
            -14.16,
            -11.1,
            -6.09,
            0.34,
            3.88,
            13.07,
            5.8,
            2,
            7.37,
            8.1,
            13.57,
            15.75,
            17.1,
            19.8,
            -27.03,
            -54.4,
            -47.2,
            -43.3,
            -18.6,
            -48.6,
            -41.1,
            -39.6,
            -37.6,
            -29.4,
            -21.4,
            -2.4,
        ],
    },],
    chartOptions: {
        colors: getChartColorsArray('["--vz-success", "--vz-primary", "--vz-warning"]'),
        chart: {
            type: "bar",
            height: 350,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                colors: {
                    ranges: [{
                        from: -100,
                        to: -46,
                        color: "#f56e6e",
                    },
                    {
                        from: -45,
                        to: 0,
                        color: "#f7cc53",
                    },
                    ],
                },
                columnWidth: "80%",
            },
        },
        dataLabels: {
            enabled: false,
        },
        yaxis: {
            title: {
                text: "Growth",
            },
            labels: {
                formatter: function (y) {
                    return y.toFixed(0) + "%";
                },
            },
        },
        xaxis: {
            type: "datetime",
            categories: [
                "2011-01-01",
                "2011-02-01",
                "2011-03-01",
                "2011-04-01",
                "2011-05-01",
                "2011-06-01",
                "2011-07-01",
                "2011-08-01",
                "2011-09-01",
                "2011-10-01",
                "2011-11-01",
                "2011-12-01",
                "2012-01-01",
                "2012-02-01",
                "2012-03-01",
                "2012-04-01",
                "2012-05-01",
                "2012-06-01",
                "2012-07-01",
                "2012-08-01",
                "2012-09-01",
                "2012-10-01",
                "2012-11-01",
                "2012-12-01",
                "2013-01-01",
                "2013-02-01",
                "2013-03-01",
                "2013-04-01",
                "2013-05-01",
                "2013-06-01",
                "2013-07-01",
                "2013-08-01",
                "2013-09-01",
            ],
            labels: {
                rotate: -90,
            },
        },
    },
};

// Range Column Chart

const rangeColumnChart = {
    series: [{
        data: [{
            x: "Team A",
            y: [1, 5],
        },
        {
            x: "Team B",
            y: [4, 6],
        },
        {
            x: "Team C",
            y: [5, 8],
        },
        {
            x: "Team D",
            y: [3, 11],
        },
        ],
    },
    {
        data: [{
            x: "Team A",
            y: [2, 6],
        },
        {
            x: "Team B",
            y: [1, 3],
        },
        {
            x: "Team C",
            y: [7, 8],
        },
        {
            x: "Team D",
            y: [5, 9],
        },
        ],
    },
    ],
    chartOptions: {
        chart: {
            type: "rangeBar",
            height: 335,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
            },
        },
        dataLabels: {
            enabled: true,
        },
        legend: {
            show: false,
        },
        colors: getChartColorsArray('["--vz-primary", "--vz-success"]   '),
    },
};

// dynamic series data
function makeData() {
    var dataSet = shuffleArray(arrayData);

    var dataYearSeries = [{
        x: "2011",
        y: dataSet[0].y,
        color: colors[0],
        quarters: dataSet[0].quarters,
    },
    {
        x: "2012",
        y: dataSet[1].y,
        color: colors[1],
        quarters: dataSet[1].quarters,
    },
    {
        x: "2013",
        y: dataSet[2].y,
        color: colors[2],
        quarters: dataSet[2].quarters,
    },
    {
        x: "2014",
        y: dataSet[3].y,
        color: colors[3],
        quarters: dataSet[3].quarters,
    },
    {
        x: "2015",
        y: dataSet[4].y,
        color: colors[4],
        quarters: dataSet[4].quarters,
    },
    {
        x: "2016",
        y: dataSet[5].y,
        color: colors[5],
        quarters: dataSet[5].quarters,
    },
    ];

    return dataYearSeries;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function updateQuarterChart(sourceChart, destChartIDToUpdate) {
    var series = [];
    var seriesIndex = 0;
    var colors = [];

    if (sourceChart.w.globals.selectedDataPoints[0]) {
        var selectedPoints = sourceChart.w.globals.selectedDataPoints;
        for (var i = 0; i < selectedPoints[seriesIndex].length; i++) {
            var selectedIndex = selectedPoints[seriesIndex][i];
            var yearSeries = sourceChart.w.config.series[seriesIndex];
            series.push({
                name: yearSeries.data[selectedIndex].x,
                data: yearSeries.data[selectedIndex].quarters,
            });
            colors.push(yearSeries.data[selectedIndex].color);
        }

        if (series.length === 0)
            series = [{
                data: [],
            },];

        return window.ApexCharts.exec(destChartIDToUpdate, "updateOptions", {
            series: series,
            colors: colors,
            fill: {
                colors: colors,
            },
        });
    }
}

const colors = getChartColorsArray('["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-body-color", "--vz-info"]');

export const arrayData = [{
    y: 400,
    quarters: [{
        x: "Q1",
        y: 120,
    },
    {
        x: "Q2",
        y: 90,
    },
    {
        x: "Q3",
        y: 100,
    },
    {
        x: "Q4",
        y: 90,
    },
    ],
},
{
    y: 430,
    quarters: [{
        x: "Q1",
        y: 120,
    },
    {
        x: "Q2",
        y: 110,
    },
    {
        x: "Q3",
        y: 90,
    },
    {
        x: "Q4",
        y: 110,
    },
    ],
},
{
    y: 448,
    quarters: [{
        x: "Q1",
        y: 70,
    },
    {
        x: "Q2",
        y: 100,
    },
    {
        x: "Q3",
        y: 140,
    },
    {
        x: "Q4",
        y: 138,
    },
    ],
},
{
    y: 470,
    quarters: [{
        x: "Q1",
        y: 150,
    },
    {
        x: "Q2",
        y: 60,
    },
    {
        x: "Q3",
        y: 190,
    },
    {
        x: "Q4",
        y: 70,
    },
    ],
},
{
    y: 540,
    quarters: [{
        x: "Q1",
        y: 120,
    },
    {
        x: "Q2",
        y: 120,
    },
    {
        x: "Q3",
        y: 130,
    },
    {
        x: "Q4",
        y: 170,
    },
    ],
},
{
    y: 580,
    quarters: [{
        x: "Q1",
        y: 170,
    },
    {
        x: "Q2",
        y: 130,
    },
    {
        x: "Q3",
        y: 120,
    },
    {
        x: "Q4",
        y: 160,
    },
    ],
},
];

const chartYearOption = {
    series: [{
        name: "year",
        data: makeData(),
    },],
    chartOptions: {
        chart: {
            id: "barYear",
            height: 400,
            width: "100%",
            type: "bar",
            events: {
                dataPointSelection: (e, chart, opts) => {
                    var quarterChartEl = document.querySelector("#chart-quarter");
                    var yearChartEl = document.querySelector("#chart-year");

                    if (opts.selectedDataPoints[0].length === 1) {
                        if (quarterChartEl.classList.contains("active")) {
                            updateQuarterChart(chart, "barQuarter");
                        } else {
                            yearChartEl.classList.add("chart-quarter-activated");
                            quarterChartEl.classList.add("active");
                            updateQuarterChart(chart, "barQuarter");
                        }
                    } else {
                        updateQuarterChart(chart, "barQuarter");
                    }

                    if (opts.selectedDataPoints[0].length === 0) {
                        yearChartEl.classList.remove("chart-quarter-activated");
                        quarterChartEl.classList.remove("active");
                    }
                },
                updated: (chart) => {
                    updateQuarterChart(chart, "barQuarter");
                },
            },
        },
        plotOptions: {
            bar: {
                distributed: true,
                horizontal: true,
                barHeight: "75%",
                dataLabels: {
                    position: "bottom",
                },
            },
        },
        dataLabels: {
            enabled: true,
            textAnchor: "start",
            style: {
                colors: ["#fff"],
            },
            formatter: function (val, opt) {
                return opt.w.globals.labels[opt.dataPointIndex];
            },
            offsetX: 0,
            dropShadow: {
                enabled: true,
            },
        },
        colors: colors,
        states: {
            normal: {
                filter: {
                    type: "desaturate",
                },
            },
            active: {
                allowMultipleDataPointsSelection: true,
                filter: {
                    type: "darken",
                    value: 1,
                },
            },
        },
        tooltip: {
            x: {
                show: false,
            },
        },
        title: {
            text: "Yearly Results",
            offsetX: 15,
        },
        subtitle: {
            text: "(Click on bar to see details)",
            offsetX: 15,
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        legend: {
            show: false
        }
    },
};

const quarterChartOption = {
    series: [{
        data: [],
    },],
    chartOptions: {
        chart: {
            id: "barQuarter",
            height: 330,
            width: "100%",
            type: "bar",
            stacked: true,
        },
        plotOptions: {
            bar: {
                columnWidth: "50%",
                horizontal: false,
            },
        },
        legend: {
            show: false,
        },
        grid: {
            yaxis: {
                lines: {
                    show: false,
                },
            },
            xaxis: {
                lines: {
                    show: true,
                },
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        title: {
            text: "Quarterly Results",
            offsetX: 10,
            style: {
                fontWeight: 600,
            },
        },
        tooltip: {
            x: {
                formatter: function (val, opts) {
                    return opts.w.globals.seriesNames[opts.seriesIndex];
                },
            },
            y: {
                title: {
                    formatter: function (val, opts) {
                        return opts.w.globals.labels[opts.dataPointIndex];
                    },
                },
            },
        },
    },
};

// Distributed Columns Charts

const distributedColumnchart = {
    series: [{
        data: [21, 22, 10, 28, 16, 21, 13, 30],
    },],
    chartOptions: {
        chart: {
            height: 350,
            type: "bar",
            events: {
                click: function () {
                    // console.log(chart, w, e)
                },
            },
        },
        colors: colors,
        plotOptions: {
            bar: {
                columnWidth: "45%",
                distributed: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        xaxis: {
            categories: [
                ["John", "Doe"],
                ["Joe", "Smith"],
                ["Jake", "Williams"],
                "Amber",
                ["Peter", "Brown"],
                ["Mary", "Evans"],
                ["David", "Wilson"],
                ["Lily", "Roberts"],
            ],
            labels: {
                style: {
                    colors: colors,
                    fontSize: "12px",
                },
            },
        },
    },
};

const dynamicQuarterLoadedChart = {
    series: [{
        name: "quarter",
        data: [],
    },],
    chartOptions: {
        chart: {
            id: "barQuarter",
            height: 400,
            width: "100%",
            type: "bar",
            stacked: true,
        },
        plotOptions: {
            bar: {
                columnWidth: "50%",
                horizontal: false,
            },
        },
        legend: {
            show: false,
        },
        grid: {
            yaxis: {
                lines: {
                    show: false,
                },
            },
            xaxis: {
                lines: {
                    show: true,
                },
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        title: {
            text: "Quarterly Results",
            offsetX: 10,
        },
        tooltip: {
            x: {
                formatter: function (val, opts) {
                    return opts.w.globals.seriesNames[opts.seriesIndex];
                },
            },
        },
    },
};

// Grouped Stacked Columns
const groupedStackedChart = {
    series: [
        {
            name: 'Q1 Budget',
            group: 'budget',
            data: [44000, 55000, 41000, 67000, 22000, 43000]
        },
        {
            name: 'Q1 Actual',
            group: 'actual',
            data: [48000, 50000, 40000, 65000, 25000, 40000]
        },
        {
            name: 'Q2 Budget',
            group: 'budget',
            data: [13000, 36000, 20000, 8000, 13000, 27000]
        },
        {
            name: 'Q2 Actual',
            group: 'actual',
            data: [20000, 40000, 25000, 10000, 12000, 28000]
        }
    ],
    chartOptions: {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        dataLabels: {
            formatter: (val) => {
                return val / 1000 + 'K';
            }
        },
        plotOptions: {
            bar: {
                horizontal: false
            }
        },
        xaxis: {
            categories: [
                'Online advertising',
                'Sales Training',
                'Print advertising',
                'Catalogs',
                'Meetings',
                'Public relations'
            ]
        },
        fill: {
            opacity: 1
        },
        colors: getChartColorsArray('["--vz-success", "--vz-primary","--vz-secondary", "--vz-danger"]'),
        yaxis: {
            labels: {
                formatter: (val) => {
                    return val / 1000 + 'K';
                }
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left'
        }
    },
};

// Dumbbell Chart
const dumbbellChart = {
    series: [
        {
            data: [
                {
                    x: '2008',
                    y: [2800, 4500]
                },
                {
                    x: '2009',
                    y: [3200, 4100]
                },
                {
                    x: '2010',
                    y: [2950, 7800]
                },
                {
                    x: '2011',
                    y: [3000, 4600]
                },
                {
                    x: '2012',
                    y: [3500, 4100]
                },
                {
                    x: '2013',
                    y: [4500, 6500]
                },
                {
                    x: '2014',
                    y: [4100, 5600]
                }
            ]
        }
    ],
    chartOptions: {
        chart: {
            height: 350,
            type: 'rangeBar',
            zoom: {
                enabled: false
            }
        },
        plotOptions: {
            bar: {
                isDumbbell: true,
                columnWidth: 3,
                dumbbellColors: getChartColorsArray('["--vz-success", "--vz-primary"]'),
            }
        },
        legend: {
            show: true,
            showForSingleSeries: true,
            position: 'top',
            horizontalAlign: 'left',
            customLegendItems: ['Product A', 'Product B']
        },
        fill: {
            type: 'gradient',
            gradient: {
                type: 'vertical',
                gradientToColors: ['#00E396'],
                inverseColors: true,
                stops: [0, 100]
            }
        },
        grid: {
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        xaxis: {
            tickPlacement: 'on'
        }
    }
};

export {
    basicColumnChart,
    columnDatalabelChart,
    stackedColumnsChart,
    columnStackedChart,
    columnMarkersChart,
    columnRotatedLabel,
    columnNegativeChart,
    rangeColumnChart,
    chartYearOption,
    quarterChartOption,
    distributedColumnchart,
    dynamicQuarterLoadedChart,
    groupedStackedChart,
    dumbbellChart
};