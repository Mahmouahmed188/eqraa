<template>
  <div class="header1">
    <nav class="container full-width">
      <i class="fas fa-bars toggle-menu" @click="show = !show"></i>
      <div class="mob-menu" v-if="show">
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
          src="../../../../public/assets/img/box/Group4934.png"
        />
        <div class="lang">
          {{ name }}
        </div>
      </div>
      <!-- <div>
        <font-awesome-icon icon="fa-solid fa-bell" />
        <i class="fa-solid fa-bell"></i>

        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bell"
          class="svg-inline--fa fa-bell"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="bookmark"
            class="svg-inline--fa fa-bookmark"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="magnifying-glass"
            class="svg-inline--fa fa-magnifying-glass"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
            ></path>
          </svg>
          <i class="fas fa-search"></i>
          <path
            fill="currentColor"
            d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z"
          ></path>
        </svg>
        <i class="far fa-bookmark"></i>
      </div> -->
      <div class="logo">
        <router-link class="home-link" to="/">
          <i href=""
            ><img
              src="../../../../public/assets/img/png/4.png"
              alt=""
              class="logo-img"
          /></i>
        </router-link>
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
      show: false,
    };
  },
};
</script>

<style lang="scss">
.header1 {
  z-index: 101;
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
