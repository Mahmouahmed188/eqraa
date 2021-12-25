<template>
  <div class="header">
    <cours-header />
    <nav-header />
    <filter-course @update="handleUpdate" @search="handleSearch" />
    <course-content :data="data" />
    <app-footer />
    <!-- <popup /> -->
  </div>
</template>

<script>
import dataCors from "../../json/courseContent.json";

import coursHeader from "@/components/global/header/coursHeader.vue";
import navHeader from "@/views/AvailableCourses/header/navHeader.vue";
import filterCourse from "@/views/AvailableCourses/header/filterCourse.vue";
import courseContent from "@/components/global/courseContent.vue";
import AppFooter from "@/components/global/AppFooter.vue";

export default {
  name: "AvailableCourses",
  components: {
    coursHeader,
    navHeader,
    courseContent,
    AppFooter,
    filterCourse,
    // popup,
  },
  data() {
    return {
      statusFilter: null,
      keyword: "",
    };
  },
  computed: {
    data() {
      if (this.keyword) {
        return dataCors.filter((item) => item.name.includes(this.keyword));
      }

      if (this.statusFilter) {
        return dataCors.filter((item) =>
          item.action.includes(this.statusFilter)
        );
      }

      return dataCors;
    },
  },
  methods: {
    handleUpdate(value) {
      this.statusFilter = value;
    },
    handleSearch(value) {
      this.keyword = value;
    },
  },
};
</script>

CourseContent
<style lang="scss">
.header {
  background-color: #ccc;
}
</style>
