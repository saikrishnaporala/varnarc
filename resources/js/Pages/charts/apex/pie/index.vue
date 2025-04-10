<script>
import { Link, Head } from '@inertiajs/vue3';
import Layout from "@/Layouts/main.vue";
import PageHeader from "@/Components/page-header.vue";
import { layoutComputed } from "@/state/helpers.js"
import getChartColorsArray from "@/common/getChartColorsArray";
import {
  simplePieChart,
  donutChart,
  updatingDonutChart,
  gradientDonutChart,
  patternDonutChart,
  imagePieChart,
  monochromePieChart,
} from "./data";

/**
 * Pie chart component
 */
export default {
  components: {
    Layout,
    PageHeader,
    Link, Head
  },
  data() {
    return {
      simplePieChart: simplePieChart,
      donutChart: donutChart,
      updatingDonutChart: updatingDonutChart,
      gradientDonutChart: gradientDonutChart,
      patternDonutChart: patternDonutChart,
      imagePieChart: imagePieChart,
      monochromePieChart: monochromePieChart,
    };
  },
  methods: {
    appendData: function () {
      var arr = this.updatingDonutChart.series.slice();
      arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
      this.updatingDonutChart.series = arr;
    },

    removeData: function () {
      if (this.updatingDonutChart.series.length === 1) return;
      var arr = this.updatingDonutChart.series.slice();
      arr.pop();
      this.updatingDonutChart.series = arr;
    },

    randomize: function () {
      this.updatingDonutChart.series = this.updatingDonutChart.series.map(function () {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      });
    },

    reset: function () {
      this.updatingDonutChart.series = [44, 55, 13, 33];
    },
    handleUpdate() {
      setTimeout(() => {
        this.simplePieChart = {
          ...this.simplePieChart,
          chartOptions: {
            ...this.simplePieChart.chartOptions,
            colors: getChartColorsArray('["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"  ]')
          }
        };
        this.donutChart = {
          ...this.donutChart,
          chartOptions: {
            ...this.donutChart.chartOptions,
            colors: getChartColorsArray('["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]')
          }
        };
        this.updatingDonutChart = {
          ...this.updatingDonutChart,
          chartOptions: {
            ...this.updatingDonutChart.chartOptions,
            colors: getChartColorsArray('["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]')
          }
        };
        this.gradientDonutChart = {
          ...this.gradientDonutChart,
          chartOptions: {
            ...this.gradientDonutChart.chartOptions,
            colors: getChartColorsArray('["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]')
          }
        };
        this.patternDonutChart = {
          ...this.patternDonutChart,
          chartOptions: {
            ...this.patternDonutChart.chartOptions,
            colors: getChartColorsArray('["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]')
          }
        };
        this.imagePieChart = {
          ...this.imagePieChart,
          chartOptions: {
            ...this.imagePieChart.chartOptions,
            colors: getChartColorsArray('["--vz-primary", "--vz-success", "--vz-warning", "--vz-info"]')
          }
        };
      }, 200)
    }
  },
  computed: {
    ...layoutComputed,
    layoutTheme() {
      return this.$store ? this.$store.state.layout.layoutTheme : {} || {};
    }
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

    <Head title="Pie Charts" />
    <PageHeader title="Pie Charts" pageTitle="Apexcharts" />
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader class="justify-content-between d-flex align-items-center">
            <BCardTitle>Simple Pie Chart</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="300" dir="ltr" :series="simplePieChart.series"
              :options="simplePieChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader class="justify-content-between d-flex align-items-center">
            <BCardTitle>Simple Donut Chart</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="300" dir="ltr" :series="donutChart.series"
              :options="donutChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader class="justify-content-between d-flex align-items-center">
            <BCardTitle>Updating Donut Chart</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="300" dir="ltr" :series="updatingDonutChart.series"
              :options="updatingDonutChart.chartOptions"></apexchart>

            <div class="d-flex align-items-start flex-wrap gap-2 justify-content-center mt-4">
              <BButton id="add" variant="light" size="sm" @click="appendData">
                + ADD
              </BButton>

              <BButton id="remove" variant="light" size="sm" @click="removeData">
                - REMOVE
              </BButton>

              <BButton id="randomize" variant="light" size="sm" @click="randomize">
                RANDOMIZE
              </BButton>

              <BButton id="reset" variant="light" size="sm" @click="reset">
                RESET
              </BButton>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader class="justify-content-between d-flex align-items-center">
            <BCardTitle>Monochrome Pie Chart</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="300" dir="ltr" :series="monochromePieChart.series"
              :options="monochromePieChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader class="justify-content-between d-flex align-items-center">
            <BCardTitle>Gradient Donut Chart</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="300" dir="ltr" :series="gradientDonutChart.series"
              :options="gradientDonutChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader class="justify-content-between d-flex align-items-center">
            <BCardTitle>Patterned Donut Chart</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="300" dir="ltr" :series="patternDonutChart.series"
              :options="patternDonutChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader class="justify-content-between d-flex align-items-center">
            <BCardTitle>Pie Chart with Image Fill</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="300" dir="ltr" :series="imagePieChart.series"
              :options="imagePieChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
