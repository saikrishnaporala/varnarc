<script>
import { Link, Head } from '@inertiajs/vue3';
import Layout from "@/Layouts/main.vue";
import PageHeader from "@/Components/page-header.vue";

import { ref, watch } from "vue";
import useVuelidate from "@vuelidate/core";

import DropZone from "@/Components/widgets/dropZone.vue";

export default {
  methods: {
    deleteRecord(ele) {
      ele.target.parentElement.parentElement.parentElement.remove();
    },
  },
  setup() {
    let files = ref([]);
    let dropzoneFile = ref("");
    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0];
      files.value.push(dropzoneFile.value);
    };
    const selectedFile = () => {
      dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
      files.value.push(dropzoneFile.value);
    };
    watch(
      () => [...files.value],
      (currentValue) => {
        return currentValue;
      }
    );

    return { dropzoneFile, files, drop, selectedFile, v$: useVuelidate() };
  },
 
  components: {
    Layout,
    PageHeader,
    DropZone,
    Link, Head
  },
};
</script>

<template>
  <Layout>
    <Head title="Form Upload" />
    <PageHeader title="Form Upload" pageTitle="Forms" />
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Dropzone</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <p class="text-muted">
              DropzoneJS is an open source library that provides drag’n’drop
              file uploads with image previews.
            </p>

            <DropZone @drop.prevent="drop" @change="selectedFile" />
            <ul class="list-unstyled mb-0" id="dropzone-preview">
              <div class="border rounded" v-for="(file, index) of files" :key="index">
                <div class="d-flex p-2">
                  <div class="flex-grow-1">
                    <div class="pt-1">
                      <h5 class="fs-14 mb-1" data-dz-name="">
                        {{ file.name }}
                      </h5>
                      <p class="fs-13 text-muted mb-0" data-dz-size="">
                        <strong>{{ file.size / 1024 }}</strong> KB
                      </p>
                      <strong class="error text-danger" data-dz-errormessage=""></strong>
                    </div>
                  </div>
                  <div class="flex-shrink-0 ms-3">
                    <BButton variant="danger" size="sm" data-dz-remove="" @click="deleteRecord">
                      Delete
                    </BButton>
                  </div>
                </div>
              </div>
            </ul>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

  </Layout>
</template>
