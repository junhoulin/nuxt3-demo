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
  const getUser = async () => {
    const config = useRuntimeConfig();
    const token = useCookie("auth");
    try{
      const res = await $fetch('/user/',{
        baseURL: config.public.apiBase,
        method: 'get',
        headers: {
          Authorization: token.value
        }
      })
      userDatainfo.value = res.result
    } catch(error) {
      console.log('errpr', error)
    };
  }
  
  return {
    getUser,
    userDatainfo
  }
});
