<script>
import { CountTo } from "vue3-count-to";
import getChartColorsArray from "@/common/getChartColorsArray";
import { layoutComputed } from "@/state/helpers.js"
export default {
  data() {
    return {
      series: [{
        name: "Last Year",
        data: [
          25.3, 12.5, 20.2, 18.5, 40.4, 25.4, 15.8, 22.3, 19.2, 25.3, 12.5,
          20.2,
        ],
      },
      {
        name: "Current Year",
        data: [
          36.2, 22.4, 38.2, 30.5, 26.4, 30.4, 20.2, 29.6, 10.9, 36.2, 22.4,
          38.2,
        ],
      },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 309,
          stacked: true,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "20%",
            borderRadius: 6,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: true,
          position: "bottom",
          horizontalAlign: "center",
          fontWeight: 400,
          fontSize: "8px",
          offsetX: 0,
          offsetY: 0,
          markers: {
            width: 9,
            height: 9,
            radius: 4,
          },
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        grid: {
          show: false,
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
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: true,
            strokeDashArray: 1,
            height: 1,
            width: "100%",
            offsetX: 0,
            offsetY: 0,
          },
        },
        yaxis: {
          show: false,
        },
        fill: {
          opacity: 1,
        },
      },
    };
  },
  components: {
    CountTo
  },
  computed: {
    ...layoutComputed,
    layoutTheme() {
      return this.$store ? this.$store.state.layout.layoutTheme : {} || {};
    }
  },
  methods: {
    handleUpdate() {
      setTimeout(() => {
        switch (this.layoutTheme) {
          case "default":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray('["--vz-success", "--vz-light"]')
            };
            break;
          case "saas":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray('["--vz-success", "--vz-light"]')
            };
            break;
          case "corporate":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray('["--vz-primary", "--vz-light"]')
            };
            break;
          case "galaxy":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray('["--vz-primary", "--vz-light"]')
            };
            break;
          case "material":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray('["--vz-success", "--vz-light"]')
            };
            break;
          case "creative":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray('["--vz-secondary", "--vz-light"]')
            };
            break;
          case "minimal":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray('["--vz-primary", "--vz-light"]')
            };
            break;
          case "modern":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray('["--vz-primary", "--vz-light"]')
            };
            break;
          case "interactive":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray('["--vz-primary", "--vz-light"]')
            };
            break;
          case "classic":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray('["--vz-primary", "--vz-secondary"]')
            };
            break;
          case "vintage":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray('["--vz-primary", "--vz-success-rgb, 0.5"]')
            };
            break;
        }

      }, 200)
    },
  },
  mounted() {
    this.handleUpdate();
  },
  watch: {
    layoutTheme() {
      this.handleUpdate();
    }
  },
};
</script>

<template>
  <BCard no-body>
    <BCardHeader class="border-0 align-items-center d-flex">
      <BCardTitle class="mb-0 flex-grow-1">Audiences Metrics</BCardTitle>
      <div class="hstack gap-1">
        <BButton type="button" variant="soft-secondary" size="sm" class="material-shadow-none">ALL</BButton>
        <BButton type="button" variant="soft-secondary" size="sm" class="material-shadow-none">1M</BButton>
        <BButton type="button" variant="soft-secondary" size="sm" class="material-shadow-none">6M</BButton>
        <BButton type="button" variant="soft-primary" size="sm" class="material-shadow-none">1Y</BButton>
      </div>
    </BCardHeader>
    <BCardHeader class="p-0 border-0 bg-light-subtle">
      <BRow class="g-0 text-center">
        <BCol cols="6" sm="4">
          <div class="p-3 border border-dashed border-start-0">
            <h5 class="mb-1">
              <count-to :startVal='0' :endVal='854' :duration='5000'></count-to>
              <span class="text-success ms-1 fs-12"> 49%<i class="ri-arrow-right-up-line ms-1 align-middle"></i></span>
            </h5>
            <p class="text-muted mb-0">Avg. Session</p>
          </div>
        </BCol>
        <BCol cols="6" sm="4">
          <div class="p-3 border border-dashed border-start-0">
            <h5 class="mb-1">
              <count-to :startVal='0' :endVal='1278' :duration='4000'></count-to>
              <span class="text-success ms-1 fs-12"> 60%<i class="ri-arrow-right-up-line ms-1 align-middle"></i></span>
            </h5>
            <p class="text-muted mb-0">Conversion Rate</p>
          </div>
        </BCol>
        <BCol cols="6" sm="4">
          <div class="p-3 border border-dashed border-start-0 border-end-0">
            <h5 class="mb-1">
              <count-to :startVal='0' :endVal='3' :duration='4000'></count-to>m
              <count-to :startVal='0' :endVal='40' :duration='4000'></count-to>sec
              <span class="text-success ms-1 fs-12"> 37%<i class="ri-arrow-right-up-line ms-1 align-middle"></i></span>
            </h5>
            <p class="text-muted mb-0">Avg. Session Duration</p>
          </div>
        </BCol>
      </BRow>
    </BCardHeader>
    <BCard-body class="p-0 pb-2">
      <div>
        <apexchart class="apex-charts" dir="ltr" :series="series" :options="chartOptions" height="309"></apexchart>
      </div>
    </BCard-body>
  </BCard>
</template>