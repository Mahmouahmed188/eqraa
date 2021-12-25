<template>
  <div class="container all">
    <button class="view-modal">x</button>
    <div class="popup">
      <div class="right-popup">
        <div class="cont">
          <h3 class="gev">متطلبات الدورة</h3>
          <ul class="detail">
            <li>
              لا توجد متطلبات قبل المادة، ولكن توزع على المتدربين خطة الموضوعات
              للدورة
            </li>
            <li>
              هناك متطلبات عقب كل محاضرة تتمثل في الإجابة عن الأسئلة المرفقة مع
              مرفقات المادة
            </li>
            <li>
              هناك امتحان في آخر الدورة يتضمن كل المهارات التدريسية التي تضمنتها
              الدورة يتم اعطاء الطلاب واجبات بعد كل درس
            </li>
            <li>
              هناك متطلبات عقب كل محاضرة تتمثل في الإجابة عن الأسئلة المرفقة مع
              مرفقات المادة
            </li>
          </ul>
        </div>
        <div class="upload">
          <div class="upload-link">
            <div class="upload-num"></div>
            <div class="link">
              <p>مرفقاتار يرجى اختيار الملفات من جهازك png .jpg .pdf</p>
              <a href="" class="ubl">رفع الملف</a>
            </div>
          </div>
          <div class="upload-drop">
            <img
              src="../../../public/assets/img/add-img.png"
              alt=""
              class="upload-file"
            />
            <p>Add file</p>
          </div>
        </div>
        <div class="close"><i class="uil uil-times"></i></div>
      </div>
      <div class="content">
        <h3 class="sign">الاشتراك ف الدورة</h3>
        <div class="form-n">
          <input
            type="text"
            class="form-name"
            placeholder="الاسم"
            aria-required="true"
          />
          <input
            type="text"
            class="form-name m-l"
            placeholder="الاسم"
            aria-required="true"
          />
        </div>
        <input
          type="text"
          class="form-email"
          placeholder="البريد الإلكتروني"
          aria-required="true"
        />
        <input
          type="text"
          class="form-email"
          placeholder="الوضيفة "
          aria-required="true"
        />
        <input
          type="text"
          class="form-email"
          placeholder="المنشأ"
          aria-required="true"
        />
        <input
          type="text"
          class="form-email"
          placeholder="رقم بطاقة الاتمان"
          aria-required="true"
        />
        <input
          type="tel"
          id="phone"
          class="form-email"
          placeholder="123-45-678"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          required
        />
        <input class="male" type="radio" name="sex" value="male" checked /> ذكر
        <input
          class="male"
          type="radio"
          name="sex"
          value="female"
          style="margin-right: 30px"
        />
        انثي
        <div class="button-end">
          <input type="checkbox" id="" name="" checked />
          <label for="">اشتراك لشخص اخر</label>
          <div class="butt">
            <button class="hash">اشتراك</button>
            <button class="Close">اغلاق</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "popup",
};
// document.querySelector(".view-modal").onclick = () => {
//   document.querySelector(".popup").classList.toggle("show");
// };
// document.querySelector(".popup").querySelector(".close").onclick = () => {
//   document.querySelector(".view-modal").click();
// };
</script>

<style lang="scss">
.all {
  margin: 10% auto !important;
  background-color: rgb(233, 233, 233);
  border-radius: 4px;
  box-shadow: 1px 0px 11px 6px rgba(36, 36, 36, 0.2);
  .view-modal {
    border: none;
    border-radius: 50%;
    margin-top: 2px;
  }
  .popup {
    display: flex;
    padding: 30px 10px;
    .right-popup {
      width: 66.666%;
      margin-left: 30px;
      line-height: 30px;
      .cont {
        .detail {
          padding-right: 20px;
          color: #646464;
        }
      }
      .upload {
        padding: 10px;
        background-color: #fff;
        border-radius: 6px;
        border: #ccc 1px solid;
        text-align: center;
        font-size: 17px;
        font-weight: bold;
        .upload-link {
          padding: 40px;
          margin: 15px;
          border: 2px rgb(230, 230, 230) dashed;
          border-radius: 7px;
          color: #6c6c6c;
        }
        .upload-drop {
          height: 100px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin: 15px;

          .upload-file {
            height: 75px;
            cursor: pointer;
          }
          p {
            margin: 0 10px;
            color: #555;
            cursor: pointer;
          }
        }
      }
    }
    .content {
      padding: 10px;
      background-color: #fff;
      border-radius: 6px;
      border: #ccc 1px solid;
      width: 33.333%;
      .form-n {
        .form-name {
          background-color: #e7e7e7;
          width: 48.63462%;
          border: #ccc 1px solid;
          padding: 5px;
          border-radius: 5px;
          outline: none;
          color: #707070;
          height: 40px;
          margin: 10px 0px;
          margin-left: 5px;
        }
        .m-l {
          margin-left: -5px;
        }
      }
      .form-email {
        background-color: #e7e7e7;
        width: 99%;
        border: #ccc 1px solid;
        padding: 5px;
        border-radius: 5px;
        outline: none;
        color: #707070;
        height: 40px;
        margin: 10px 0px;
      }
      .button-end {
        margin-top: 22px;
        .butt {
          .hash {
            background-color: #0acaa1;
            border: solid 1px #0acaa1;
            text-align: center;
            margin: 10px;
            padding: 12px 40px;
            border-radius: 20px;
            color: #383d47;
            cursor: pointer;
            transition: 0.3s;
            width: 200px;
          }
          .Close {
            color: red;
            border: none;
            background-color: #fff;
            float: left;
            margin-top: 7%;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
