<script>
import avatar1 from "@assets/images/users/avatar-1.jpg";
import avatar2 from "@assets/images/users/avatar-2.jpg";
import avatar7 from "@assets/images/users/avatar-7.jpg";
import avatar4 from "@assets/images/users/avatar-4.jpg";

export default {
  setup() {
    return {
      closingDeals: [
        {
          id: 1,
          dealName: "Acme Inc Install",
          img: avatar1,
          salesRep: "Donald Risher",
          amount: "96",
          closeDate: "Today",
        },
        {
          id: 2,
          dealName: "Save lots Stores",
          img: avatar2,
          salesRep: "Jansh Brown",
          amount: "55.7",
          closeDate: "30 Dec 2021",
        },
        {
          id: 3,
          dealName: "William PVT",
          img: avatar7,
          salesRep: "Ayaan Hudda",
          amount: "102",
          closeDate: "25 Nov 2021",
        },
        {
          id: 4,
          dealName: "Raitech Soft",
          img: avatar4,
          salesRep: "Julia William",
          amount: "89.5",
          closeDate: "20 Sep 2021",
        },
        {
          id: 5,
          dealName: "Absternet LLC",
          img: avatar4,
          salesRep: "Vitoria Rodrigues",
          amount: "89.5",
          closeDate: "20 Sep 2021",
        },
      ],
    };
  },
};
</script>

<template>
  <BCard no-body class="card-height-100">
    <BCardHeader class="align-items-center d-flex">
      <BCardTitle class="mb-0 flex-grow-1">Closing Deals</BCardTitle>
      <div class="flex-shrink-0">
        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
          <option selected="">Closed Deals</option>
          <option value="1">Active Deals</option>
          <option value="2">Paused Deals</option>
          <option value="3">Canceled Deals</option>
        </select>
      </div>
    </BCardHeader>

    <BCardBody>
      <div class="table-responsive">
        <table class="table table-bordered table-nowrap align-middle mb-0">
          <thead>
            <tr>
              <th scope="col" style="width: 30%">Deal Name</th>
              <th scope="col" style="width: 30%">Sales Rep</th>
              <th scope="col" style="width: 20%">Amount</th>
              <th scope="col" style="width: 20%">Close Date</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(item, index) of closingDeals" :key="index">
              <td>{{ item.dealName }}</td>
              <td>
                <img :src="item.img" alt="" class="avatar-xs rounded-circle me-2 material-shadow" />
                <a href="#javascript: void(0);" class="text-body fw-medium"> {{ item.salesRep }}</a>
              </td>
              <td>${{ item.amount }}k</td>
              <td>{{ item.closeDate }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </BCardBody>
  </BCard>
</template>
