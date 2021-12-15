<template>
  <div id="app">
   
    <router-view />
   
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
 
  },
  created() {
    let htmlEl = document.querySelector("html");
    htmlEl.setAttribute("dir", "rtl");
    htmlEl.setAttribute("lang", "fa");
  },
};
</script>
