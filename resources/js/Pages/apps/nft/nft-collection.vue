<script>
import { Head } from '@inertiajs/vue3';
import Layout from "@/Layouts/main.vue";
import PageHeader from "@/Components/page-header.vue";

export default {
    components: {
        Layout,
        PageHeader,
        Head
    },
};
</script>

<template>
    <Layout>
        <Head title="Collections" />
        <PageHeader title="Collections" pageTitle="NFT Marketplace" />
        <BRow class="g-4 mb-3 align-items-center">
            <BCol sm="auto">
                <div>
                    <h5 class="mb-0">Top Collections</h5>
                </div>
            </BCol>
            <BCol sm>
                <div class="d-flex justify-content-sm-end gap-2">
                    <div class="search-box ms-2">
                        <input type="text" class="form-control" placeholder="Search...">
                        <i class="ri-search-line search-icon"></i>
                    </div>
                    <div class="w-md">
                        <select class="form-control w-md" data-choices data-choices-search-false>
                            <option value="All">All</option>
                            <option value="Today" selected>Today</option>
                            <option value="Yesterday">Yesterday</option>
                            <option value="Last 7 Days">Last 7 Days</option>
                            <option value="Last 30 Days">Last 30 Days</option>
                            <option value="This Month">This Month</option>
                            <option value="Last Year">Last Year</option>
                        </select>
                    </div>
                </div>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="3" md="4" sm="6">
                <BCard no-body>
                    <BCardBody>
                        <BRow class="g-1 mb-3">
                            <BCol cols="6">
                                <img src="@assets/images/nft/img-06.jpg" alt="" class="img-fluid rounded">
                                <img src="https://img.themesbrand.com/velzon/images/img-2.gif" alt=""
                                    class="img-fluid rounded mt-1">
                            </BCol>
                            <BCol cols="6">
                                <img src="https://img.themesbrand.com/velzon/images/img-5.gif" alt=""
                                    class="img-fluid rounded mb-1">
                                <img src="@assets/images/nft/img-03.jpg" alt="" class="img-fluid rounded">
                            </BCol>
                        </BRow>
                        <BLink href="#!" class="float-end"> View All <i class="ri-arrow-right-line align-bottom"></i>
                        </BLink>
                        <h5 class="mb-0 fs-16">
                            <BLink href="#!">Artwork <BBadge variant="success-subtle" class="bg-success-subtle text-success">206</BBadge></BLink>
                        </h5>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="3" md="4" sm="6">
                <BCard no-body>
                    <BCardBody>
                        <BRow class="g-1 mb-3">
                            <BCol cols="6">
                                <img src="@assets/images/nft/img-05.jpg" alt="" class="img-fluid rounded">
                                <img src="https://img.themesbrand.com/velzon/images/img-1.gif" alt=""
                                    class="img-fluid rounded mt-1">
                            </BCol>
                            <BCol cols="6">
                                <img src="https://img.themesbrand.com/velzon/images/img-4.gif" alt=""
                                    class="img-fluid rounded mb-1">
                                <img src="@assets/images/nft/img-04.jpg" alt="" class="img-fluid rounded">
                            </BCol>
                        </BRow>
                        <BLink href="#!" class="float-end"> View All <i class="ri-arrow-right-line align-bottom"></i>
                        </BLink>
                        <h5 class="mb-0 fs-16">
                            <BLink href="#!">Crypto Card <BBadge variant="success-subtle" class="bg-success-subtle text-success">743</BBadge></BLink>
                        </h5>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="3" md="4" sm="6">
                <BCard no-body>
                    <BCardBody>
                        <BRow class="g-1 mb-3">
                            <BCol cols="6">
                                <img src="@assets/images/nft/img-02.jpg" alt="" class="img-fluid rounded">
                                <img src="https://img.themesbrand.com/velzon/images/img-3.gif" alt=""
                                    class="img-fluid rounded mt-1">
                            </BCol>
                            <BCol cols="6">
                                <img src="https://img.themesbrand.com/velzon/images/img-1.gif" alt=""
                                    class="img-fluid rounded mb-1">
                                <img src="@assets/images/nft/img-01.jpg" alt="" class="img-fluid rounded">
                            </BCol>
                        </BRow>
                        <BLink href="#!" class="float-end"> View All <i class="ri-arrow-right-line align-bottom"></i>
                        </BLink>
                        <h5 class="mb-0 fs-16">
                            <BLink href="#!">Music <BBadge variant="success-subtle" class="bg-success-subtle text-success">679</BBadge></BLink>
                        </h5>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="3" md="4" sm="6">
                <BCard no-body>
                    <BCardBody>
                        <BRow class="g-1 mb-3">
                            <BCol cols="6">
                                <img src="@assets/images/nft/img-03.jpg" alt="" class="img-fluid rounded">
                                <img src="https://img.themesbrand.com/velzon/images/img-5.gif" alt=""
                                    class="img-fluid rounded mt-1">
                            </BCol>
                            <BCol cols="6">
                                <img src="https://img.themesbrand.com/velzon/images/img-2.gif" alt=""
                                    class="img-fluid rounded mb-1">
                                <img src="@assets/images/nft/img-05.jpg" alt="" class="img-fluid rounded">
                            </BCol>
                        </BRow>
                        <BLink href="#!" class="float-end"> View All <i class="ri-arrow-right-line align-bottom"></i>
                        </BLink>
                        <h5 class="mb-0 fs-16">
                            <BLink href="#!">Games <BBadge variant="success-subtle" class="bg-success-subtle text-success">341</BBadge></BLink>
                        </h5>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="3" md="4" sm="6">
                <BCard no-body>
                    <BCardBody>
                        <BRow class="g-1 mb-3">
                            <BCol cols="6">
                                <img src="@assets/images/nft/img-02.jpg" alt="" class="img-fluid rounded">
                                <img src="https://img.themesbrand.com/velzon/images/img-3.gif" alt=""
                                    class="img-fluid rounded mt-1">
                            </BCol>
                            <BCol cols="6">
                                <img src="https://img.themesbrand.com/velzon/images/img-1.gif" alt=""
                                    class="img-fluid rounded mb-1">
                                <img src="@assets/images/nft/img-01.jpg" alt="" class="img-fluid rounded">
                            </BCol>
                        </BRow>
                        <BLink href="#!" class="float-end"> View All <i class="ri-arrow-right-line align-bottom"></i>
                        </BLink>
                        <h5 class="mb-0 fs-16">
                            <BLink href="#!">Photography <BBadge variant="success-subtle" class="bg-success-subtle text-success">1452</BBadge></BLink>
                        </h5>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="3" md="4" sm="6">
                <BCard no-body>
                    <BCardBody>
                        <BRow class="g-1 mb-3">
                            <BCol cols="6">
                                <img src="@assets/images/nft/img-05.jpg" alt="" class="img-fluid rounded">
                                <img src="https://img.themesbrand.com/velzon/images/img-1.gif" alt=""
                                    class="img-fluid rounded mt-1">
                            </BCol>
                            <BCol cols="6">
                                <img src="https://img.themesbrand.com/velzon/images/img-4.gif" alt=""
                                    class="img-fluid rounded mb-1">
                                <img src="@assets/images/nft/img-04.jpg" alt="" class="img-fluid rounded">
                            </BCol>
                        </BRow>
                        <BLink href="#!" class="float-end"> View All <i class="ri-arrow-right-line align-bottom"></i>
                        </BLink>
                        <h5 class="mb-0 fs-16">
                            <BLink href="#!">3d Style <BBadge variant="success-subtle" class="bg-success-subtle text-success">4781</BBadge></BLink>
                        </h5>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="3" md="4" sm="6">
                <BCard no-body>
                    <BCardBody>
                        <BRow class="g-1 mb-3">
                            <BCol cols="6">
                                <img src="@assets/images/nft/img-06.jpg" alt="" class="img-fluid rounded">
                                <img src="https://img.themesbrand.com/velzon/images/img-2.gif" alt=""
                                    class="img-fluid rounded mt-1">
                            </BCol>
                            <BCol cols="6">
                                <img src="https://img.themesbrand.com/velzon/images/img-5.gif" alt=""
                                    class="img-fluid rounded mb-1">
                                <img src="@assets/images/nft/img-03.jpg" alt="" class="img-fluid rounded">
                            </BCol>
                        </BRow>
                        <BLink href="#!" class="float-end"> View All <i class="ri-arrow-right-line align-bottom"></i>
                        </BLink>
                        <h5 class="mb-0 fs-16">
                            <BLink href="#!">Collectibles <BBadge variant="success-subtle" class="bg-success-subtle text-success">3468</BBadge></BLink>
                        </h5>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="3" md="4" sm="6">
                <BCard no-body>
                    <BCardBody>
                        <BRow class="g-1 mb-3">
                            <BCol cols="6">
                                <img src="@assets/images/nft/img-03.jpg" alt="" class="img-fluid rounded">
                                <img src="https://img.themesbrand.com/velzon/images/img-5.gif" alt=""
                                    class="img-fluid rounded mt-1">
                            </BCol>
                            <BCol cols="6">
                                <img src="https://img.themesbrand.com/velzon/images/img-2.gif" alt=""
                                    class="img-fluid rounded mb-1">
                                <img src="@assets/images/nft/img-05.jpg" alt="" class="img-fluid rounded">
                            </BCol>
                        </BRow>
                        <BLink href="#!" class="float-end"> View All <i class="ri-arrow-right-line align-bottom"></i>
                        </BLink>
                        <h5 class="mb-0 fs-16">
                            <BLink href="#!">Videos <BBadge variant="success-subtle" class="bg-success-subtle text-success">1674</BBadge></BLink>
                        </h5>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow class="g-0 text-center text-sm-start align-items-center mb-4">
            <BCol sm="6">
                <div>
                    <p class="mb-sm-0 text-muted">Showing <span class="fw-semibold">1</span> to <span
                            class="fw-semibold">8</span> of <span
                            class="fw-semibold text-decoration-underline">12</span> entries</p>
                </div>
            </BCol>
            <BCol sm="6">
                <ul class="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                    <li class="page-item disabled">
                        <BLink href="#" class="page-link">Previous</BLink>
                    </li>
                    <li class="page-item active">
                        <BLink href="#" class="page-link">1</BLink>
                    </li>
                    <li class="page-item ">
                        <BLink href="#" class="page-link">2</BLink>
                    </li>
                    <li class="page-item">
                        <BLink href="#" class="page-link">3</BLink>
                    </li>
                    <li class="page-item">
                        <BLink href="#" class="page-link">4</BLink>
                    </li>
                    <li class="page-item">
                        <BLink href="#" class="page-link">5</BLink>
                    </li>
                    <li class="page-item">
                        <BLink href="#" class="page-link">Next</BLink>
                    </li>
                </ul>
            </BCol>
        </BRow>
    </Layout>
</template>