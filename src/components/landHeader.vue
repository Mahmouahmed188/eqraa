<template>
  <dev class="land">
    <div class="overlay"></div>
    <div class="container cont">
      <div class="cont-head">
        <h1>ابدا رحلتك التعليميه,تعلم اليوم, لتقود الغد</h1>
      </div>

      <p>
        235 كورس في اللغه العربيه و تحفيظ القران الكريم يتم تدريسها من قبل خبراء
      </p>
      <div class="search">
        <input type="text" class="searchTerm" />

        <div class="link-d">
          <ul class="links-sh">
            <li><a href="#"> كورس د/محمد العريشي </a></li>
            <li><a href="#"> كورس د/محمد علس</a></li>
            <li><a href="#"> كورس د/محمد منصور</a></li>
          </ul>
        </div>
      </div>
      <div class="button-dev">
        <button class="button-head">ابدا الان</button>
      </div>
    </div>
  </dev>
</template>

<script>
export default {
  name: "landHeader",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.land {
  z-index: 0;
  min-height: 100vh;
  background-color: #1726354a;
  // background-image: url(../public/img/box/Web.png);
  background-size: cover;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 86%);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .cont {
    position: absolute;
    top: 10%;
    width: inherit;
    padding: 50px;
    color: white;
    text-align: center;
    .search {
      .searchTerm {
        width: 450px;
        border: none;
        padding: 5px;
        height: 35px;
        border-radius: 5px;
        outline: none;
        color: #9dbfaf;
        @media (max-width: 767px) {
          margin: 20px 0;
          width: 80%;
        }
      }
      .link-d {
        width: 88%;
        display: flex;
        justify-content: center;
        @media (max-width: 767px) {
          display: none;
        }
        .links-sh {
          display: inline-flex;
          list-style: none;
          li {
            padding-left: 10px;
            a {
              font-size: 13px;
              color: #fff;
            }
          }
        }
      }
    }
    .button-dev {
      display: flex;
      justify-content: center;
      .button-head {
        width: 200px;
        background-color: #0acaa1;
        border: solid 1px #0acaa1;
        text-align: center;
        margin: 10px;
        padding: 12px 40px;
        border-radius: 20px;
        color: #383d47;
        cursor: pointer;
        transition: 0.3s;
      }
    }
  }
}
</style>
