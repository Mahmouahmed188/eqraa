<template>
  <div>
    <cours-header />
    <page-header />
    <app-footer />
  </div>
</template>
<script>
import coursHeader from "@/components/global/header/coursHeader.vue";
import PageHeader from "@/views/arabic/PageHeader.vue";
import AppFooter from "@/components/global/AppFooter.vue";

export default {
  name: "arabic",
  components: {
    coursHeader,
    PageHeader,
    AppFooter,
  },
};
</script>
