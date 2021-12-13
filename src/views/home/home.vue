<template>
  <div class="home">
    <!-- <nav-header /> -->
    <land-header />
    <br />
    <viduoHeader />
    <bodyRead />
    <div class="clearfix"></div>
    <br />
    <courses />
    <icon-color />
    <bloks-cont />
  </div>
</template>

<script>
// import navHeader from "@/components/navHeader.vue";
import landHeader from "@/views/home/headerComponents/landHeader.vue";
import viduoHeader from "@/views/home/headerComponents/viduoHeader.vue";
import bodyRead from "@/views/home/bodyRead.vue";
import courses from "@/components/global/courses.vue";
import IconColor from "@/views/home/IconColor.vue";
import BloksCont from "@/views/home/BloksCont.vue";

export default {
  name: "Home",
  components: {
    // navHeader,
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
