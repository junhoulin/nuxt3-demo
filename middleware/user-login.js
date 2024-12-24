export default defineNuxtRouteMiddleware( async (to, from) => {
  const token = useCookie("auth");
  const config = useRuntimeConfig();
	if (!token.value) navigateTo("/account");
  const userInfo = await $fetch("/user/check",
    {
      baseURL: config.public.apiBase,
      method: "GET",
      headers: {
        Authorization: token.value,
      },
    }
  ).catch(() => {
    return null;
  });
  if (userInfo?.status !== undefined) {
    // 驗證成功，終止函式執行
    return;
  }
  if (process.client) {
    alert("請先 登入/註冊 帳號");
  }
    // 驗證失敗
  return navigateTo("/account");

})
