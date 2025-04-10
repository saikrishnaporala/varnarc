<script>
import { Head, Link } from '@inertiajs/vue3';
import Layout from "@/Layouts/main.vue";
import PageHeader from "@/Components/page-header.vue";

import { rankinglist } from "@/common/data";
import Lottie from "@/Components/widgets/lottie.vue";
import animationData from "@/Components/widgets/msoeawqm.json";

export default {
    data() {
        return {
            page: 1,
            perPage: 10,
            pages: [],
            searchQuery: null,
            rankinglist: rankinglist,
            defaultOptions: {
                animationData: animationData
            },
        };
    },
    computed: {
        displayedPosts() {
            return this.paginate(this.rankinglist);
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return (
                        data.collection.toLowerCase().includes(search)
                    );
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    watch: {
        posts() {
            this.setPages();
        },
    },
    created() {
        this.setPages();
    },
    components: {
        Layout,
        PageHeader,
        lottie: Lottie,
        Head, Link
    },
    methods: {
        setPages() {
            let numberOfPages = Math.ceil(this.rankinglist.length / this.perPage);
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(rankinglist) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return rankinglist.slice(from, to);
        },
        onSort(column) {
            this.direction = this.direction === 'asc' ? 'desc' : 'asc';
            const sortedArray = [...this.contactsList];
            sortedArray.sort((a, b) => {
                const res = a[column] < b[column] ? -1 : a[column] > b[column] ? 1 : 0;
                return this.direction === 'asc' ? res : -res;
            });
            this.contactsList = sortedArray;
        },

    },
    mounted() {

    },
};
</script>

<template>
    <Layout>

        <Head title="Ranking" />
        <PageHeader title="Ranking" pageTitle="NFT Marketplace" />
        <BRow>
            <BCol lg="12">
                <BCard no-body id="contactList">
                    <BCardHeader>
                        <div class="d-flex align-items center">
                            <h5 class="mb-0 flex-grow-1">The top NFTs ranking on Velzon</h5>
                            <p class="text-muted mb-0">Updated: 28 April, 2022 08:05:00</p>
                        </div>
                    </BCardHeader>
                    <BCardBody>
                        <BRow class="justify-content-between g-3">
                            <BCol xxl="3" sm="6">
                                <div class="search-box">
                                    <input type="text" class="form-control search" placeholder="Search for ..." v-model="searchQuery">
                                    <i class="ri-search-line search-icon"></i>
                                </div>
                            </BCol>
                            <BCol xxl="2" sm="4">
                                <div>
                                    <select class="form-control" data-choices data-choices-search-false name="choices-single-default" id="idStatus">
                                        <option value="All Time" selected>All Time</option>
                                        <option value="1 Day">1 Day</option>
                                        <option value="7 Days">7 Days</option>
                                        <option value="15 Days">15 Days</option>
                                        <option value="1 Month">1 Month</option>
                                        <option value="6 Month">6 Month</option>
                                    </select>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                    <BCardBody>
                        <div class="table-responsive table-card">
                            <table class="table align-middle table-nowrap table-hover" id="customerTable">
                                <thead class="table-light text-muted">
                                    <tr>
                                        <th class="sort" data-sort="ranking" scope="col" style="width: 98px;" @click="onSort('ranking')">Ranking
                                        </th>
                                        <th class="sort" data-sort="collection" scope="col" @click="onSort('collection')">
                                            Collection</th>
                                        <th class="sort" data-sort="volume_price" scope="col" @click="onSort('volume_price')">Volume (USD)</th>
                                        <th class="sort" data-sort="24h" scope="col" @click="onSort('24h')">24h%</th>
                                        <th class="sort" data-sort="7d" scope="col" @click="onSort('7d')">7d%</th>
                                        <th class="sort" data-sort="item" scope="col" @click="onSort('item')">Item</th>
                                        <th class="sort" data-sort="floor-price" scope="col" @click="onSort('floor-price')">
                                            Floor Price</th>
                                    </tr>
                                </thead>
                                <tbody class="list form-check-all">
                                    <tr v-for="(data, index) of resultQuery" :key="index">
                                        <td class="ranking " :class="data.ranking <= 3 && 'text-info fw-semibold'">
                                            #{{ data.ranking }}
                                        </td>
                                        <td class="collection">
                                            <div class="d-flex align-items-center">
                                                <img :src="data.img" alt="" class="avatar-xs rounded-circle object-fit-cover me-2">
                                                <Link href="/apps/nft-item-detail" class="text-body"> {{ data.collection }}</Link>
                                            </div>
                                        </td>
                                        <td class="volume_price">{{ data.volume_price }}</td>
                                        <td>
                                            <h6 class=" mb-1 24h " :class="data.hours > 0 ? 'text-success' : 'text-danger'">
                                                {{ data.hours }} ETH</h6>
                                        </td>
                                        <td>
                                            <h6 class="mb-1 7d " :class="data.day > 0 ? 'text-success' : 'text-danger'"> {{
                                                data.day }} ETH</h6>
                                        </td>
                                        <td class="item">{{ data.item }}</td>
                                        <td class="floor-price">{{ data.floor_price }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="noresult" v-if="resultQuery.length < 1">
                                <div class="text-center">
                                    <lottie class="avatar-xl" colors="primary:#121331,secondary:#08a88a" :options="defaultOptions" :height="75" :width="75" />
                                    <h5 class="mt-2">Sorry! No Result Found</h5>
                                    <p class="text-muted mb-0">We've searched more than 150+ transactions We did not
                                        find any transactions for you search.</p>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex justify-content-end mt-3" v-if="resultQuery.length >= 1">
                            <div class="pagination-wrap hstack gap-2">
                                <BLink class="page-item pagination-prev" href="#" :disabled="page <= 1" @click="page--">
                                    Previous
                                </BLink>
                                <ul class="pagination listjs-pagination mb-0">
                                    <li :class="{
                                        active: pageNumber == page,
                                        disabled: pageNumber == '...',
                                    }" v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                                        <BLink class="page" href="#">{{ pageNumber }}</BLink>
                                    </li>
                                </ul>
                                <Link class="page-item pagination-next" href="#" :disabled="page >= pages.length" @click="page++">
                                Next
                                </Link>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>