// plugins/vee-validate.js
import { defineRule } from "vee-validate";
import { required ,email } from "@vee-validate/rules";

import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";
import { configure } from "vee-validate";

export default defineNuxtPlugin((nuxtApp) => {
  defineRule("required", required);
  defineRule("email", email);
  // 自訂驗證規則
  defineRule("username", (value) => {
    const regex = /^.{3,15}$/;
    return (
      regex.test(value) ||
      "使用者名稱只能 3 至 15 字元"
    );
  });

  defineRule("phone", (value) => {
    const regex = /^[0-9]{10,10}$/;
    return (
      regex.test(value) ||
      "手機格式不正確"
    );
  });

  // 設定多國語系與驗證訊息
  configure({
    // 載入繁體中文的設定檔，產生繁體中文的驗證訊息
    generateMessage: localize({ zh_TW: zhTW }), 
    validateOnInput: true, // 輸入文字時立即進行驗證
  });
  
  // 設定預設語言為繁體中文
  setLocale("zh_TW");
})
