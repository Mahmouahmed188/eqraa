<template>
  <div>
    <div class="courses">
      <div class="container">
        <div class="text-li">
          <h1 class="line">تعرف علي الدورات المقدمة</h1>
        </div>
        <div class="slaid">
          <div class="r">
            <h2>احدث الدورات</h2>
          </div>
          <div class="l">
            <button class="button-show">عرض الكل</button>
          </div>
        </div>
        <br />
        <div style="display: flex; justify-content: space-between">
          <div class="elshi">
            <div class="plan" v-for="cors in courses" :key="cors.id">
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
        </div>
      </div>
    </div>
    <div class="courses">
      <div class="container">
        <div class="slaid">
          <div class="r">
            <h2>الاعلا تقيما</h2>
          </div>
          <div class="l">
            <button class="button-show">عرض الكل</button>
          </div>
        </div>
        <br />
        <div class="elshi">
          <div class="plan">
            <div class="head-4">
              <p><span> </span> د/محمد العريشي</p>
              <p><span> </span> اللغه العربيه</p>
              <img src="" alt="" class="daa" />
            </div>
            <div class="body-plan">
              <h3>استخدام الاسماء الخمسه في حالات الاعراب الثلاثه</h3>
              <div class="star">
                <a href="#" class="fas fa-star s1"></a>
                <a href="#" class="fas fa-star s2"></a>
                <a href="#" class="fas fa-star s3"></a>
                <a href="#" class="fas fa-star s4"></a>
                <a href="#" class="fas fa-star s5"></a>
              </div>
            </div>
            <div class="foot">
              <div class="fr">43</div>
              <div class="fl">04:30:00</div>
            </div>
          </div>
          <div class="plan">
            <div class="head-5">
              <p><span> </span> د/محمد العريشي</p>
              <p><span> </span> اللغه العربيه</p>
              <img src="" alt="" class="daa" />
            </div>
            
            <div class="body-plan">
              <h3>استخدام الاسماء الخمسه في حالات الاعراب الثلاثه</h3>
              <div class="star">
            
                <a href="#" class="fas fa-star"></a>
               
                <a href="#" class="fas fa-star s2"></a>
                <a href="#" class="fas fa-star s3"></a>
                <a href="#" class="fas fa-star s4"></a>
                <a href="#" class="fas fa-star s5"></a>
              </div>
            </div>
            <div class="foot">
              <div class="fr">43</div>
              <div class="fl">04:30:00</div>
            </div>
          </div>
          <div class="plan">
            <div class="head-6">
              <p><span> </span> د/محمد العريشي</p>
              <p><span> </span> اللغه العربيه</p>
              <img src="" alt="" class="daa" />
            </div>
            <div class="body-plan">
              <h3>استخدام الاسماء الخمسه في حالات الاعراب الثلاثه</h3>
              <div class="star">
                <a href="#" class="fas fa-star s1"></a>
                <a href="#" class="fas fa-star s2"></a>
                <a href="#" class="fas fa-star s3"></a>
                <a href="#" class="fas fa-star s4"></a>
                <a href="#" class="fas fa-star s5"></a>
              </div>
            </div>
            <div class="foot">
              <div class="fr">43</div>
              <div class="fl">04:30:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dataCors from "../../json/courses.json";

export default {
  props: ["id", "name", "language", "nol"],
  name: "courses",
  data() {
    return {
      courses: dataCors,
    };
  },
};
</script>

<style scoped lang="scss">
.courses {
  background-color: rgb(237, 237, 237);
  padding-top: 20px;
  padding-bottom: 40px;

  .text-li {
    .line {
      text-align: center;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      /* bottom: 4px; */
      transform: translate(-50%);
      height: 2px;
      background-color: #00c510;
      width: 150px;
    }
  }
  .slaid {
    height: 100px;
    padding-top: 33px;

    .r {
      float: right;
    }
    .l {
      float: left;
      .button-show {
        background-color: #68b9ff95;
        border: solid 1px #2697f9aa;
        color: #2697f9;
        text-align: center;
        margin: 10px;
        padding: 12px 40px;
        border-radius: 20px;
        color: #383d47;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          color: #2697f9;
          border: solid 1px #2697f9;
          background-color: rgba(0, 0, 0, 0);
        }
      }
    }
  }
  .elshi {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    @media (max-width: 767px) {
      flex-wrap: wrap;
    }
    .plan {
      width: 30%;
      background-color: #fff;
      border: solid 1px #ccc;
      border-radius: 5px;
      display: inline-flex;
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
      }
      .head-1 {
        background-image: url(../../../public/assets/img/images.jpeg);
        @extend %head;
      }
      .head-2 {
        background-image: url(../../../public/assets/img/images1.jpeg);
        @extend %head;
      }
      .head-3 {
        background-image: url(../../../public/assets/img/images3.jpeg);
        @extend %head;
      }
      .head-4 {
        background-image: url(../../../public/assets/img/images5.jpeg);
        @extend %head;
      }
      .head-5 {
        background-image: url(../../../public/assets/img/images2.jpeg);
        @extend %head;
      }
      .head-6 {
        background-image: url(../../../public/assets/img/images1.jpeg);
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
</style>
