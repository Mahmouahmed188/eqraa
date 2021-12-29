<template>
  <div>
    <cours-header />
    <page-header @btn-click="handleClick" />
    <app-footer />
    <popup @btn-click="handleClose" v-if="show" />
  </div>
</template>
<script>
import coursHeader from "@/components/global/header/coursHeader.vue";
import PageHeader from "@/views/arabic/PageHeader.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import Popup from "@/views/popup/popup.vue";

export default {
  name: "arabic",
  components: {
    coursHeader,
    PageHeader,
    AppFooter,
    Popup,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    handleClick() {
      this.show = true;
    },
    handleClose() {
      this.show = false;
    },
  },
};
</script>
