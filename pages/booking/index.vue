<script setup>
import BookingLoading from '@/components/rooms/BookingLoading.vue';
import { Icon } from '@iconify/vue';

const ZipCodeMap = ref ([
  { detail: '100臺北市中正區', zipcode: 100, city: '臺北市', county: '中正區' },
    { detail: '103臺北市大同區', zipcode: 103, city: '臺北市', county: '大同區' },
    { detail: '104臺北市中山區', zipcode: 104, city: '臺北市', county: '中山區' },
    { detail: '105臺北市松山區', zipcode: 105, city: '臺北市', county: '松山區' },
    { detail: '106臺北市大安區', zipcode: 106, city: '臺北市', county: '大安區' },
])

const router = useRouter();
const store = useRoomStore();
const { pushBooking} = useRoomStore();
// 直接取得 store 中的 roomData
const bookingData = store.roomData;
const bookingPeople = store.bookingPeople;
const daysCount = store.daysCount;
const bookingDate = store.bookingDate;
const bookingDiscount = store.discount;
const totalPrice = store.totalPrice

const userData = ref(
  {
    address: {
      zipcode: 100,
      detail: ""
    },
    name: "",
    phone: "",
    email: ""
  }
)


const goBack = () => {
  router.back();
}


const isLoading = ref(false);

const confirmBooking = async () => {
  isLoading.value = true;
  try {
    if (process.client) {
      const data = await pushBooking(userData.value); // 只在客户端调用 pushBooking
      const bookid = data.result._id
      setTimeout(() => {
        isLoading.value = false;
        router.push({
          name: 'booking-bookid',
          params: {
            bookid: bookid
          }
        })
      }, 1500);
    }
  } catch (error) {
    alert('error')
    isLoading.value = false;
  }
}


</script>

