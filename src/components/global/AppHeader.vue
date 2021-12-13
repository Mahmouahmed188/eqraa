<template>
  <header>
    <nav class="container full-width">
      <i class="fas fa-bars toggle-menu"></i>
      <div class="mob-menu">
        <i href="" class="log-me"
          ><img
            src="../../../public/assets/img/png/2.png"
            alt=""
            class="logo-img"
          />
          <h5>اكادمية اقرا</h5></i
        >
        <h4 class="main">
          <i class="fas fa-home fab"> </i>
          <router-link to="/Home"> الرئيسية</router-link>
        </h4>

        <h4 class="cors">
          <router-link to="/AvailableCourses"> الكورسات المتاحة</router-link>
        </h4>

        <h4 class="lang">
          <i class="fas fa-language"></i> اللغة العربية
          <i class="fas fa-angle-right"></i>
        </h4>
        <h4 class="sign-up"><i class="fas fa-dollar-sign"></i> سجل مجانا</h4>
        <h4 class="sign-in"><i class="fas fa-sign-in-alt"></i> دخول</h4>
      </div>
      <div class="logo">
        <i href=""
          ><img
            src="../../../public/assets/img/png/2.png"
            alt=""
            class="logo-img"
        /></i>
        <p class="main"><router-link to="/Home"> الرئيسية</router-link></p>
        <p class="cors">
          <router-link to="/AvailableCourses"> الكورسات المتاحة</router-link>
        </p>
      </div>
      <div class="navbar">
        <div class="lang">{{ language }}</div>
        <button class="sign-up">{{ signUp }}</button>
        <button class="sign-in">دخول</button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    msg: String,
  },
  data() {
    return {
      language: "اللغة العربية",
      signUp: "سجل مجانا",
    };
  },
};
</script>

<style scoped lang="scss">
header {
  position: absolute;
  width: 100%;
  z-index: 1;
  color: #fff;

  .full-width {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      height: 35px;
      margin-top: 7px;
      margin-right: 20px;
      margin-left: 20px;
    }
    .logo {
      display: flex;
      flex-direction: row;
      float: right;
      justify-content: space-between;
      .main {
        margin: auto 20px;
        @media (max-width: 767px) {
          display: none;
        }
      }
      .cors {
        margin: auto 20px;
        @media (max-width: 767px) {
          display: none;
        }
      }
    }
    .mob-menu {
      display: none;
      float: none;
      flex-direction: column;
      background-color: rgb(66, 81, 104);
      width: 208px;
      position: absolute;
      top: 40px;
      left: 29px;
      padding: 25px;
      .log-me {
        display: flex;
      }
      h4 {
        cursor: pointer;
      }
    }
    .navbar {
      float: left;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      display: blok !important;
      @media (max-width: 767px) {
        display: none;
      }
      .lang {
        cursor: pointer;
        margin-left: 19px;
      }
      .lang::before {
        content: "";
        border-width: 6px;
        border-style: solid;
        position: relative;
        right: 75px;
        top: 14px;
        border-color: #fff transparent transparent transparent;
        @media (max-width: 767px) {
          right: 79px;
          top: 14px;
        }
      }
      .sign-up {
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
    .sign-in {
      border: solid 1px #fff;
      background-color: rgba(206, 107, 107, 0);
      margin: 10px;
      padding: 12px 40px;
      border-radius: 20px;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
