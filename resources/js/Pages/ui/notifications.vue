<script>
import { Link, Head } from '@inertiajs/vue3';
import Layout from "@/Layouts/main.vue";
import PageHeader from "@/Components/page-header.vue";
import CardHeader from "@/common/card-header.vue";

export default {
    components: {
        Layout,
        PageHeader,
        CardHeader,
        Link, Head
    }
};
</script>

<template>
    <Layout>
        <Head title="Notifications" />
        <PageHeader title="Notifications" pageTitle="Base UI" />
        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <CardHeader title="Bootstrap Toasts" />

                    <BCardBody>
                        <div class="live-preview">
                            <BRow class="g-3">
                                <BCol xxl="6">
                                    <h5 class="fs-14 mb-3">Default Toast</h5>
                                    <p class="text-muted">
                                        Use
                                        <code>toast</code> class to set a default toast.
                                    </p>
                                    <!-- Basic Toasts Example -->
                                    <div class="toast fade show" role="alert" aria-live="assertive" data-bs-autohide="false"
                                        aria-atomic="true">
                                        <div class="toast-header">
                                            <img src="@assets/images/logo-sm.png" class="rounded me-2" alt="..."
                                                height="20" />
                                            <span class="fw-semibold me-auto">Velzon</span>
                                            <small>06 mins ago</small>
                                            <button type="button" class="btn-close" data-bs-dismiss="toast"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="toast-body">Hello, world! This is a toast message.</div>
                                    </div>

                                    <div class="mt-4">
                                        <h5 class="fs-14">Translucent</h5>
                                        <p class="text-muted">
                                            Toasts are slightly translucent, too, so they
                                            blend over whatever
                                            they might appear over.
                                        </p>
                                        <!-- Toasts Translucent -->
                                        <div class="p-3 bg-light">
                                            <div class="toast fade show" role="alert" aria-live="assertive"
                                                data-bs-autohide="false" aria-atomic="true">
                                                <div class="toast-header">
                                                    <img src="@assets/images/logo-sm.png" class="rounded me-2" alt="..."
                                                        height="20" />
                                                    <span class="fw-semibold me-auto">Velzon</span>
                                                    <small>11 mins ago</small>
                                                    <button type="button" class="btn-close" data-bs-dismiss="toast"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div class="toast-body">Hello, world! This is a toast message.</div>
                                            </div>
                                        </div>
                                    </div>
                                </BCol>

                                <BCol xxl="6">
                                    <div>
                                        <h5 class="fs-14">Stacking</h5>
                                        <p class="text-muted">
                                            When you have multiple toasts, we default to
                                            vertically stacking
                                            them in a readable manner.
                                        </p>

                                        <div class="p-3 bg-light">
                                            <!-- Toasts Stacking -->
                                            <div class="toast fade show" role="alert" aria-live="assertive"
                                                data-bs-autohide="false" aria-atomic="true">
                                                <div class="toast-header">
                                                    <img src="@assets/images/logo-sm.png" class="rounded me-2" alt="..."
                                                        height="20" />
                                                    <span class="fw-semibold me-auto">Velzon</span>
                                                    <small>Just now</small>
                                                    <button type="button" class="btn-close" data-bs-dismiss="toast"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div class="toast-body">See? Just like this.</div>
                                            </div>

                                            <div class="toast fade show" role="alert" aria-live="assertive"
                                                data-bs-autohide="false" aria-atomic="true">
                                                <div class="toast-header">
                                                    <img src="@assets/images/logo-sm.png" class="rounded me-2" alt="..."
                                                        height="20" />
                                                    <span class="fw-semibold me-auto">Velzon</span>
                                                    <small>2 seconds ago</small>
                                                    <button type="button" class="btn-close" data-bs-dismiss="toast"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div class="toast-body">Heads up, toasts will stack automatically</div>
                                            </div>
                                        </div>
                                    </div>
                                </BCol>
                            </BRow>

                            <div class="mt-5">
                                <h5 class="fs-14">Placement</h5>
                                <BRow class="g-3">
                                    <BCol xxl="6">
                                        <div>
                                            <p class="text-muted">
                                                Place toasts with custom CSS as you need them.
                                                The top right
                                                is often used
                                                for notifications, as is the top middle. If you’re only ever
                                                going to show one toast
                                                at a time, put
                                                the positioning styles right on the
                                                <code>.toast</code>.
                                            </p>

                                            <!-- Toasts Placement -->
                                            <div class="bg-light" aria-live="polite" aria-atomic="true"
                                                style="position: relative; min-height: 200px;">
                                                <div class="toast fade show" role="alert" aria-live="assertive"
                                                    aria-atomic="true" data-bs-toggle="toast"
                                                    style="position: absolute; top: 16px; right: 16px;">
                                                    <div class="toast-header">
                                                        <img src="@assets/images/logo-sm.png" class="rounded me-2"
                                                            alt="..." height="20" />
                                                        <span class="fw-semibold me-auto">Velzon</span>
                                                        <small>06 mins ago</small>
                                                        <button type="button" class="btn-close" data-bs-dismiss="toast"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="toast-body">Hello, world! This is a toast message.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </BCol>

                                    <BCol xxl="6">
                                        <div>
                                            <p class="text-muted">
                                                You can also get fancy with flexbox utilities
                                                to align toasts
                                                horizontally
                                                and/or vertically.
                                            </p>

                                            <!-- Flexbox container for aligning the toasts -->
                                            <div aria-live="polite" aria-atomic="true"
                                                class="bg-light d-flex justify-content-center align-items-center"
                                                style="height: 200px;">
                                                <div class="toast fade show" role="alert" aria-live="assertive"
                                                    data-bs-autohide="false" aria-atomic="true">
                                                    <div class="toast-header">
                                                        <img src="@assets/images/logo-sm.png" class="rounded me-2"
                                                            alt="..." height="20" />
                                                        <span class="fw-semibold me-auto">Velzon</span>
                                                        <small>11 mins ago</small>
                                                        <button type="button" class="btn-close" data-bs-dismiss="toast"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="toast-body">Hello, world! This is a toast message.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </BCol>
                                </BRow>
                            </div>
                        </div>

                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Default Toast --&gt; 
