<script>
import { Link, Head } from '@inertiajs/vue3';
import animationData from "@/Components/widgets/etwtznjn.json";
import Lottie from "@/Components/widgets/lottie.vue";

export default {
    data() {
        return {
            defaultOptions: { animationData: animationData },
        };
    },
    components: {
        lottie: Lottie,
        Link, Head
    }
};
</script>

<template>
    <Head title="404" />
    <div class="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div class="bg-overlay"></div>
        <div class="auth-page-content overflow-hidden pt-lg-5">
            <BContainer>
                <BRow class="justify-content-center">
                    <BCol xl="5">
                        <BCard no-body class="overflow-hidden card-bg-fill galaxy-border-none">
                            <BCardBody class="p-4">
                                <div class="text-center">
                                    <lottie colors="primary:#405189,secondary:#0ab39c" :options="defaultOptions"
                                        style="height:7.5rem;width:7.5rem;" />
                                    <h1 class="text-primary mb-4">Oops !</h1>
                                    <h4 class="text-uppercase">Sorry, Page not Found 😭</h4>
                                    <p class="text-muted mb-4">The page you are looking for not available!</p>
                                    <Link href="/" class="btn btn-success"><i class="mdi mdi-home me-1"></i>Back to
                                        home</Link>
                                </div>
                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>
            </BContainer>
        </div>
    </div>
</template>