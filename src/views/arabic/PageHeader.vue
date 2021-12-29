<template>
  <div class="all-page">
    <div class="fullHeader">
      <div class="container clear">
        <div class="PageHeader">
          <div class="home">
            <router-link class="home-link" to="/"> {{ home }} </router-link>
            >
            <router-link class="cors-link" to="/AvailableCourses">
              {{ courses }}
            </router-link>
            >
            <router-link class="cors-link" to="/arabic">
              {{ PageHeader }}
            </router-link>
          </div>
          <div class="ri">
            <h1>دورة تعلم اساسيات القواعد النحوية المرحلة الاولي من 2022</h1>
            <h3>تعليم اهم قواعد النحو من الصفر الي اتقان الاعؤاب بكل سهولة</h3>
            <div class="navbar">
              <img
                class="profile"
                src="../../../public/assets/img/box/Group4934.png"
              />
              <div class="lang">
                {{ name }}
              </div>
            </div>
          </div>
        </div>
        <div class="button-complete">
          <router-link class="home-link" to="/popup">
            <button class="complete" @click.prevent="handleClick">
              اكمل الدورة
            </button>
          </router-link>
          <div class="blcr">
            <button class="CourseLessons">دروس الدورة</button>
            <button class="share">مشاركه الدورة</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="full-cont">
        <div class="flex">
          <h3>ماذا ستتعلم</h3>
          <div class="row-r">
            <h3>متطلبات الدورة</h3>
            <div class="learn">
              <ul class="information">
                <li>
                  لا توجد متطلبات قبل المادة، ولكن توزع على المتدربين خطة
                  الموضوعات للدورة ككل
                </li>
                <li>
                  هناك متطلبات عقب كل محاضرة تتمثل في الإجابة عن الأسئلة المرفقة
                  مع مرفقات المادة
                </li>
                <li>
                  هناك امتحان في آخر الدورة يتضمن كل المهارات التدريسية التي
                  تضمنتها الدورة
                </li>
                <li>يتم اعطاء الطلاب واجباته بعد كل درس</li>
              </ul>
            </div>
            <div class="exp">
              <h3>وصف الدورة</h3>
              <p class="text">
                يحتاج الكثير من متعلمي اللغة العربية إلي تعلم النحو والإعراب
                بسهولة وسوف يتم ذلك من خلال مجموعة رائعة من الدروس المترابطة
                وطريقة الشرح التي تستطيع عمل جدول يومي لك لمراجعة النحو العربي
                اللغة العربية هي أكثر اللغات السامية تحدثا وإحدى أكثر اللغات
                انتشارا في العالم، يتحدثها أكثر من 467 مليون نسمة. ويتوزع
                متحدثوها في الوطن العربي، بالإضافة إلى العديد من المناطق الأخرى
                المجاورة كالأهواز وتركيا وتشاد ومالي والسنغال وإرتيريا وإثيوبيا
                وجنوب السودان وإيران، وبذلك فهي تحتل المركز الرابع أو الخامس >من
                حيث اللغات الأكثر انتشارا في العالم، واللغة الرابعة من حيث عدد
                المستخدمين على الإنترنت. اللغة العربية ذات أهمية قصوى لدى
                المسلمين، فهي عندهم لغة مقدسة إذ أنها لغة القرآن، وهي لغة الصلاة
                وأساسية في القيام بالعديد من العبادات والشعائر الإسلامية العربية
                هي أيضا لغة شعائرية رئيسية لدى عدد من الكنائس المسيحية في الوطن
                العربي، كما كتبت بها كثير من أهم الأعمال الدينية والفكرية
                اليهودية في العصور الوسطى ارتفعت مكانة اللغة العربية إثر انتشار
                الإسلام بين الدول إذ أصبحت لغة السياسة والعلم والأدب لقرون
                طويلة. في الأراضي التي حكمها المسلمون.
              </p>
            </div>
            <div class="exp">
              <h3>ماذا ستتعلم من هذة الدورة</h3>
              <ol class="more-text">
                <li>
                  liهذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد
                </li>
                <li>
                  هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص
                  أو
                </li>
                <li>العديد من النصوص الأخرى إضافة إلى زيادة عدد ا</li>
                <li>
                  liهذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد
                </li>
              </ol>
            </div>
            <h3 class="show-more">عرض الزيد</h3>
          </div>
          <h3>مواعيد الدورة</h3>
          <div class="row-r time">
            <div class="exp">
              <div class="header-time">
                <div>اليوم</div>
                <div class="date-sw">8 يناير 2021 ></div>
                <div>عرض الكل</div>
              </div>
              <div class="date">
                <div class="week">
                  <div class="day"><span>السبت</span> <span>5 يناير</span></div>
                  <div class="hour">5:30 م</div>
                  <div class="hour">5:30 م</div>
                </div>
                <div class="week">
                  <div class="day"><span>السبت</span> <span>5 يناير</span></div>
                  <div class="hour">5:30 م</div>
                  <div class="hour">5:30 م</div>
                </div>
                <div class="week">
                  <div class="day"><span>السبت</span> <span>5 يناير</span></div>
                  <div class="hour">5:30 م</div>
                  <div class="hour">5:30 م</div>
                </div>
                <div class="week">
                  <div class="day"><span>السبت</span> <span>5 يناير</span></div>
                  <div class="hour dangr">5:30 م</div>
                  <div class="hour sucs">5:30 م</div>
                </div>
                <div class="week">
                  <div class="day"><span>السبت</span> <span>5 يناير</span></div>
                  <div class="hour dangrs">5:30 م</div>
                  <div class="hour suc">5:30 م</div>
                </div>
                <div class="week">
                  <div class="day"><span>السبت</span> <span>5 يناير</span></div>
                  <div class="hour dangrs">5:30 م</div>
                  <div class="hour suc">5:30 م</div>
                </div>
                <div class="week">
                  <div class="day"><span>السبت</span> <span>5 يناير</span></div>
                  <div class="hour x">عطلة</div>
                </div>
              </div>
              <div class="reaction">
                <spane class="green"></spane>
                <div>: انجزتا: 36 يوم</div>
                <spane class="red"></spane>
                <div>يتبقى: 18 يوم على انتهاء الدورة</div>
              </div>
            </div>
          </div>
          <h3>عن المعلم</h3>
          <div class="row-r">
            <h3>محمد سليمان</h3>
            <div class="exp">
              <p>معلم اللغ العربية الفصحي و العامية المصرية</p>
              <div class="form">
                <div class="img-prof">
                  <img
                    src="../../../public/assets/img/images.jpeg"
                    alt=""
                    class="img-person"
                  />
                </div>
                <div class="information-img">
                  <div class="d">0 04:20:00 الباعة</div>
                  <div class="d">42 درس</div>
                  <div class="d">452 طالب</div>
                </div>
              </div>
              <div class="text-pers">
                مدرس اللغة العربية الفصحي والعامية المصرية لدي منهج وكتب جيدة
                للتعليم العربية لغير الناطقين بها في وقت قصير ومناسب لجميع
                المستويات سواء كنت مبتدئ أو متقدم وأدرس أيضا بعض علوم اللغة
                العربية مثل النحو مدرس اللغة العربية الفصحى والعامية المصرية لدى
                منهج وكتب جديدة للتعليم العربية لغير الناطقين بها في
              </div>
            </div>
          </div>
          <h3>تقييمات</h3>
          <div class="row-r">
            <div class="exp comment">
              <div class="star">
                <a href="#" class="fas fa-star s1"></a>
                <a href="#" class="fas fa-star s2"></a>
                <a href="#" class="fas fa-star s3"></a>
                <a href="#" class="fas fa-star s4"></a>
                <a href="#" class="fas fa-star s5"></a>
              </div>
              <p class="rate">ما تقييمك لهذة الدورة؟</p>
              <div class="area">
                <textarea class="fh" wrap="hard" rows="5" style="width: 291px">
