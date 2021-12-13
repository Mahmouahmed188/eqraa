<template>
  <div class="icon-color">
    <div class="container icon-flixe">
      <div class="icone-i">
        <img
          class="icone"
          src="../../../public/assets/img/box/Group49415.png"
          alt=""
        />
        <h1>{{ Course }}</h1>
        <p>كورس</p>
      </div>
      <div class="icone-i border-m">
        <img
          class="icone"
          src="../../../public/assets/img/box/Path8197.png"
          alt=""
        />
        <h1>{{ student }}</h1>
        <p>اللف طالب</p>
      </div>
      <div class="icone-i">
        <img
          class="icone"
          src="../../../public/assets/img/box/Path8195.png"
          alt=""
        />
        <h1>{{ lesson }}</h1>
        <p>اللف درس</p>
      </div>
      <div class="icone-i border-n">
        <img
          class="icone"
          src="../../../public/assets/img/box/Path8198.png"
          alt=""
        />
        <h1>{{ hour }}</h1>
        <p>اللف ساعة دراسية</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "IconColor",
  data() {
    return {
      Course: 235,
      student: 61.8,
      lesson: 14.1,
      hour: 17.8,
    };
  },
};
</script>
