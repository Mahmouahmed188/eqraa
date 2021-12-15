<template>
  <div class="home">
    <app-header />
    <land-header />
    <viduoHeader />
    <bodyRead />
    <div class="clearfix"></div>
    <br />
    <courses />
    <icon-color />
    <bloks-cont />
    <app-footer />
  </div>
</template>

<script>
// import navHeader from "@/components/navHeader.vue";
import AppHeader from "@/components/global/AppHeader.vue";
import landHeader from "@/views/home/headerComponents/landHeader.vue";
import viduoHeader from "@/views/home/headerComponents/viduoHeader.vue";
import bodyRead from "@/views/home/bodyRead.vue";
import courses from "@/components/global/courses.vue";
import IconColor from "@/views/home/IconColor.vue";
import BloksCont from "@/views/home/BloksCont.vue";
import AppFooter from "@/components/global/AppFooter.vue";

export default {
  name: "Home",
  components: {
    AppHeader,
    AppFooter,
    landHeader,
    viduoHeader,
    bodyRead,
    courses,
    IconColor,
    BloksCont,
  },
  created() {
    let htmlEl = document.querySelector("html");
    htmlEl.setAttribute("dir", "rtl");
    htmlEl.setAttribute("lang", "fa");
  },
};
</script>
