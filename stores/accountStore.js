export const accountStore = defineStore('account', () => {
  const email = ref('');

  const setEmail = (email1) => {
    email.value = email1
  }

  return {
    email,
    setEmail
  }
});
