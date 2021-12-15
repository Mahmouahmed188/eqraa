<template>
  <div class="head">
    <div class="container">
      <div class="link_home">
        <div class="home">
          <router-link class="home-link" to="/Home"> {{ home }} > </router-link>
          <router-link class="cors-link" to="/AvailableCourses">
            {{ courses }}
          </router-link>
        </div>
        <div class="cours"><h1>الدورات المتاحة</h1></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navHeader",
  data() {
    return {
      home: "الرئيسية",
      courses: "الدورات",
    };
  },
};
</script>

<style lang="scss">
.head {
  padding: 10px;
  background-color: #fff;
  .link_home {
    display: flex;
    flex-direction: column;
    .home {
      color: rgb(65, 65, 65);
    }
  }
}
</style>
