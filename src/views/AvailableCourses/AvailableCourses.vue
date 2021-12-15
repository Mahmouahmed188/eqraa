<template>
  <div class="header">
    <cours-header />
    <nav-header />
    <filter-course />
    <course-content />
    <app-footer />
  </div>
</template>

<script>
import coursHeader from "@/components/global/coursHeader.vue";
import navHeader from "@/views/AvailableCourses/navHeader.vue";
import filterCourse from "@/views/AvailableCourses/filterCourse.vue";
import courseContent from "@/views/AvailableCourses/courseContent.vue";
import AppFooter from "@/components/global/AppFooter.vue";

export default {
  name: "AvailableCourses",
  components: {
    coursHeader,
    navHeader,
    courseContent,
    AppFooter,
    filterCourse,
  },
};
</script>

CourseContent
<style lang="scss">
.header {
  background-color: #ccc;
}
</style>
