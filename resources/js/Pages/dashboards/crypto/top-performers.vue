<script>
import btc from "@assets/images/svg/crypto-icons/btc.svg";
import eth from "@assets/images/svg/crypto-icons/eth.svg";
import aave from "@assets/images/svg/crypto-icons/aave.svg";
import doge from "@assets/images/svg/crypto-icons/doge.svg";
import bnb from "@assets/images/svg/crypto-icons/bnb.svg";
import ltc from "@assets/images/svg/crypto-icons/ltc.svg";

export default {
  setup() {
    return {
      topPerformers: [
        {
          id: 1,
          img: btc,
          coinName: "Bitcoin",
          marketCap: "18.7",
          price: "12,863.08",
          change: "+$67.21",
          textColor: "success",
          percentage: "+4.33%",
        },
        {
          id: 2,
          img: eth,
          coinName: "Ethereum",
          marketCap: "27.4",
          price: "08,256.04",
          change: "+$51.19",
          textColor: "success",
          percentage: "+5.64%",
        },
        {
          id: 3,
          img: aave,
          coinName: "Avalanche",
          marketCap: "12.9",
          price: "11,896.13",
          change: "-$59.01",
          textColor: "danger",
          percentage: "-4.08%",
        },
        {
          id: 4,
          img: doge,
          coinName: "Dogecoin",
          marketCap: "09.5",
          price: "15,999.06",
          change: "+$74.05",
          textColor: "success",
          percentage: "+3.12%",
        },
        {
          id: 5,
          img: bnb,
          coinName: "Binance",
          marketCap: "14.2",
          price: "13,786.18",
          change: "-$61.05",
          textColor: "danger",
          percentage: "-9.22%",
        },
        {
          id: 6,
          img: ltc,
          coinName: "Litecoin",
          marketCap: "09.5",
          price: "10,604.27",
          change: "+$76.12",
          textColor: "success",
          percentage: "+4.92%",
        },
      ],
    };
  },
};
</script>

<template>
  <BCard no-body class="card-height-100">
    <BCardHeader class="align-items-center d-flex">
      <BCard-title class="mb-0 flex-grow-1">Top Performers</BCard-title>
      <div class="hstack gap-1">
        <BButton type="button" variant="soft-info" size="sm" class="material-shadow-none">1H</BButton>
        <BButton type="button" variant="soft-info" size="sm" class="material-shadow-none">1D</BButton>
        <BButton type="button" variant="soft-info" size="sm" class="material-shadow-none">7D</BButton>
        <BButton type="button" variant="soft-primary" size="sm" class="material-shadow-none">1M</BButton>
      </div>
    </BCardHeader>
    <BCardBody class="p-0">
      <ul class="list-group list-group-flush border-dashed mb-0">
        <li class="list-group-item d-flex align-items-center" v-for="(item, index) of topPerformers" :key="index">
          <div class="flex-shrink-0">
            <img :src="`${item.img}`" class="avatar-xs material-shadow" alt="" />
          </div>
          <div class="flex-grow-1 ms-3">
            <h6 class="fs-14 mb-1">{{ item.coinName }}</h6>
            <p class="text-muted mb-0">${{ item.marketCap }} Billions</p>
          </div>
          <div class="flex-shrink-0 text-end">
            <h6 class="fs-14 mb-1">${{ item.price }}</h6>
            <p :class="`text-${item.textColor} fs-12 mb-0`">{{ item.change }} ({{ item.percentage }})</p>
          </div>
        </li>
      </ul>
    </BCardBody>
  </BCard>
</template>
