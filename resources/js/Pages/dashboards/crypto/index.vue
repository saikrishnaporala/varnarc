<script>
import { Head } from '@inertiajs/vue3';
import Layout from "@/Layouts/main.vue";
import PageHeader from "@/Components/page-header.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import Portfolio from "./portfolio.vue";
import MarketGraph from "./market-graph.vue";
import News from "./news.vue";
import RecentActivity from "./recent-activity.vue";
import TopProgram from "./top-performers.vue";
import Currencies from "./currencies.vue";
import Trading from "./trading.vue";

import btc from "@assets/images/svg/crypto-icons/btc.svg";
import ltc from "@assets/images/svg/crypto-icons/ltc.svg";
import eth from "@assets/images/svg/crypto-icons/eth.svg";
import bnb from "@assets/images/svg/crypto-icons/bnb.svg";
import dash from "@assets/images/svg/crypto-icons/dash.svg";
import usdt from "@assets/images/svg/crypto-icons/usdt.svg";
import neo from "@assets/images/svg/crypto-icons/neo.svg";

export default {
  data() {
    return {
      chartcolors: {
        colors: ["#f17171"],
      },
      cyptoWidgets: [
        {
          id: 1,
          icon: "ri-money-dollar-circle-fill",
          label: "Total Invested",
          counter: "2390.68",
          badge: "ri-arrow-up-s-fill",
          badgeColor: "success",
          percentage: "6.24",
        },
        {
          id: 2,
          icon: "ri-arrow-up-circle-fill",
          label: "Total Change",
          counter: "19523.25",
          badge: "ri-arrow-up-s-fill",
          badgeColor: "success",
          percentage: "3.67",
        },
        {
          id: 3,
          icon: "ri-arrow-down-circle-fill",
          label: "Day Change",
          counter: "14799.44",
          badge: "ri-arrow-down-s-fill",
          badgeColor: "danger",
          percentage: "4.80",
        },
      ],
      cryptoSlider: [
        {
          id: 1,
          img: btc,
          label: "Bitcoin",
          price: "$1,523,647",
          change: "+13.11%",
          changeClass: "success",
          coinName: "btc",
          chartsColor: "#0ab39c",
          chartOptions: {
            chart: {
              width: "100%",
              height: 46,
              type: "area",
              sparkline: {
                enabled: true,
              },
              toolbar: {
                show: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
              width: 1.5,
            },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [50, 100, 100, 100],
              },
            },
            colors: ["#0ab39c"],
          },
          series: [
            {
              name: "Bitcoin",
              data: [85, 68, 35, 90, 8, 11, 26, 54],
            },
          ],
        },
        {
          id: 2,
          img: ltc,
          label: "Litecoin",
          price: "$2,145,687",
          change: "+15.08%",
          changeClass: "success",
          coinName: "ltc",
          chartsColor: "#0ab39c",
          chartOptions: {
            chart: {
              width: "100%",
              height: 46,
              type: "area",
              sparkline: {
                enabled: true,
              },
              toolbar: {
                show: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
              width: 1.5,
            },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [50, 100, 100, 100],
              },
            },
            colors: ["#0ab39c"],
          },
          series: [
            {
              name: "Litecoin",
              data: [25, 50, 41, 87, 12, 36, 9, 54],
            },
          ],
        },
        {
          id: 3,
          img: eth,
          label: "Ethereum",
          price: "$3,312,870",
          change: "+08.57%",
          changeClass: "success",
          coinName: "etc",
          chartsColor: "#0ab39c",
          chartOptions: {
            chart: {
              width: "100%",
              height: 46,
              type: "area",
              sparkline: {
                enabled: true,
              },
              toolbar: {
                show: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
              width: 1.5,
            },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [50, 100, 100, 100],
              },
            },
            colors: ["#0ab39c"],
          },
          series: [
            {
              name: "Ethereum",
              data: [36, 21, 65, 22, 35, 50, 29, 44],
            },
          ],
        },
        {
          id: 4,
          img: bnb,
          label: "Binance",
          price: "$1,820,045",
          change: "-09.21%",
          changeClass: "danger",
          coinName: "bnb",
          chartsColor: "#F06548",
          chartOptions: {
            chart: {
              width: "100%",
              height: 46,
              type: "area",
              sparkline: {
                enabled: true,
              },
              toolbar: {
                show: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
              width: 1.5,
            },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [50, 100, 100, 100],
              },
            },
            colors: ["#F06548"],
          },
          series: [
            {
              name: "Binance",
              data: [30, 58, 29, 89, 12, 36, 9, 54],
            },
          ],
        },
        {
          id: 5,
          img: dash,
          label: "Dash",
          price: "$9,458,153",
          change: "+12.07%",
          changeClass: "success",
          coinName: "dash",
          chartsColor: "#0ab39c",
          chartOptions: {
            chart: {
              width: "100%",
              height: 46,
              type: "area",
              sparkline: {
                enabled: true,
              },
              toolbar: {
                show: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
              width: 1.5,
            },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [50, 100, 100, 100],
              },
            },
            colors: ["#0ab39c"],
          },
          series: [
            {
              name: "Dash",
              data: [24, 68, 39, 86, 29, 42, 11, 58],
            },
          ],
        },
        {
          id: 6,
          img: usdt,
          label: "Tether",
          price: "$5,201,458",
          change: "+14.99%",
          changeClass: "success",
          coinName: "usdt",
          chartsColor: "#0ab39c",
          chartOptions: {
            chart: {
              width: "100%",
              height: 46,
              type: "area",
              sparkline: {
                enabled: true,
              },
              toolbar: {
                show: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
              width: 1.5,
            },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [50, 100, 100, 100],
              },
            },
            colors: ["#0ab39c"],
          },
          series: [
            {
              name: "Dash",
              data: [13, 76, 12, 85, 25, 60, 9, 54],
            },
          ],
        },
        {
          id: 7,
          img: neo,
          label: "NEO",
          price: "$6,147,957",
          change: "-05.07%",
          changeClass: "danger",
          coinName: "neo",
          chartsColor: "#F06548",
          chartOptions: {
            chart: {
              width: "100%",
              height: 46,
              type: "area",
              sparkline: {
                enabled: true,
              },
              toolbar: {
                show: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
              width: 1.5,
            },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [50, 100, 100, 100],
              },
            },
            colors: ["#F06548"],
          },
          series: [
            {
              name: "Neo",
              data: [9, 66, 41, 89, 12, 36, 25, 54],
            },
          ],
        },
      ],
      chartOptions: {
        chart: {
          width: 130,
          height: 46,
          type: "area",
          sparkline: {
            enabled: true,
          },
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 1.5,
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [50, 100, 100, 100],
          },
        },
        colors: ["#67b173"],
      },
      Autoplay
    };
  },
  components: {
    Layout,
    PageHeader,
    Portfolio,
    MarketGraph,
    RecentActivity,
    TopProgram,
    News,
    Currencies,
    Trading,
    Swiper,
    SwiperSlide,
    Head
  },
};
</script>

