<template>
  <div class="courses">
    <div class="container">
      <div
        class="component"
        style="display: flex; justify-content: space-between"
      >
        <div class="elshi" v-for="cors in data" :key="cors.id">
          <div class="plan">
            <div
              class="head-1"
              v-bind:style="{ 'background-image': 'url(' + cors.cover + ')' }"
            >
              <p class="padding">
                {{ cors.name }}
              </p>
              <p class="padding">{{ cors.language }}</p>
              <img src="" alt="" class="daa" />
              <div class="action" :style="`background-color:${cors.color}`">
                {{ cors.action }}
              </div>
            </div>
            <div class="body-plan">
              <router-link class="non" to="/arabic">
                <h3 class="color-link">{{ cors.nol }}</h3>
              </router-link>
              <div class="star">
                <a href="#" class="fas fa-star s1"></a>
                <a href="#" class="fas fa-star s2"></a>
                <a href="#" class="fas fa-star s3"></a>
                <a href="#" class="fas fa-star s4"></a>
                <a href="#" class="fas fa-star s5"></a>
              </div>
            </div>
            <div class="foot">
              <div class="fr">{{ cors.views }}</div>
              <div class="fl">{{ cors.time }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="read_more">عرض المزيد</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id", "name", "language", "nol", "color", "data"],
  name: "courseContent",
};
</script>
<style lang="scss">
.courses {
  background-color: rgb(237, 237, 237);
  padding-top: 20px;
  padding-bottom: 40px;
  .component {
    display: flex;
    flex-wrap: wrap;
    margin-left: -20px;
    .elshi {
      padding-left: 20px;
      width: 33.3333333333%;
      padding-bottom: 40px;
      @media (max-width: 767px) {
        width: 100%;
        padding-bottom: 0px;
      }
      .plan {
        background-color: #fff;
        border: solid 1px #ccc;
        border-radius: 5px;
        flex-direction: column;
        @media (max-width: 767px) {
          width: 81%;
          margin: 20px auto;
        }
        %head {
          background-size: cover;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          background-color: #305880;
          height: 200px;
          color: #fff;
          overflow: auto;
        }
        .head-1 {
          height: 210px;
          @extend %head;
          .action {
            position: relative;
            top: 60px;
            background-color: red;
            width: 60px;
            text-align: center;
            padding: 7px;
            margin-right: 10px;
            border-radius: 3px;
          }
          .padding {
            padding: 2px 10px 3px 0px;
            background-color: #5555556e;
            box-shadow: 1px 0px 11px 6px rgba(65, 65, 65, 0.515);
            width: 150px;
            border-radius: 5px;
          }
        }
        .body-plan {
          text-align: center;
          padding: 30px;
          @media (max-width: 767px) {
            padding: 0 10px;
          }
          .non {
            text-decoration: none;
          }
          .star {
            text-align: center;
            direction: rtl;
            a {
              font-size: 20px;
              color: rgba(143, 126, 0, 0.309);
              text-decoration: none;
              transition: all 0.5s;
              margin: 4px;
              &:hover {
                color: gold;
                transform: scale(1.3);
              }
            }
            .s1:hover ~ a {
              color: gold;
            }
            .s2:hover ~ a {
              color: gold;
            }
            .s3:hover ~ a {
              color: gold;
            }
            .s4:hover ~ a {
              color: gold;
            }
            .s5:hover ~ a {
              color: gold;
            }
          }
          .color-link {
            color: #1d1d1d;
          }
        }
        .foot {
          border-top: solid 1px #ccc;
          padding: 15px;
          overflow: auto;
          @media (max-width: 767px) {
            padding: 5px 10px;
          }
          .fr {
            float: right;
          }
          .fl {
            float: left;
          }
        }
      }
    }
  }
  .read_more {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
  }
}
</style>
