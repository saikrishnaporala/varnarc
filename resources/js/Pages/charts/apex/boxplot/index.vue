<script>
import { Link, Head } from '@inertiajs/vue3';
import Layout from "@/Layouts/main.vue";
import PageHeader from "@/Components/page-header.vue";

import { boxChart, boxplotScatterChart } from "./data";

/**
 * Boxplot Charts component
 */
export default {
  components: {
    Layout,
    PageHeader,
    Link, Head
  },
  data() {
    return {
      boxChart: boxChart,
      boxplotScatterChart: boxplotScatterChart,
    };
  },
};
</script>

<template>
  <Layout>
    <Head title="Boxplot Charts" />
    <PageHeader title="Boxplot Charts" pageTitle="Apexcharts" />
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader class="justify-content-between d-flex align-items-center">
            <BCardTitle>Basic Box Chart</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="boxChart.series" :options="boxChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader class="justify-content-between d-flex align-items-center">
            <BCardTitle>Boxplot with Scatter Chart</BCardTitle>

          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="boxplotScatterChart.series" :options="boxplotScatterChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>