تعليق </textarea
                >
              </div>
              <p class="comm">إرسال التقييم</p>
            </div>
            <h3 class="lain">ملاحظات الطلاب للدورة</h3>
            <div class="comment box-come">
              <div class="img">
                <img
                  class="ll"
                  src="../../../public/assets/img/box/Group4934.png"
                  alt=""
                />
              </div>
              <div class="cont">
                <div class="name">محمد سليمان</div>
                <div class="star-come">
                  <a href="#" class="fas fa-star s1"></a>
                  <a href="#" class="fas fa-star s2"></a>
                  <a href="#" class="fas fa-star s3"></a>
                  <a href="#" class="fas fa-star s4"></a>
                  <a href="#" class="fas fa-star s5"></a>
                </div>
                <p class="p">
                  دورة رائعة ، الكثير من المعلومات الجديدة المفيدة
                </p>
                <div class="like">
                  <i class="far fa-thumbs-up lk"></i>
                  <i class="far fa-thumbs-down lk"></i>
                </div>
              </div>
            </div>
            <div class="comment box-come">
              <div class="img">
                <img
                  class="ll"
                  src="../../../public/assets/img/box/Group4934.png"
                  alt=""
                />
              </div>
              <div class="cont">
                <div class="name">محمد سليمان</div>
                <div class="star-come">
                  <a href="#" class="fas fa-star s1"></a>
                  <a href="#" class="fas fa-star s2"></a>
                  <a href="#" class="fas fa-star s3"></a>
                  <a href="#" class="fas fa-star s4"></a>
                  <a href="#" class="fas fa-star s5"></a>
                </div>
                <p class="p">
                  دورة رائعة ، الكثير من المعلومات الجديدة المفيدة
                </p>
                <div class="like">
                  <i class="far fa-thumbs-up lk"></i>
                  <i class="far fa-thumbs-down lk"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="infor">
          <h3 class="h-marg">معلومات الدورة</h3>
          <div class="row-l">
            <video
              class="radius"
              width="400"
              poster="../../../public/assets/Box/Webvid.png"
              controls
            >
              <!-- <source src="mov_bbb.mp4" type="video/mp4" /> -->
            </video>
            <div class="numb">
              <h3 class="h-marg">تشمل هذة الدورة الدورة</h3>
              <ul class="">
                <li><span>عدد الايام</span> <span> 30 يوم</span></li>
                <li><span>وقت الدورة</span> <span> 4:09:30 ساعة</span></li>
                <li><span>عدد الدروس</span> <span>42 درس</span></li>
                <li><span>عدد الطلاب</span> <span>432 طالب</span></li>
              </ul>
              <div class="hash">
                #
                <span class="ff">النحو</span>
                <span class="ff">احکام القرآن</span>
                <span class="ff">الفطاحة</span>
                <span class="ff">المعرفة</span>
                <span class="ff">الشعر</span>
              </div>
              <div class="star">
                <a href="#" class="fas fa-star s1"></a>
                <a href="#" class="fas fa-star s2"></a>
                <a href="#" class="fas fa-star s3"></a>
                <a href="#" class="fas fa-star s4"></a>
                <a href="#" class="fas fa-star s5"></a>
              </div>
              <button class="complete" @click.prevent="handleClick">
                اكمل الدورة
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageHeader",
  data() {
    //     import popup from "@/popup/arabic/popup.vue";
    // components: {
    //    popup,
    //   },
    return {
      home: "الرئيسية",
      courses: "الدورات",
      PageHeader: "اللغة العربية",
      name: "mahmoud",
    };
  },
  methods: {
    //   moreFun() {
    //   const readMore = document.querySelector(".show-more");
    //   const text = document.querySelector(".text");
    //   readMore.addEventListener("click ", (e) => {
    //     text.classList.toggle("show-more");
    //     }
    //   }
    handleClick() {
      this.$emit("btn-click");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../sass/main.scss";
.all-page {
  background-color: #e4e4e4;
  .fullHeader {
    color: #fff;
    background-color: rgb(26, 47, 104);
    overflow: hidden;
    padding: 15px 0 34px 0;
    .clear {
      margin-bottom: 10px;
    }
    .PageHeader {
      width: 60%;
      float: right;
      @media (max-width: 767px) {
        width: 100%;
      }
      .ri {
        .navbar {
          flex: 0 !important;
          align-items: center;
          display: flex;
          margin: 47px 0 0 0;

          .profile {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-left: 10px;
          }
          .lang {
            cursor: pointer;
            margin-left: 19px;
          }
        }
      }
      .home-link {
        color: #fff;
      }
      .cors-link {
        color: #fff;
      }
    }
    .button-complete {
      // width: 40%;
      margin-top: 114px;
      float: left;
      text-align: center;
      padding-right: 14px;
      @media (max-width: 767px) {
        float: none;
        margin: 0;
      }
      .complete {
        width: 420px;
        background-color: #0acaa1;
        border: solid 1px #0acaa1;
        text-align: center;
        margin: 10px;
        padding: 12px 40px;
        border-radius: 3px;
        color: #383d47;
        cursor: pointer;
        transition: 0.3s;
        @media (max-width: 767px) {
          width: 93%;
          margin-top: 35px;
        }
      }
      .blcr {
        display: flex;
        @media (max-width: 767px) {
          // flex-direction: column;
        }
        .CourseLessons {
          width: 200px;
          color: #fff;
          background-color: #ffffff00;
          border: solid 1px #ffffff;
          text-align: center;
          margin: 10px;
          padding: 12px 40px;
          border-radius: 3px;
          cursor: pointer;
          transition: 0.3s;
        }
        .share {
          width: 200px;
          color: #fff;
          background-color: #ffffff00;
          border: solid 1px #ffffff;
          text-align: center;
          margin: 10px;
          padding: 12px 40px;
          border-radius: 3px;
          cursor: pointer;
          transition: 0.3s;
        }
      }
    }
  }
  .full-cont {
    line-height: 30px;
    display: flex;
    flex-wrap: nowrap;
    @media (max-width: 767px) {
      flex-wrap: wrap;
      width: 100%;
    }
    .flex {
      display: flex;
      flex-direction: column;
      width: 66.6666666667%;
      @media (max-width: 767px) {
        width: 100%;
      }
      .row-r {
        background-color: #f0f0f0;
        border-radius: 5px;
        padding: 15px;
        .learn {
          .information {
            padding: 0 20px 0 0;
          }
        }
        .exp {
          .more-text {
            display: inline;
            @media (max-width: 767px) {
              display: block;
              padding-right: 10px;
            }
          }
          .form {
            display: flex;
            .img-person {
              height: 120px;
              width: 130px;
              border-radius: 50%;
              margin-left: 30px;
              border: 5px #fff solid;
            }
            .information-img {
              padding-top: 22px;
            }
          }
        }
        .show-more {
          font-size: 16px;
          font-weight: bold;
          text-align: center;
          cursor: pointer;
        }
      }
      .time {
        .exp {
          .header-time {
            display: flex;
            justify-content: space-between;
          }
          .date {
            display: flex;
            background-color: #fff;
            border-radius: 5px;
            border-radius: 5px;
            padding: 10px 0;
            margin-top: 20px;
            @media (max-width: 767px) {
              display: block;
              overflow: scroll;
              height: 300px;
            }
            .week {
              text-align: center;
              flex: 1;
              @media (max-width: 767px) {
                display: flex;
                justify-content: space-around;
                padding: 0;
              }
              .day {
                font-size: 12px;
                margin-bottom: 15px;

                span:first-child {
                  display: block;
                  color: #333;
                  font-size: 16px;
                  font-weight: bold;
                }

                span:last-child {
                  color: #555;
                }
              }
              .hour {
                font-size: 15px;
                color: #555;
                margin-bottom: 15px;
                margin-left: 10px;
                @media (max-width: 767px) {
                  margin-bottom: 35px;
                  padding: 0 10px;
                }
              }

              .dangrs {
                border-radius: 5px;
                border: 1px #f1522c solid;
              }
              .dangr {
                border-radius: 5px;
                border: 1px #f1522c solid;
                border-left: 4px #f1522c solid;
                color: #f1522c;
                background-color: #ff8d7e5c;
              }
              .sucs {
                border-radius: 5px;
                border: 1px #00df64 solid;
                border-left: 4px #00df64 solid;
                color: #00df64;
                background-color: #00ff485c;
              }
              .suc {
                border-radius: 5px;
                border: 1px #00df64 solid;
              }
              .x {
                padding: 24px 0px;
                border-radius: 5px px;
                background-color: #d5d5d5;
                @media (max-width: 767px) {
                  padding: 24px;
                  margin: 0px;
                }
              }
            }
          }
          .reaction {
            display: flex;
            justify-content: space-around;
            .green {
              width: 10px;
              height: 10px;
              background-color: #00df64;
              border-radius: 50%;
              position: relative;
              top: 12px;
              right: 85px;
              @media (max-width: 767px) {
                position: relative;
                top: 12px;
                right: 0px;
              }
            }

            .red {
              width: 10px;
              height: 10px;
              background-color: #f1522c;
              border-radius: 50%;
              position: relative;
              top: 12px;
              right: 85px;
              @media (max-width: 767px) {
                position: relative;
                top: 12px;
                right: 0px;
              }
            }
          }
        }
      }
      .row-r {
        border: 2px #d9d9d9 solid;
        .comment {
          background-color: #fff;
          border-radius: 5px;
          border: 2px #d9d9d9 solid;
          .rate {
            text-align: center;
          }
          .comm {
            text-align: center;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
          }
          .area {
            text-align: center;
            .fh {
              border: 2px #d9d9d9 solid;
              border-radius: 5px;
              background-color: #e3e3e3;
              color: #555;
            }
          }
          .star {
            text-align: center;
            direction: rtl;
            margin: 20px;
            a {
              font-size: 35px;
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
        .lain::before {
          content: "";
          position: absolute;
          transform: translate(-184px, 16px);
          height: 1px;
          background-color: #ccc;
          width: 32%;
          @media (max-width: 767px) {
            width: 111px;
          }
        }
      }
      .box-come {
        display: flex;
        padding: 20px;
        margin: 20px 0;
        @media (max-width: 767px) {
          display: block;
        }
        .img {
          padding-left: 25px;
          .ll {
            height: 56px;
          }
        }
        .cont {
          flex: 1;
          margin: 20px 0;
          .name {
            margin: 10px 0;
          }
          .star-come {
            direction: rtl;
            margin: 10px 0;
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
          .like {
            display: flex;
            .lk {
              height: 35px;
              width: 35px;
              border-radius: 50%;
              margin-left: 30px;
              text-align: center;
              line-height: 35px;
              border: 1px solid rgb(4, 4, 4);
              cursor: pointer;
              transition: 0.4s;
              :hover {
                color: #2697f9;
                background: #fff;
              }
            }
          }
        }
      }
    }

    .infor {
      @media (max-width: 767px) {
        width: 350px;
      }

      .h-marg {
        margin-right: 40px;
      }
      .row-l {
        background-color: #fff;
        border-radius: 5px;
        // padding: 20px 20px 20px 5px;
        margin: 0px 40px 0 0;
        border-radius: 5px;
        @media (max-width: 767px) {
          margin: 0px 0 20px 0;
        }

        .radius {
          border-radius: 5px 5px 0px 0px;
          @media (max-width: 767px) {
            width: 330px !important;
          }
        }
        .hash {
          .ff {
            background-color: #ccc;
            border-radius: 5px;
            padding: 5px 10px;
            margin: 6px;
            display: inline-block;
          }
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
        .complete {
          width: 350px;
          background-color: #0acaa1;
          border: solid 1px #0acaa1;
          text-align: center;
          margin: 25px;
          padding: 12px 40px;
          border-radius: 3px;
          color: #383d47;
          cursor: pointer;
          transition: 0.3s;
          @media (max-width: 767px) {
            width: 300px;
            margin: 25px 15px;
          }
        }
      }
    }
  }
}
</style>
