<script>
import simplebar from 'simplebar-vue'

export default {
    data() {
        return {
            chartcolors: {
                colors: ["#f06548"]
            },
            chartOptions: {
                chart: {
                    width: 50,
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
                    width: 2,
                },
                fill: {
                    type: "solid",
                    opacity: 0,
                },
                colors: ["#0ab39c"]
            }
        };
    },
    components: {
        simplebar
    }
};
</script>
<template>
    <BCol xxl="4">
        <BCard no-body>
            <BCardHeader class="align-items-center d-flex">
                <BCardTitle class="mb-0 flex-grow-1">Top Artworks</BCardTitle>
                <div class="flex-shrink-0">
                    <div>
                        <BButton type="button" variant="soft-primary" size="sm" class="material-shadow-none">
                            See All
                        </BButton>
                    </div>
                </div>
            </BCardHeader>
            <BCardBody>
                <div class="table-responsive table-card">
                    <simplebar style="max-height: 408px;">
                        <table class="table table-borderless align-middle">
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src="@assets/images/nft/img-01.jpg" alt=""
                                                class="avatar-sm rounded-circle">
                                            <div class="ms-3">
                                                <BLink href="#!">
                                                    <h6 class="fs-15 mb-1">One shop destination on</h6>
                                                </BLink>
                                                <p class="mb-0 text-muted">13,450 Sales</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <apexchart class="apex-charts" width="80px" height="46" dir="ltr" :series="[{
                                            name: 'Bitcoin',
                                            data: [85, 68, 35, 90, 8, 11, 26, 54]
                                        }]" :options="{ ...chartOptions, ...chartcolors }"></apexchart>
                                    </td>
                                    <td class="text-end">
                                        <BLink href="#!">
                                            <h6 class="fs-15 mb-1">$235,000+</h6>
                                        </BLink>
                                        <p class="mb-0 text-muted">Total USD</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src="@assets/images/nft/img-02.jpg" alt=""
                                                class="avatar-sm rounded-circle">
                                            <div class="ms-3">
                                                <BLink href="#!">
                                                    <h6 class="fs-15 mb-1">Coin Journal is dedicated</h6>
                                                </BLink>
                                                <p class="mb-0 text-muted">11,752 Sales</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <apexchart class="apex-charts" width="80px" height="46" dir="ltr" :series='[{
                                            name: "Litecoin",
                                            data: [25, 50, 41, 87, 12, 36, 9, 54]
                                        }]' :options="{ ...chartOptions, ...chartcolors }"></apexchart>
                                    </td>
                                    <td class="text-end">
                                        <BLink href="#!">
                                            <h6 class="fs-15 mb-1">$632,000+</h6>
                                        </BLink>
                                        <p class="mb-0 text-muted">Total USD</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src="@assets/images/nft/img-03.jpg" alt=""
                                                class="avatar-sm rounded-circle">
                                            <div class="ms-3">
                                                <BLink href="#!">
                                                    <h6 class="fs-15 mb-1">The Bitcoin-holding U.S.</h6>
                                                </BLink>
                                                <p class="mb-0 text-muted">7,526 Sales</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <apexchart class="apex-charts" width="80px" height="46" dir="ltr" :series='[{
                                            name: "Ethereum",
                                            data: [36, 21, 65, 22, 35, 50, 29, 44]
                                        }]' :options="{ ...chartOptions, ...chartcolors }"></apexchart>
                                    </td>
                                    <td class="text-end">
                                        <BLink href="#!">
                                            <h6 class="fs-15 mb-1">$468,000+</h6>
                                        </BLink>
                                        <p class="mb-0 text-muted">Total USD</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src="@assets/images/nft/img-04.jpg" alt=""
                                                class="avatar-sm rounded-circle">
                                            <div class="ms-3">
                                                <BLink href="#!">
                                                    <h6 class="fs-15 mb-1">Cryptocurrency Price Bitcoin</h6>
                                                </BLink>
                                                <p class="mb-0 text-muted">15,521 Sales</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <apexchart class="apex-charts" width="80px" height="46" dir="ltr" :series='[{
                                            name: "Binance",
                                            data: [30, 58, 29, 89, 12, 36, 9, 54]
                                        }]' :options="chartOptions"></apexchart>
                                    </td>
                                    <td class="text-end">
                                        <BLink href="#!">
                                            <h6 class="fs-15 mb-1">$265,000+</h6>
                                        </BLink>
                                        <p class="mb-0 text-muted">Total USD</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src="@assets/images/nft/img-05.jpg" alt=""
                                                class="avatar-sm rounded-circle">
                                            <div class="ms-3">
                                                <BLink href="#!">
                                                    <h6 class="fs-15 mb-1">Dash, Ripple and Litecoin</h6>
                                                </BLink>
                                                <p class="mb-0 text-muted">12,652 Sales</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <apexchart class="apex-charts" width="80px" height="46" dir="ltr" :series='[{
                                            name: "Dash",
                                            data: [24, 68, 39, 86, 29, 42, 11, 58]
                                        }]' :options="chartOptions"></apexchart>
                                    </td>
                                    <td class="text-end">
                                        <BLink href="#!">
                                            <h6 class="fs-15 mb-1">$456,000+</h6>
                                        </BLink>
                                        <p class="mb-0 text-muted">Total USD</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src="@assets/images/nft/img-06.jpg" alt=""
                                                class="avatar-sm rounded-circle">
                                            <div class="ms-3">
                                                <BLink href="#!">
                                                    <h6 class="fs-15 mb-1">The Cat X Takashi</h6>
                                                </BLink>
                                                <p class="mb-0 text-muted">11,745 Sales</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <apexchart class="apex-charts" width="80px" height="46" dir="ltr" :series='[{
                                            name: "Dash",
                                            data: [13, 76, 12, 85, 25, 60, 9, 54]
                                        }]' :options="{ ...chartOptions, ...chartcolors }"></apexchart>
                                    </td>
                                    <td class="text-end">
                                        <BLink href="#!">
                                            <h6 class="fs-15 mb-1">$256,000+</h6>
                                        </BLink>
                                        <p class="mb-0 text-muted">Total USD</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src="@assets/images/nft/img-01.jpg" alt=""
                                                class="avatar-sm rounded-circle">
                                            <div class="ms-3">
                                                <BLink href="#!">
                                                    <h6 class="fs-15 mb-1">Long-tailed Macaque</h6>
                                                </BLink>
                                                <p class="mb-0 text-muted">41,032 Sales</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <apexchart class="apex-charts" width="80px" height="46" dir="ltr" :series='[{
                                            name: "Neo",
                                            data: [9, 66, 41, 89, 12, 36, 25, 54]
                                        }]' :options="chartOptions"></apexchart>
                                    </td>
                                    <td class="text-end">
                                        <BLink href="#!">
                                            <h6 class="fs-15 mb-1">$745,000+</h6>
                                        </BLink>
                                        <p class="mb-0 text-muted">Total USD</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src="https://img.themesbrand.com/velzon/images/img-5.gif" alt=""
                                                class="avatar-sm rounded-circle">
                                            <div class="ms-3">
                                                <BLink href="#!">
                                                    <h6 class="fs-15 mb-1">Evolved Reality</h6>
                                                </BLink>
                                                <p class="mb-0 text-muted">513,794 Sales</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <apexchart class="apex-charts" width="80px" height="46" dir="ltr" :series='[{
                                            name: "Dash",
                                            data: [13, 76, 12, 85, 25, 60, 9, 54]
                                        }]' :options="{ ...chartOptions, ...chartcolors }"></apexchart>
                                    </td>
                                    <td class="text-end">
                                        <BLink href="#!">
                                            <h6 class="fs-15 mb-1">$870,000+</h6>
                                        </BLink>
                                        <p class="mb-0 text-muted">Total USD</p>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </simplebar>
                </div>
            </BCardBody>
        </BCard>
    </BCol>
</template>