<template>
  <div>
    <div class="bloks">
      <div class="container cont-blok">
        <div class="text-cont">
          <h2>انشاء حساب</h2>
          <ul>
            <li>- ادخل الى صفحتي تسجيل الحساب و املا البيانات المطلوبه</li>
            <li>- بعد التسجيل قم بفتح بريد الكتروني واضغط على رابط التفعيل</li>
            <li>- اذا كان لديك حساب قم <a href="#">بتسجيل الدخول</a></li>
          </ul>
          <button class="button-blok">سجل مجانا</button>
        </div>
        <div class="img-c">
          <img
            src="../../../public/assets/img/box/block1.png"
            alt=""
            class="img-1"
          />
          <img
            src="../../../public/assets/img/box/block4.png"
            alt=""
            class="img-2"
          />
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
    <div class="bloks" style="background-color: #f5f5f5ef">
      <div class="container cont-blok">
        <div class="img-c">
          <img
            src="../../../public/assets/img/box/block3.png"
            alt=""
            class="img-1"
            style="width: 355px"
          />
        </div>
        <div class="text-cont">
          <h2>كيف تختار دوراتك؟</h2>
          <ul>
            <li>
              - استخدم البحث للوصول للدوره المركوبه او التصفح اقسام الدورات
              لتحديد المجال التي تود البدو
            </li>
            <li>
              - لدينا مسارات تعليميه توضح لك الطريق من البدايه الى النهايه
            </li>
          </ul>
          <router-link class="cors-link" to="/AvailableCourses">
            <button class="button-blok">الدورات المتاحه</button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
    <div class="bloks">
      <div class="container cont-blok">
        <div class="text-cont">
          <h2>حساب التقدم في الدوره!!</h2>
          <ul>
            <li>- قم بالتسجيل في الدوري المرغوبه</li>
            <li>
              - قبل مذاكره جنيه دروسها اون لاين بدون تسريع او تقديم للفيديو
              اثناء المذاكره تاكد كل الدرس
            </li>
            <li>
              - نقوم باضافه الكورس الى انجازاتك بمجرد الانتهاء من هم مباشره
            </li>
          </ul>
        </div>
        <div class="img-c">
          <img
            src="../../../public/assets/img/box/block2.png"
            alt=""
            class="img-1"
            style="width: 355px"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BloksCont",
  data() {
    return {};
  },
};
</script>
