export const useRoomStore = defineStore('room', () => {
  // State
  const roomData = ref({});
  const discount = ref(1000);
  const bookingPeople = ref(1);
  const daysCount = ref(1);
  const bookingDate = reactive({
    date: {
      start: new Date().toISOString().split('T')[0], // 設置默認日期
      end: null,
    },
    minDate: new Date(),
    maxDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
  });

  // 計算總價，使用 computed 屬性
  const totalPrice = computed(() => {
    const pricePerNight = roomData.value.price || 1;
    const nights = daysCount.value || 1;
    const discountAmount = discount.value || 1;
    return (pricePerNight * nights) - discountAmount;
  });

  // Actions
  const setRoomData = (data) => {
    roomData.value = data;
  };
  const setBookingPeople = (people) => {
    bookingPeople.value = people;
  };
  const setDaysCount = (count) => {
    daysCount.value = count;
  };
  const setBookingDate = (date) => {
    bookingDate.date.start = date.start;
    bookingDate.date.end = date.end;
  };

  const pushBooking = async (user) => {
    const token = useCookie("auth");
    const data = {
      roomId: roomData.value._id,
      checkInDate: bookingDate.date.start,
      checkOutDate: bookingDate.date.end,
      peopleNum: bookingPeople.value,
      userInfo: JSON.parse(JSON.stringify(user))
    }
    try {
      const config = useRuntimeConfig();
      const res = await $fetch('/orders/',{
        baseURL: config.public.apiBase,
        method: 'post',
        body: data,
        headers: {
          Authorization: token.value
        }
      })
      return res
    } catch (error) {
      if (error.data) {
        console.log('API 回應錯誤內容:', error.data);
        alert(error.data.message);
      } else {
        alert('登入失敗，伺服器未返回詳細資訊！');
      }
    }
  }

  return {
    roomData,
    bookingPeople,
    daysCount,
    bookingDate,
    discount,
    totalPrice,  // 返回計算出的 totalPrice
    setRoomData,
    setBookingPeople,
    setDaysCount,
    setBookingDate,
    pushBooking
  };
});
