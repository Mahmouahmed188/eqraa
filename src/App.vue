<template>
  <div class="home">
    <nav-header msg="Welcome to Your Vue.js App" />
    <land-header msg="Welcome to Your Vue.js App" />
    <br />
    <viduoHeader msg="Welcome to Your Vue.js App" />
    <bodyRead msg="Welcome to Your Vue.js App" />
    <div class="clearfix"></div>
    <br />
    <corsess msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import navHeader from "@/components/navHeader.vue";
import landHeader from "@/components/landHeader.vue";
import viduoHeader from "@/components/viduoHeader.vue";
import bodyRead from "@/components/bodyRead.vue";
import corsess from "@/components/corsess.vue";

export default {
  name: "Home",
  components: {
    navHeader,
    landHeader,
    viduoHeader,
    bodyRead,
    corsess,
  },
  created() {
    let htmlEl = document.querySelector("html");
    htmlEl.setAttribute("dir", "rtl");
    htmlEl.setAttribute("lang", "fa");
  },
};
</script>
