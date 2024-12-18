// stores/userinfoStore.ts
import { defineStore } from 'pinia';

export const userinfoStore = defineStore('useruserinfo', () => {
  const userDatainfo = ref({
    name: '',
    email: '',
    phone: '',
    birthday: '',
    address: {
      detail: '',
      zipcode: '',
    }
  });

  const { data, pending, error } = useAsyncData('userInfo', async () => {
    const config = useRuntimeConfig();
    const token = useCookie("auth");

    try {
      const res = await $fetch('/user/', {
        baseURL: config.public.apiBase,
        method: 'get',
        headers: {
          Authorization: token.value
        }
      });
      userDatainfo.value = res.result;
      return res.result; // 返回数据给 `useAsyncData`
    } catch (err) {
      console.log('error', err);
      throw err; // 如果发生错误，则抛出错误
    }
  });

  return {
    getUser: () => data,  // 这个方法直接返回异步数据
    userDatainfo,
    pending,  // 请求加载状态
    error,    // 错误信息
  };
});
