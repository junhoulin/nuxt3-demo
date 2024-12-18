export const accountStore = defineStore('user', () => {
  const email = ref('');

  const setEmail = (email1) => {
    email.value = email1
  }

  return {
    email,
    setEmail
  }
});
