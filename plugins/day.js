import dayjs from 'dayjs';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('day', {
    mounted(el, binding) {
      const dateValue = binding.value;
      const format = binding.arg || 'YYYY-MM-DD'; 
      if (dateValue) {
        el.textContent = dayjs(dateValue).format(format);
      } else {
        el.textContent = ''; // 空值處理
      }
    },
    updated(el, binding) {
      const dateValue = binding.value;
      const format = binding.arg || 'YYYY-MM-DD'; // 如果指令值更新了，重新渲染格式
      if (dateValue) {
        el.textContent = dayjs(dateValue).format(format);
      } else {
        el.textContent = '';
      }
    },
  });
});