<template>
  <main class="pt-18 pt-md-30 bg-neutral-120">
    <section class="py-10 py-md-30 bg-primary-10">
      <div class="container">
        <button
          class="d-flex align-items-baseline gap-2 mb-10 bg-transparent border-0"
          type="button"
          @click="goBack"
        >
          <Icon
            class="fs-5 text-neutral-100"
            icon="mdi:keyboard-arrow-left"
          />
          <h1 class="mb-0 text-neutral-100 fs-3 fw-bold">
            確認訂房資訊
          </h1>
        </button>

        <div class="row gap-10 gap-md-0">
          <div class="col-12 col-md-7">
            <section>
              <h2 class="mb-8 mb-md-10 text-neutral-100 fs-6 fs-md-4 fw-bold">
                訂房資訊
              </h2>
              <div class="d-flex flex-column gap-6">
                <div class="d-flex justify-content-between align-items-center text-neutral-100">
                  <div>
                    <h3 class="title-deco mb-2 fs-7 fw-bold">
                      選擇房型
                    </h3>
                    <p class="mb-0 fw-medium">
                      {{ bookingData.name }}
                    </p>
                  </div>
                  <button
                    class="bg-transparent border-0 fw-bold text-decoration-underline"
                    type="button"
                  >
                    編輯
                  </button>
                </div>
                <div class="d-flex justify-content-between align-items-center text-neutral-100">
                  <div>
                    <h3 class="title-deco mb-2 fs-7 fw-bold">
                      訂房日期
                    </h3>
                    <p class="mb-2 fw-medium">
                      入住：{{ bookingDate.date.start }}
                    </p>
                    <p class="mb-0 fw-medium">
                      退房：{{ bookingDate.date.end }}
                    </p>
                  </div>
                  <button
                    class="bg-transparent border-0 fw-bold text-decoration-underline"
                    type="button"
                  >
                    編輯
                  </button>
                </div>
                <div class="d-flex justify-content-between align-items-center text-neutral-100">
                  <div>
                    <h3 class="title-deco mb-2 fs-7 fw-bold">
                      房客人數
                    </h3>
                    <p class="mb-0 fw-medium">
                      {{ bookingPeople }} 人
                    </p>
                  </div>
                  <button
                    class="bg-transparent border-0 fw-bold text-decoration-underline"
                    type="button"
                  >
                    編輯
                  </button>
                </div>
              </div>
            </section>

            <hr class="my-10 my-md-12 opacity-100 text-neutral-60">

            <section>
              <div class="d-flex justify-content-between align-items-center mb-10">
                <h2 class="mb-0 text-neutral-100 fs-6 fs-md-4 fw-bold">
                  訂房人資訊
                </h2>
                <button
                  class="text-primary-100 bg-transparent border-0 fw-bold text-decoration-underline"
                  type="button"
                >
                  套用會員資料
                </button>
              </div>

              <div class="d-flex flex-column gap-6">
                <div class="text-neutral-100">
                  <label
                    for="name"
                    class="form-label fs-8 fs-md-7 fw-bold"
                  >姓名</label>
                  <input
                    id="name"
                    type="text"
                    class="form-control p-4 fs-8 fs-md-7 rounded-3"
                    placeholder="請輸入姓名"
                    v-model="userData.name"
                  >
                </div>

                <div class="text-neutral-100">
                  <label
                    for="phone"
                    class="form-label fs-8 fs-md-7 fw-bold"
                  >手機號碼</label>
                  <input
                    id="phone"
                    type="tel"
                    class="form-control p-4 fs-8 fs-md-7 rounded-3"
                    placeholder="請輸入手機號碼"
                    v-model="userData.phone"
                  >
                </div>

                <div class="text-neutral-100">
                  <label
                    for="email"
                    class="form-label fs-8 fs-md-7 fw-bold"
                  >電子信箱</label>
                  <input
                    id="email"
                    type="email"
                    class="form-control p-4 fs-8 fs-md-7 rounded-3"
                    placeholder="請輸入電子信箱"
                    v-model="userData.email"
                  >
                </div>

                <div class="text-neutral-100 ">
                  <label
                    for="address"
                    class="form-label fs-8 fs-md-7 fw-bold"
                  >地址</label>
                  <div className="d-flex gap-2">
                    <select
                      class="form-select p-4 text-neutral-80 fs-8 fs-md-7 fw-medium rounded-3"
                      v-model="userData.address.zipcode"
                    >
                      <option
                        v-for=" (zip ,index) in ZipCodeMap"
                        :key="index"
                        :value="zip.zipcode"
                      >
                        {{ zip.detail }}
                      </option>
                    </select>
                  </div>
                  <input
                    id="address"
                    type="text"
                    class="form-control p-4 fs-8 fs-md-7 rounded-3 mt-4"
                    placeholder="請輸入詳細地址"
                    v-model="userData.address.detail"
                  >
                </div>
              </div>
            </section>

            <hr class="my-10 my-md-12 opacity-100 text-neutral-60">

            <section>
              <h2 class="mb-8 mb-md-10 text-neutral-100 fs-6 fs-md-4 fw-bold">
                房間資訊
              </h2>
              <div class="d-flex flex-column gap-6">
                <section>
                  <h3 class="title-deco mb-4 mb-md-6 fs-7 fs-md-5 fw-bold">
                    房型基本資訊
                  </h3>
                  <ul class="d-flex gap-4 list-unstyled">
                    <li class="card-info px-4 py-5 bg-neutral-0 border border-primary-40 rounded-3">
                      <Icon
                        class="mb-2 fs-5 text-primary-100"
                        icon="fluent:slide-size-24-filled"
                      />
                      <p class="mb-0 fw-bold text-neutral-80 text-nowrap">
                        {{bookingData.areaInfo}}
                      </p>
                    </li>
                    <li class="card-info px-4 py-5 bg-neutral-0 border border-primary-40 rounded-3">
                      <Icon
                        class="mb-2 fs-5 text-primary-100"
                        icon="material-symbols:king-bed"
                      />
                      <p class="mb-0 fw-bold text-neutral-80 text-nowrap">
                        {{ bookingData.bedInfo}}
                      </p>
                    </li>
                    <li class="card-info px-4 py-5 bg-neutral-0 border border-primary-40 rounded-3">
                      <Icon
                        class="mb-2 fs-5 text-primary-100"
                        icon="ic:baseline-person"
                      />
                      <p class="mb-0 fw-bold text-neutral-80 text-nowrap">
                        {{ bookingData.maxPeople }} 人
                      </p>
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 class="title-deco mb-4 mb-md-6 text-neutral-100 fs-7 fs-md-5 fw-bold">
                    房間格局
                  </h3>
                  <ul class="d-flex flex-wrap gap-6 gap-md-10 p-6 fs-8 fs-md-7 bg-neutral-0 rounded-3 list-unstyled">
                    <li class="d-flex gap-2"
                      v-for="(layoutInfo ,index) in bookingData.layoutInfo"
                      :key="index"
                    >
                      <Icon
                        class="fs-5 text-primary-100"
                        icon="material-symbols:check"
                      />
                      <p class="mb-0 text-neutral-80 fw-bold"
                      >
                        {{ layoutInfo.title }}
                      </p>
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 class="title-deco mb-4 mb-md-6 text-neutral-100 fs-7 fs-md-5 fw-bold">
                    房內設備
                  </h3>
                  <ul class="d-flex flex-wrap row-gap-2 column-gap-10 p-6 mb-0 fs-8 fs-md-7 bg-neutral-0 rounded-3 list-unstyled">
                    <li class="flex-item d-flex gap-2"
                      v-for="(facilityInfo ,index) in bookingData.facilityInfo"
                      :key="index"
                    >
                      <Icon
                        class="fs-5 text-primary-100"
                        icon="material-symbols:check"
                        v-if="bookingData"
                      />
                      <p class="mb-0 text-neutral-80 fw-bold"
                        v-if="bookingData"
                      >
                        {{ facilityInfo.title }}
                      </p>
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 class="title-deco mb-4 mb-md-6 text-neutral-100 fs-7 fs-md-5 fw-bold">
                    備品提供
                  </h3>
                  <ul class="d-flex flex-wrap row-gap-2 column-gap-10 p-6 mb-0 fs-8 fs-md-7 bg-neutral-0 rounded-3 list-unstyled">
                    <li class="flex-item d-flex gap-2"
                      v-for="(amenityInfo ,index) in bookingData.amenityInfo"
                      :key="index"
                    >
                      <Icon
                        class="fs-5 text-primary-100"
                        icon="material-symbols:check"
                        v-if="bookingData"
                      />
                      <p class="mb-0 text-neutral-80 fw-bold"
                        v-if="bookingData"
                      >
                        {{ amenityInfo.title }}
                      </p>
                    </li>
                  </ul>
                </section>
              </div>
            </section>
          </div>

          <div class="col-12 col-md-5">
            <div
              class="confirm-form rounded-3xl d-flex flex-column gap-10 p-6 p-md-10 mx-auto ms-md-auto me-md-0 bg-neutral-0"
            >
              <img
                class="img-fluid rounded-3"
                src="/images/room-a-1.png"
                alt="room-a"
              >

              <div>
                <h2 className="mb-6 text-neutral-100 fs-6 fs-md-4 fw-bold">
                  價格詳情
                </h2>
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <div class="d-flex align-items-center text-neutral-100 fw-medium">
                    <span>NT$ {{ bookingData.price }}</span>
                    <Icon
                      class="ms-2 me-1 text-neutral-80"
                      icon="material-symbols:close"
                    />
                    <span class="text-neutral-80">{{ daysCount }}晚</span>
                  </div>
                  <span class="fw-medium">
                    NT$ {{ bookingData.price }}
                  </span>
                </div>
                <div class="d-flex justify-content-between align-items-center fw-medium">
                  <p class="d-flex align-items-center mb-0 text-neutral-100">
                    住宿折扣
                  </p>
                  <span class="text-primary-100">
                    -NT$ {{ bookingDiscount }}
                  </span>
                </div>
                <hr class="my-6 opacity-100 text-neutral-40">
                <div class="d-flex justify-content-between align-items-center text-neutral-100 fw-bold">
                  <p class="d-flex align-items-center mb-0">
                    總價
                  </p>
                  <span>
                    NT$ {{ totalPrice}}
                  </span>
                </div>
              </div>

              <button
                class="btn btn-primary-100 py-4 text-neutral-0 fw-bold rounded-3"
                type="button"
                @click="confirmBooking"
              >
                確認訂房
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <BookingLoading v-if="isLoading" />
  </main>
</template>

<style lang="scss" scoped>
@import "bootstrap/scss/mixins/breakpoints";

$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px,
  xxxl: 1537px
);

.title-deco {
  display: flex;
  align-items: center;
}

.title-deco::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 24px;
  background-color: #BF9D7D;
  border-radius: 10px;
  margin-right: 0.75rem;
}

.form-control::placeholder {
  --neutral-60: #909090;
  color: var(--neutral-60);
  font-weight: 500;
}

.card-info {
  width: 97px;
  height: 97px;
}

.flex-item {
  flex: 1 1 15%;

  @include media-breakpoint-down(md) {
    flex-basis: 40%;
  }
}

.rounded-3xl {
  border-radius: 1.25rem;
}

.confirm-form {
  position: sticky;
  top: 160px;
  max-width: 478px;

  @include media-breakpoint-down(md) {
    position: static;
    top: 0;
    max-width: auto;
  }
}

</style>
