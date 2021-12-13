<template>
  <div class="viduo">
    <img
      class="puss"
      src="../../../../public/assets/img/box/Group4893.png"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "viduoHeader",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.viduo {
  height: 400px;
  width: 600px;
  background-image: url(../../../../public/assets/img/box/Group4945.png);
  background-color: #00285d;
  background-position: 49% 80%;
  margin: 453px auto 0;
  border: solid 4px #fff;
  border-radius: 4px;
  z-index: 1;
  position: relative;
  @media (max-width: 767px) {
    height: 200px;
    width: 320px;
  }

  .puss {
    width: 80px;
    margin-top: 25%;
    margin-right: 41%;
    cursor: pointer;
    @media (max-width: 767px) {
      width: 40px;
    }
  }
}
</style>
