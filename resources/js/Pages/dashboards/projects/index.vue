<script>
import { Head } from '@inertiajs/vue3';
import Layout from "@/Layouts/main.vue";
import PageHeader from "@/Components/page-header.vue";

import Widgets from "./widget.vue";
import Schedules from "./schedule.vue";
import Project from "./projects.vue";
import Task from "./tasks.vue";
import Member from "./members.vue";
import Chat from "./chat.vue";
import Status from "./status.vue";
import ActiveProjects from "./active-projects.vue";

export default {
  components: {
    Layout,
    PageHeader,
    Widgets,
    Schedules,
    Project,
    Task,
    Member,
    Chat,
    ActiveProjects,
    Status,
    Head
  },
};
</script>

<template>
  <Layout>
    <Head title="Projects" />
    <PageHeader title="Projects" pageTitle="Dashboards" />

    <BRow class="project-wrapper">
      <BCol xxl="8">
        <BRow>
          <Widgets />
          <BCol xl="4">
          </BCol>
          <BCol xl="4">
          </BCol>
        </BRow>
        <BRow>
          <BCol xl="12">
            <Project />
          </BCol>
        </BRow>
      </BCol>

      <BCol xxl="4">
        <Schedules />
      </BCol>
    </BRow>

    <BRow>
      <BCol xl="7">
        <ActiveProjects />
      </BCol>
      <BCol xl="5">
        <Task />
      </BCol>
    </BRow>

    <BRow>
      <BCol xxl="4">
        <Member />
      </BCol>
      <BCol xxl="4" lg="6">
        <Chat />
      </BCol>
      <BCol xxl="4" lg="6">
        <Status />
      </BCol>
    </BRow>

  </Layout>
</template>