&lt;div class=&quot;toast fade show&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot;
    data-bs-autohide=&quot;false&quot; aria-atomic=&quot;true&quot;&gt;
    &lt;div class=&quot;toast-header&quot;&gt;
        &lt;img src=&quot;assets/images/logo-sm.png&quot; class=&quot;rounded me-2&quot;
            alt=&quot;...&quot; height=&quot;20&quot;&gt;
        &lt;span class=&quot;fw-semibold me-auto&quot;&gt;Velzon&lt;/span&gt;
        &lt;small&gt;06 mins ago&lt;/small&gt;
        &lt;button type=&quot;button&quot; class=&quot;btn-close&quot;
            data-bs-dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class=&quot;toast-body&quot;&gt;
        Hello, world! This is a toast message.
    &lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Translucent Toast --&gt; 
&lt;div class=&quot;p-3 bg-light&quot;&gt;
    &lt;div class=&quot;toast fade show&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot;
        data-bs-autohide=&quot;false&quot; aria-atomic=&quot;true&quot;&gt;
        &lt;div class=&quot;toast-header&quot;&gt;
            &lt;img src=&quot;assets/images/logo-sm.png&quot; class=&quot;rounded me-2&quot;
                alt=&quot;...&quot; height=&quot;20&quot;&gt;
            &lt;span class=&quot;fw-semibold me-auto&quot;&gt;Velzon&lt;/span&gt;
            &lt;small&gt;11 mins ago&lt;/small&gt;
            &lt;button type=&quot;button&quot; class=&quot;btn-close&quot;
                data-bs-dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
        &lt;/div&gt;
        &lt;div class=&quot;toast-body&quot;&gt;
            Hello, world! This is a toast message.
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Stacking Toast --&gt; 
&lt;div class=&quot;toast fade show&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot;
    data-bs-autohide=&quot;false&quot; aria-atomic=&quot;true&quot;&gt;
    &lt;div class=&quot;toast-header&quot;&gt;
        &lt;img src=&quot;assets/images/logo-sm.png&quot; class=&quot;rounded me-2&quot;
            alt=&quot;...&quot; height=&quot;20&quot;&gt;
        &lt;span class=&quot;fw-semibold me-auto&quot;&gt;Velzon&lt;/span&gt;
        &lt;small&gt;Just now&lt;/small&gt;
        &lt;button type=&quot;button&quot; class=&quot;btn-close&quot;
            data-bs-dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class=&quot;toast-body&quot;&gt;
        See? Just like this.
    &lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Placement Toast --&gt; 
&lt;div class=&quot;bg-light&quot; aria-live=&quot;polite&quot; aria-atomic=&quot;true&quot;
    style=&quot;position: relative; min-height: 200px;&quot;&gt;
    &lt;div class=&quot;toast fade show&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot;
        aria-atomic=&quot;true&quot; data-bs-toggle=&quot;toast&quot;
        style=&quot;position: absolute; top: 16px; right: 16px;&quot;&gt;
        &lt;div class=&quot;toast-header&quot;&gt;
            &lt;img src=&quot;assets/images/logo-sm.png&quot;
                class=&quot;rounded me-2&quot; alt=&quot;...&quot; height=&quot;20&quot;&gt;
            &lt;span class=&quot;fw-semibold me-auto&quot;&gt;Velzon&lt;/span&gt;
            &lt;small&gt;06 mins ago&lt;/small&gt;
            &lt;button type=&quot;button&quot; class=&quot;btn-close&quot;
                data-bs-dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
        &lt;/div&gt;
        &lt;div class=&quot;toast-body&quot;&gt;
            Hello, world! This is a toast message.
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code>

<code> &lt;!-- Flexbox container for aligning the toasts --&gt;
&lt;div aria-live=&quot;polite&quot; aria-atomic=&quot;true&quot;
    class=&quot;bg-light d-flex justify-content-center align-items-center&quot;
    style=&quot;height: 200px;&quot;&gt;
    &lt;div class=&quot;toast fade show&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot;
        data-bs-autohide=&quot;false&quot; aria-atomic=&quot;true&quot;&gt;
        &lt;div class=&quot;toast-header&quot;&gt;
            &lt;img src=&quot;assets/images/logo-sm.png&quot;
                class=&quot;rounded me-2&quot; alt=&quot;...&quot; height=&quot;20&quot;&gt;
            &lt;span class=&quot;fw-semibold me-auto&quot;&gt;Velzon&lt;/span&gt;
            &lt;small&gt;11 mins ago&lt;/small&gt;
            &lt;button type=&quot;button&quot; class=&quot;btn-close&quot;
                data-bs-dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
        &lt;/div&gt;
        &lt;div class=&quot;toast-body&quot;&gt;
            Hello, world! This is a toast message.
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </BCardBody>
                </BCard> 
            </BCol>
        </BRow>
    </Layout>
</template>