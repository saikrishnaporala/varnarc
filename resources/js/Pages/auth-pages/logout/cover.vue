<script>
import { Link, Head } from '@inertiajs/vue3';

import animationData from "@/Components/widgets/hzomhqxz.json";
import Lottie from "@/Components/widgets/lottie.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
    data() {
        return {
            defaultOptions: { animationData: animationData },
            Autoplay: Autoplay, Pagination: Pagination, Navigation: Navigation,
            pagination: {
                clickable: true,
                el: '.swiper-pagination',
                renderBullet: function (index, className) {
                    return '<span class=' + className + '>' + (index + 1) + '</span>';
                },
            },
        };
    },
    components: {
        lottie: Lottie,
        Swiper,
        SwiperSlide,
        Link, Head
    },
};
</script>

<template>
    <Head title="Logout" />
    <div class="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div class="bg-overlay"></div>
        <div class="auth-page-content overflow-hidden pt-lg-5">
            <BContainer>
                <BRow>
                    <BCol lg="12">
                        <BCard no-body class="overflow-hidden galaxy-border-none card-bg-fill">
                            <BRow class="justify-content-center g-0">
                                <BCol lg="6">
                                    <div class="p-lg-5 p-4 auth-one-bg h-100">
                                        <div class="bg-overlay"></div>
                                        <div class="position-relative h-100 d-flex flex-column">
                                            <div class="mb-4">
                                                <Link href="/" class="d-block">
                                                    <img src="@assets/images/logo-light.png" alt="" height="18">
                                                </Link>
                                            </div>
                                            <div class="mt-auto">
                                                <div class="mb-3">
                                                    <i class="ri-double-quotes-l display-4 text-success"></i>
                                                </div>

                                                <div id="qoutescarouselIndicators" class="carousel slide"
                                                    data-bs-ride="carousel">
                                                    <Swiper class=" text-center text-white-50 pb-5"
                                                        :autoplay="{ delay: 3000, disableOnInteraction: false }"
                                                        :loop="true" :modules="[Autoplay, Navigation, Pagination]"
                                                        :pagination="{ clickable: true, el: '.swiper-pagination' }">
                                                        <swiper-slide>
                                                            <div class="active">
                                                                <p class="fs-15 fst-italic">" Great! Clean code, clean
                                                                    design, easy for customization. Thanks very much! "</p>
                                                            </div>
                                                        </swiper-slide>
                                                        <swiper-slide>
                                                            <div>
                                                                <p class="fs-15 fst-italic">" The theme is really great with
                                                                    an amazing customer support."</p>
                                                            </div>
                                                        </swiper-slide>
                                                        <swiper-slide>
                                                            <div>
                                                                <p class="fs-15 fst-italic">" Great! Clean code, clean
                                                                    design, easy for customization. Thanks very much! "</p>
                                                            </div>
                                                        </swiper-slide>
                                                        <div class="swiper-pagination"></div>
                                                    </Swiper>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </BCol>

                                <BCol lg="6">
                                    <div class="p-lg-5 p-4 text-center">
                                        <lottie colors="primary:#405189,secondary:#08a88a" :options="defaultOptions"
                                            :height="180" :width="180" />

                                        <div class="mt-4 pt-2">
                                            <h5>You are Logged Out</h5>
                                            <p class="text-muted">Thank you for using <span
                                                    class="fw-semibold">velzon</span> admin template</p>
                                            <div class="mt-4">
                                                <Link href="/auth/signin-basic" class="btn btn-success w-100">Sign
                                                    In</Link>
                                            </div>
                                        </div>
                                    </div>
                                </BCol>
                            </BRow>
                        </BCard>
                    </BCol>

                </BRow>
            </BContainer>
        </div>

        <footer class="footer galaxy-border-none">
            <BContainer>
                <BRow>
                    <BCol lg="12">
                        <div class="text-center">
                            <p class="mb-0">&copy; {{ new Date().getFullYear() }} Velzon. Crafted with <i
                                    class="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                        </div>
                    </BCol>
                </BRow>
            </BContainer>
        </footer>
    </div>
</template>