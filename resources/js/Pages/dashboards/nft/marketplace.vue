<script>
import { Link } from '@inertiajs/vue3';
import getChartColorsArray from "@/common/getChartColorsArray";
import { layoutComputed } from "@/state/helpers.js"
import { CountTo } from "vue3-count-to";
export default {
  components: {
    CountTo,
    Link
  },
  data() {
    return {
      series: [
        {
          name: "Artwork",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
        {
          name: "Auction",
          data: [40, 120, 83, 45, 31, 74, 35, 34, 78],
        },
        {
          name: "Creators",
          data: [95, 35, 20, 130, 64, 22, 43, 45, 31],
        },
      ],
      chartOptions: {
        chart: {
          height: 320,
          type: "area",
          toolbar: "false",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 3,
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
          ],
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return value;
            },
          },
          tickAmount: 5,
          min: 0,
          max: 150,
        },
        fill: {
          opacity: 0,
          colors: ["#0AB39C", "#F06548"],
          type: "solid",
        },
      },
    };
  },
  mounted() {
    this.handleUpdate();
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 1, 2025").getTime();

    // Update the count down every 1 second
    var countDown = setInterval(function () {
      // Get today's date and time
      var currentTime = new Date().getTime();

      // Find the distance between currentTime and the count down date
      var distance = countDownDate - currentTime;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      var countDownBlock =
        '<div class="countdownlist-item">' +
        '<div class="count-title">Days</div>' +
        '<div class="count-num">' +
        days +
        "</div>" +
        "</div>" +
        '<div class="countdownlist-item">' +
        '<div class="count-title">Hours</div>' +
        '<div class="count-num">' +
        hours +
        "</div>" +
        "</div>" +
        '<div class="countdownlist-item">' +
        '<div class="count-title">Minutes</div>' +
        '<div class="count-num">' +
        minutes +
        "</div>" +
        "</div>" +
        '<div class="countdownlist-item">' +
        '<div class="count-title">Seconds</div>' +
        '<div class="count-num">' +
        seconds +
        "</div>" +
        "</div>";

      // Output the result in an element with id="countDownBlock"
      if (document.getElementById("countdown")) {
        document.getElementById("countdown").innerHTML = countDownBlock;
      }
      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(countDown);
        document.getElementById("countdown").innerHTML =
          '<div class="countdown-endtxt">The countdown has ended!</div>';
      }
    }, 1000);
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
              colors: getChartColorsArray('["--vz-primary","--vz-success", "--vz-light"]')
            };
            break;
          case "saas":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray('["--vz-primary","--vz-success", "--vz-light"]')
            };
            break;
          case "corporate":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray('["--vz-primary","--vz-secondary", "--vz-light"]')
            };
            break;
          case "galaxy":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray('["--vz-primary","--vz-success", "--vz-secondary"]')
            };
            break;
          case "material":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray('["--vz-primary","--vz-success", "--vz-light"]')
            };
            break;
          case "creative":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray('["--vz-primary","--vz-success", "--vz-light"]')
            };
            break;
          case "minimal":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray('["--vz-primary","--vz-success", "--vz-light"]')
            };
            break;
          case "modern":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray('["--vz-primary","--vz-success", "--vz-light"]')
            };
            break;
          case "interactive":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray('["--vz-primary","--vz-success", "--vz-light"]')
            };
            break;
          case "classic":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray('["--vz-primary","--vz-light", "--vz-secondary"]')
            };
            break;
          case "vintage":
            this.chartOptions = {
              ...this.chartOptions,
              colors: getChartColorsArray('["--vz-primary","--vz-success", "--vz-light"]')
            };
            break;
        }
      }, 200)
    },
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
    <BCardBody class="p-0">
      <BRow class="g-0">
        <BCol xxl="8">
          <div class="">
            <BCardHeader class="border-0 align-items-center d-flex">
              <BCardTitle class="mb-0 flex-grow-1">Marketplace</BCardTitle>
              <div class="hstack gap-1">
                <BButton type="button" variant="soft-secondary" size="sm" class="material-shadow-none">
                  ALL
                </BButton>
                <BButton type="button" variant="soft-secondary" size="sm" class="material-shadow-none">
                  1M
                </BButton>
                <BButton type="button" variant="soft-secondary" size="sm" class="material-shadow-none">
                  6M
                </BButton>
                <BButton type="button" variant="soft-primary" size="sm" class="material-shadow-none">
                  1Y
                </BButton>
              </div>
            </BCardHeader>

            <BRow class="g-0 text-center">
              <BCol cols="6" sm="4">
                <div class="p-3 border border-dashed border-start-0">
                  <h5 class="mb-1">
                    <count-to :startVal="0" :endVal="36.48" :duration="5000" :decimals="2"></count-to>k
                  </h5>
                  <p class="text-muted mb-0">Aetworks</p>
                </div>
              </BCol>
              <BCol cols="6" sm="4">
                <div class="p-3 border border-dashed border-start-0">
                  <h5 class="mb-1">
                    <count-to :startVal="0" :endVal="92" :duration="5000"></count-to>k
                  </h5>
                  <p class="text-muted mb-0">Auction</p>
                </div>
              </BCol>
              <BCol cols="6" sm="4">
                <div class="p-3 border border-dashed border-end-0">
                  <h5 class="mb-1">
                    <count-to :startVal="0" :endVal="8" :duration="5000"></count-to>k
                  </h5>
                  <p class="text-muted mb-0">Creators</p>
                </div>
              </BCol>
            </BRow>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="series" :options="chartOptions"></apexchart>
          </div>
        </BCol>

        <BCol xxl="4">
          <div class="border-start p-4 h-100 d-flex flex-column">
            <div class="w-100">
              <div class="d-flex align-items-center">
                <img src="https://img.themesbrand.com/velzon/images/img-2.gif"
                  class="img-fluid avatar-xs rounded-circle object-fit-cover" alt="" />
                <div class="ms-3 flex-grow-1">
                  <h5 class="fs-16 mb-1 fw-bold">Trendy Fashion Portraits</h5>
                  <p class="text-muted mb-0">Artwork</p>
                </div>
                <div class="menu-icon">
                  <BDropdown variant=" link" class="card-header-dropdown" toggle-class="align-middle text-muted" no-caret
                    menu-class="dropdown-menu-end" :offset="{ alignmentAxis: -120, crossAxis: 0, mainAxis: -3 }"
                    id="dropdownMenuButton5">
                    <template #button-content><i class="ri-share-line fs-18"></i></template>
                    <BDropdownItem><i class="ri-twitter-fill text-primary align-bottom me-1"></i>Twitter</BDropdownItem>
                    <BDropdownItem><i class="ri-facebook-circle-fill text-info align-bottom me-1"></i>Facebook
                    </BDropdownItem>
                    <BDropdownItem><i class="ri-google-fill text-danger align-bottom me-1"></i>Google</BDropdownItem>
                  </BDropdown>
                </div>
              </div>

              <h3 class="ff-secondary fw-bold mt-4 cfs-22">
                <i class="mdi mdi-ethereum text-primary"></i> 346.12 ETH
              </h3>
              <p class="text-success mb-3">+586.85 (40.6%)</p>

              <p class="text-muted">
                NFT art is a digital asset that is collectable, unique, and
                non-transferrable, Cortes explained Every NFT is unique
                duplicated.
              </p>

              <div class="d-flex align-items-end justify-content-between mt-4">
                <div>
                  <p class="fs-14 text-muted mb-1">Current Bid</p>
                  <h4 class="fs-20 ff-secondary fw-semibold mb-0">
                    342.74 ETH
                  </h4>
                </div>

                <div>
                  <p class="fs-14 text-muted mb-1">Highest Bid</p>
                  <h4 class="fs-20 ff-secondary fw-semibold mb-0">
                    346.67 ETH
                  </h4>
                </div>
              </div>

              <div class="dash-countdown mt-4 pt-1">
                <div id="countdown" class="countdownlist"></div>
              </div>

              <BRow class="mt-4 pt-2">
                <BCol>
                  <Link href="/apps/nft-item-detail" class="btn btn-primary w-100">View Details</Link>
                </BCol>
                <BCol>
                  <BButton variant="info" class="w-100">Bid Now</BButton>
                </BCol>
              </BRow>
            </div>
          </div>
        </BCol>
      </BRow>
    </BCardBody>
  </BCard>
</template>

<style>
.menu-icon {
  position: absolute;
  right: 8px;
  top: 23px;
}
</style>