<template>
  <Layout>
    <Head title="Crypto" />
    <PageHeader title="Crypto" pageTitle="Dashboards" />

    <BRow>
      <BCol xxl="3">
        <Portfolio />
      </BCol>

      <BCol xxl="9" order-xxl="0" class="order-first">
        <BRow>
          <BCol lg="4" md="6" v-for="(item, index) of cyptoWidgets" :key="index">
            <BCard no-body>
              <BCardBody>
                <div class="d-flex align-items-center">
                  <div class="avatar-sm flex-shrink-0">
                    <span class="avatar-title bg-light text-primary rounded-circle fs-3 material-shadow">
                      <i :class="`${item.icon} align-middle`"></i>
                    </span>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <p class="text-uppercase fw-semibold fs-12 text-muted mb-1">
                      {{ item.label }}
                    </p>
                    <h4 class="mb-0">
                      $
                      <span class="counter-value">
                        {{ item.counter }}
                      </span>
                    </h4>
                  </div>
                  <div class="flex-shrink-0 align-self-end">
                    <span
                      :class="{ 'badge bg-success-subtle text-success': item.badge == 'ri-arrow-up-s-fill', 'badge bg-danger-subtle text-danger': item.badge == 'ri-arrow-down-s-fill' }"><i
                        :class="`${item.badge} align-middle me-1`"></i>
                      {{ item.percentage }} %</span>
                  </div>
                </div>
              </BCardBody>
            </BCard>
          </BCol>
        </BRow>

        <BRow>
          <BCol xl="12">
            <MarketGraph />
          </BCol>
        </BRow>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <swiper class="cryptoSlider" :slidesPerView="1" :loop="false" :spaceBetween="24" :modules="[Autoplay]"
          :autoplay="{ delay: 2500, disableOnInteraction: false }"
          :breakpoints="{ 640: { slidesPerView: 2 }, 768: { slidesPerView: 2.5 }, 1024: { slidesPerView: 3 }, 1200: { slidesPerView: 5 }, }">
          <template v-for="(item, index) of cryptoSlider" :key="index">
            <swiper-slide>
              <BCard no-body>
                <BCardBody>
                  <div class="float-end">
                    <div class="dropdown">
                      <BLink class="text-reset" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <span class="text-muted fs-18">
                          <i class="mdi mdi-dots-horizontal"></i>
                        </span>
                      </BLink>
                      <div class="dropdown-menu dropdown-menu-end">
                        <BLink class="dropdown-item" href="#">Details</BLink>
                        <BLink class="dropdown-item" href="#">Cancel</BLink>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <img :src="item.img" class="bg-light rounded-circle p-1 avatar-xs img-fluid material-shadow" alt />
                    <h6 class="ms-2 mb-0 fs-14">{{ item.label }}</h6>
                  </div>
                  <BRow class="align-items-end g-0">
                    <BCol cols="6">
                      <h5 class="mb-1 mt-4">{{ item.price }}</h5>
                      <p class="text-success fs-13 fw-medium mb-0">
                        {{ item.change }}
                        <span class="text-muted ms-2 fs-10 text-uppercase">({{ item.coinName }})</span>
                      </p>
                    </BCol>
                    <BCol cols="6">
                      <apexchart class="apex-charts" :options="item.chartOptions" height="50" dir="ltr"
                        :series="item.series.length > 0 ? item.series : []" :key="item.id"></apexchart>
                    </BCol>
                  </BRow>
                </BCardBody>
              </BCard>
            </swiper-slide>
          </template>
        </swiper>
      </BCol>
    </BRow>

    <BRow>
      <BCol xl="8">
        <Currencies />
      </BCol>
      <BCol xl="4">
        <Trading />
      </BCol>
    </BRow>

    <BRow>
      <BCol xxl="4" lg="6">
        <RecentActivity />
      </BCol>
      <BCol xxl="4" lg="6">
        <TopProgram />
      </BCol>
      <BCol xxl="4" lg="6">
        <News />
      </BCol>
    </BRow>
  </Layout>
</template>
