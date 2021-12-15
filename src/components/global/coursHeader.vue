<template>
  <div class="header1">
    <nav class="container full-width">
      <i class="fas fa-bars toggle-menu"></i>
      <div class="mob-menu">
        <i href="" class="log-me"
          ><img src="img/png/2.png" alt="" class="logo-img" />
          <h5>اكادمية اقرا</h5></i
        >
        <h4 class="main"><i class="fas fa-home fab"> </i> الرئيسية</h4>
        <h4 class="cors">
          <i class="fas fa-graduation-cap"></i> الكورسات المتاحة
          <i class="fas fa-angle-right"></i>
        </h4>
        <h4 class="lang">
          <i class="fas fa-language"></i> اللغة العربية
          <i class="fas fa-angle-right"></i>
        </h4>
        <h4 class="sign-up"><i class="fas fa-dollar-sign"></i> سجل مجانا</h4>
        <h4 class="sign-in"><i class="fas fa-sign-in-alt"></i> دخول</h4>
      </div>

      <div class="navbar">
        <img
          class="profile"
          src="../../../public/assets/img/box/Group4934.png"
        />
        <div class="lang">
          {{ name }}
        </div>
      </div>
      <div>
        <!-- <img src="../../../public/assets/Box/Path9271.png" alt="" /> -->
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div class="logo">
        <i href=""
          ><img
            src="../../../public/assets/img/png/4.png"
            alt=""
            class="logo-img"
        /></i>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "coursHeader",
  data() {
    return {
      name: "mahmoud",
    };
  },
};
</script>

<style lang="scss">
.header1 {
  position: sticky;
  top: 0px;
  padding: 10px;
  background-color: #fff;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: transparent transparent rgba(172, 172, 172, 0.377) transparent;
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
  .full-width {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;

    .navbar {
      flex: 0 !important;
      color: #4e4e4e;
      align-items: center;
      display: flex;
      border-width: 1px;
      border-style: solid;
      border-color: transparent transparent transparent
        rgba(172, 172, 172, 0.377);

      @media (max-width: 767px) {
        display: none;
      }
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
      .lang::before {
        content: "";
        border-width: 6px;
        border-style: solid;
        position: relative;
        right: 7px !important;
        top: 19px;
        border-color: #4e4e4e transparent transparent transparent !important;
        @media (max-width: 767px) {
          right: 79px;
          top: 14px;
        }
      }
    }
  }
  .logo {
    // display: flex;
    // flex-direction: row;
    justify-content: space-between;
    color: #4e4e4e;
    .logo-img {
      height: 45px;
    }
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
}
</style>
