<template>
  <div class="filter">
    <div class="container space">
      <input type="text" class="searchTerm" @input="handleInput" />
      <select class="select">
        <option value="all">فئة الدورة</option>
        <option value="الكل ">الكل</option>
        <option value=" الغة العربية">اللغة العربية</option>
      </select>
      <select class="select" @change="handleChange">
        <option value="all">حالة الدورة</option>
        <option value="الكل">الكل</option>
        <option value="انتهت">انتهت</option>
        <option value="لم تبدأ">لم تبدأ</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  name: "filterCourse",
  data() {
    return {
      home: "الرئيسية",
      courses: "الدورات",
    };
  },
  methods: {
    handleChange(e) {
      const selectedValue = e.target.value;

      console.log("selectedValue", selectedValue);

      this.$emit("update", selectedValue);
    },
    handleInput(e) {
      const selectedValue = e.target.value;

      this.$emit("search", selectedValue);
    },
  },
};
</script>

<style lang="scss">
.filter {
  z-index: 1;
  position: sticky;
  top: 72px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 15px;
  border-width: 1px;
  border-style: solid;
  border-color: transparent transparent rgba(172, 172, 172, 0.377) transparent;

  .space {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .searchTerm {
    background-color: #dfdfdf;
    width: 55%;
    border: #ccc 1px solid;
    padding: 5px;
    height: 35px;
    border-radius: 5px;
    outline: none;
    color: #707070;
    height: 40px;
    @media (max-width: 767px) {
      width: 100%;
    }
  }
  .select {
    background-color: #dfdfdf;
    width: 20%;
    border: #ccc 1px solid;
    padding: 5px;
    height: 35px;
    border-radius: 5px;
    outline: none;
    color: #707070;
    height: 40px;
    @media (max-width: 767px) {
      width: 50%;
    }
  }
}
</style>
