<template>
  <div class="courses">
    <div class="container">
      <div
        class="component"
        style="display: flex; justify-content: space-between"
      >
        <div class="elshi" v-for="cors in courses" :key="cors.id">
          <div class="plan">
            <div class="head-1">
              <p>
                {{ cors.name }}
              </p>
              <p>{{ cors.language }}</p>
              <img src="" alt="" class="daa" />
            </div>
            <div class="body-plan">
              <h3>{{ cors.nol }}</h3>
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
        <div class="read_more">عرض المزيد</div>
      </div>
    </div>
  </div>
</template>
<script>
import dataCors from "../../json/courses.json";

export default {
  props: ["id", "name", "language", "nol"],
  name: "courseContent",
  data() {
    return {
      courses: dataCors,
    };
  },
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
    margin-left: -15px;
    .elshi {
      padding-left: 15px;
      width: 33.3333333333%;
      padding-bottom: 13px;
      @media (max-width: 767px) {
        flex-wrap: wrap;
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
          background-image: url(../../../public/assets/img/images.jpeg);
          @extend %head;
        }
        .body-plan {
          text-align: center;
          padding: 30px;
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
        }
        .foot {
          border-top: solid 1px #ccc;
          padding: 15px;
          overflow: auto;
          .fr {
            float: right;
          }
          .fl {
            float: left;
          }
        }
      }
    }
    .read_more {
     
    }
  }
}
</style>
