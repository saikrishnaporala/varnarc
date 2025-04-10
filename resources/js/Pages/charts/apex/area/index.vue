<script>
import { Link, Head } from '@inertiajs/vue3';
import Layout from "@/Layouts/main.vue";
import PageHeader from "@/Components/page-header.vue";
import { layoutComputed } from "@/state/helpers.js"
import getChartColorsArray from "@/common/getChartColorsArray";
import {
  basicAreaChart,
  splineAreaChart,
  datetimeAreaChart,
  areaMonthsChart,
  areaYearsChart,
  areaStackedChart,
  areaIrregularChart,
  areaNullValueChart,
  areaNegativeChart,
} from "./data";

/**
 * Area charts component
 */
export default {
  data() {
    return {
      basicAreaChart: basicAreaChart,
      splineAreaChart: splineAreaChart,
      datetimeAreaChart: datetimeAreaChart,
      areaMonthsChart: areaMonthsChart,
      areaYearsChart: areaYearsChart,
      areaStackedChart: areaStackedChart,
      areaIrregularChart: areaIrregularChart,
      areaNullValueChart: areaNullValueChart,
      areaNegativeChart: areaNegativeChart,

      selection: "one_year",
    };
  },
  components: {
    Layout,
    PageHeader,
    Link, Head
  },
  computed: {
    ...layoutComputed,
    layoutTheme() {
      return this.$store ? this.$store.state.layout.layoutTheme : {} || {};
    }
  },
  methods: {
    updateData: function (timeline) {
      this.selection = timeline;
      switch (timeline) {
        case "one_month":
          this.$refs.chart.zoomX(
            new Date("28 Jan 2013").getTime(),
            new Date("27 Feb 2013").getTime()
          );
          break;
        case "six_months":
          this.$refs.chart.zoomX(
            new Date("27 Sep 2012").getTime(),
            new Date("27 Feb 2013").getTime()
          );
          break;
        case "one_year":
          this.$refs.chart.zoomX(
            new Date("27 Feb 2012").getTime(),
            new Date("27 Feb 2013").getTime()
          );
          break;
        case "all":
          this.$refs.chart.zoomX(
            new Date("23 Jan 2012").getTime(),
            new Date("27 Feb 2013").getTime()
          );
          break;
        default:
      }
    },
    handleUpdate() {
      setTimeout(() => {
        this.basicAreaChart = {
          ...this.basicAreaChart,
          chartOptions: {
            ...this.basicAreaChart.chartOptions,
            colors: getChartColorsArray('["--vz-success"]')
          }
        };
        this.splineAreaChart = {
          ...this.splineAreaChart,
          chartOptions: {
            ...this.splineAreaChart.chartOptions,
            colors: getChartColorsArray('["--vz-primary", "--vz-success"]')
          }
        };
        this.datetimeAreaChart = {
          ...this.datetimeAreaChart,
          chartOptions: {
            ...this.datetimeAreaChart.chartOptions,
            colors: getChartColorsArray('["--vz-info"]')
          }
        };
        this.areaNegativeChart = {
          ...this.areaNegativeChart,
          chartOptions: {
            ...this.areaNegativeChart.chartOptions,
            colors: getChartColorsArray('["--vz-success", "--vz-info"]')
          }
        };
        this.areaMonthsChart = {
          ...this.areaMonthsChart,
          chartOptions: {
            ...this.areaMonthsChart.chartOptions,
            colors: getChartColorsArray('["--vz-danger"]')
          }
        };
        this.areaYearsChart = {
          ...this.areaYearsChart,
          chartOptions: {
            ...this.areaYearsChart.chartOptions,
            colors: getChartColorsArray('["--vz-success"]')
          }
        };
        this.areaStackedChart = {
          ...this.areaStackedChart,
          chartOptions: {
            ...this.areaStackedChart.chartOptions,
            colors: getChartColorsArray('["--vz-success", "--vz-info", "--vz-light"]')
          }
        };
        this.areaIrregularChart = {
          ...this.areaIrregularChart,
          chartOptions: {
            ...this.areaIrregularChart.chartOptions,
            colors: getChartColorsArray('["--vz-primary", "--vz-warning", "--vz-success"]')
          }
        };
        this.areaNullValueChart = {
          ...this.areaNullValueChart,
          chartOptions: {
            ...this.areaNullValueChart.chartOptions,
            colors: getChartColorsArray('["--vz-success"]')
          }
        };
      }, 200)
    },
  },
  mounted() {
    this.handleUpdate();
  },
  watch: {
    layoutTheme() {
      this.handleUpdate();
    },
  },
};
</script>

<template>
  <Layout>

    <Head title="Area Charts" />
    <PageHeader title="Area Charts" pageTitle="Apexcharts" />
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Basic Area Chart</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="basicAreaChart.series"
              :options="basicAreaChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Spline Area Chart</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="splineAreaChart.series"
              :options="splineAreaChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Area Chart - Datetime X - Axis Chart</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <div class="toolbar d-flex align-items-start justify-content-center flex-wrap gap-2">
              <BButton type="button" variant="soft-primary" size="sm" class="timeline-btn" id="one_month"
                @click="updateData('one_month')" :class="{ active: selection === 'one_month' }">
                1M
              </BButton>
              <BButton type="button" variant="soft-primary" size="sm" class="timeline-btn" id="six_months"
                @click="updateData('six_months')" :class="{ active: selection === 'six_months' }">
                6M
              </BButton>
              <BButton type="button" variant="soft-primary" size="sm" class="timeline-btn" id="one_year"
                @click="updateData('one_year')" :class="{ active: selection === 'one_year' }">
                1Y
              </BButton>
              <BButton type="button" variant="soft-primary" size="sm" class="timeline-btn" id="all"
                @click="updateData('all')" :class="{ active: selection === 'all' }">
                ALL
              </BButton>
            </div>
            <apexchart ref="chart" class="apex-charts" height="350" dir="ltr" :series="datetimeAreaChart.series"
              :options="datetimeAreaChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Area with Negative Values Chart</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="areaNegativeChart.series"
              :options="areaNegativeChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Area Chart - Github Style</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <div class="bg-light">
              <div id="area_chart-months" class="apex-charts" dir="ltr"></div>
              <apexchart class="apex-charts" height="130" dir="ltr" :series="areaMonthsChart.series"
                :options="areaMonthsChart.chartOptions"></apexchart>
            </div>

            <div class="github-style d-flex align-items-center my-2">
              <div class="flex-shrink-0 me-2">
                <img class="avatar-sm rounded" src="@assets/images/users/avatar-2.jpg" data-hovercard-user-id="634573"
                  alt="" />
              </div>
              <div class="flex-grow-1">
                <BLink href="#" class="font-size-14 text-dark fw-medium">coder</BLink>
                <div class="cmeta text-muted font-size-11">
                  <span class="commits text-dark fw-medium"></span> commits
                </div>
              </div>
            </div>

            <div class="bg-light">
              <apexchart class="apex-charts" height="170" dir="ltr" :series="areaYearsChart.series"
                :options="areaYearsChart.chartOptions"></apexchart>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Stacked Area Chart</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="areaStackedChart.series"
              :options="areaStackedChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Irregular Timeseries Chart</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="areaIrregularChart.series"
              :options="areaIrregularChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Area Chart With Null Values Chart</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="areaNullValueChart.series"
              :options="areaNullValueChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
