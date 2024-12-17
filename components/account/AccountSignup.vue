<script setup>
import { Icon } from '@iconify/vue';
const isEmailAndPasswordValid = ref(false);
const ZipCodeMap = ref ([
  { detail: '100臺北市中正區', zipcode: 100, city: '臺北市', county: '中正區' },
    { detail: '103臺北市大同區', zipcode: 103, city: '臺北市', county: '大同區' },
    { detail: '104臺北市中山區', zipcode: 104, city: '臺北市', county: '中山區' },
    { detail: '105臺北市松山區', zipcode: 105, city: '臺北市', county: '松山區' },
    { detail: '106臺北市大安區', zipcode: 106, city: '臺北市', county: '大安區' },
])
const confirmPassword = ref("");
  const birthday =ref({
    year: "",
    month: "",
    day: ""
  });


const signupData = ref({
  name: "",
  email: "",
  password: "",
  phone: "",
  birthday: "",
  address: {
    zipcode: 802,
    detail: ""
  }
});

const pushSignup1 = () => {
  if (confirmPassword.value !== signupData.value.password) {
    confirmPassword.value = "";
    signupData.value.password = "";
    alert('輸入的密碼不相同');
  } else {
    isEmailAndPasswordValid.value = true;
  }
};

const pushSignup2 = () => {
  signupData.value.birthday = 
  `${birthday.value.year}/${birthday.value.month}/${birthday.value.day}`;
  console.log(signupData.value)
}
</script>

<template>
  <div class="p-5 px-md-0 py-md-30">
    <div class="mb-10">
      <p class="mb-2 text-primary-100 fs-8 fs-md-7 fw-bold">
        享樂酒店，誠摯歡迎
      </p>
      <h1 class="mb-4 text-neutral-0 fw-bold">
        立即註冊
      </h1>

      <div class="d-flex align-items-center py-4 gap-2">
        <div class="d-flex flex-column align-items-center gap-1 text-neutral-0">
          <span
            :class="{'d-none': isEmailAndPasswordValid}"
            class="step p-2 bg-primary-100 rounded-circle"
          >1</span>
          <Icon
            :class="{'d-none': !isEmailAndPasswordValid}"
            class="p-2 fs-3 bg-primary-100 rounded-circle"
            icon="material-symbols:check"
          />
          <p class="mb-0 fs-8 fs-md-7 fw-bold">
            輸入信箱及密碼
          </p>
        </div>

        <hr class="flex-grow-1 my-0 border border-neutral-60 opacity-100">

        <div
          :class="{
            'text-neutral-0': isEmailAndPasswordValid, 'text-neutral-60': !isEmailAndPasswordValid
          }"
          class="d-flex flex-column align-items-center gap-1"
        >
          <span
            :class="{
              'bg-primary-100': isEmailAndPasswordValid, 'bg-transparent border border-neutral-60': !isEmailAndPasswordValid
            }"
            class="step p-2 rounded-circle"
          >2</span>
          <p class="mb-0 fs-8 fs-md-7 fw-bold">
            填寫基本資料
          </p>
        </div>
      </div>
    </div>

    <div class="mb-4">
      <form
        :class="{'d-none': isEmailAndPasswordValid}"
        class="mb-4"
      >
        <div class="mb-4 fs-8 fs-md-7">
          <label
            class="mb-2 text-neutral-0 fw-bold"
            for="email"
          >
            電子信箱
          </label>
          <input
            id="email"
            class="form-control p-4 text-neutral-100 fw-medium border-neutral-40"
            placeholder="hello@exsample.com"
            type="email"
            v-model="signupData.email"
          >
        </div>
        <div class="mb-4 fs-8 fs-md-7">
          <label
            class="mb-2 text-neutral-0 fw-bold"
            for="password"
          >
            密碼
          </label>
          <input
            id="password"
            class="form-control p-4 text-neutral-100 fw-medium border-neutral-40"
            placeholder="請輸入密碼"
            type="password"
            v-model="signupData.password"
          >
        </div>
        <div class="mb-10 fs-8 fs-md-7">
          <label
            class="mb-2 text-neutral-0 fw-bold"
            for="confirmPassword"
          >
            確認密碼
          </label>
          <input
            id="confirmPassword"
            class="form-control p-4 text-neutral-100 fw-medium border-neutral-40"
            placeholder="請再輸入一次密碼"
            type="password"
            v-model="confirmPassword"
          >
        </div>
        <button
          class="btn btn-neutral-40 w-100 py-4 text-neutral-60 fw-bold"
          type="button"
          @click="pushSignup1"
        >
          下一步
        </button>
      </form>
      <form
        :class="{'d-none': !isEmailAndPasswordValid}"
        class="mb-4"
      >
        <div class="mb-4 fs-8 fs-md-7">
          <label
            class="mb-2 text-neutral-0 fw-bold"
            for="name"
          >
            姓名
          </label>
          <input
            id="name"
            class="form-control p-4 text-neutral-100 fw-medium border-neutral-40  rounded-3"
            placeholder="請輸入姓名"
            type="text"
            v-model="signupData.name"
          >
        </div>
        <div class="mb-4 fs-8 fs-md-7">
          <label
            class="mb-2 text-neutral-0 fw-bold"
            for="phone"
          >
            手機號碼
          </label>
          <input
            id="phone"
            class="form-control p-4 text-neutral-100 fw-medium border-neutral-40  rounded-3"
            placeholder="請輸入手機號碼"
            type="tel"
            v-model="signupData.phone"
          >
        </div>
        <div class="mb-4 fs-8 fs-md-7">
          <label
            class="mb-2 text-neutral-0 fw-bold"
            for="birth"
          >
            生日
          </label>
          <div
            class="d-flex gap-2"
          >
            <select
              id="birth"
              class="form-select p-4 text-neutral-80 fw-medium rounded-3"
              v-model="birthday.year"
            >
              <option
                v-for="year in 65"
                :key="year"
                :value="year+1958"
              >
                {{ year + 1958 }} 年
              </option>
            </select>
            <select
              class="form-select p-4 text-neutral-80 fw-medium rounded-3"
              v-model="birthday.month"
            >
              <option
                v-for="month in 12"
                :key="month"
                :value="month"
              >
                {{ month }} 月
              </option>
            </select>
            <select
              class="form-select p-4 text-neutral-80 fw-medium rounded-3"
              v-model="birthday.day"
            >
              <option
                v-for="day in 30"
                :key="day"
                :value="day"
              >
                {{ day }} 日
              </option>
            </select>
          </div>
        </div>
        <div class="mb-4 fs-8 fs-md-7">
          <label
            class="form-label text-neutral-0 fw-bold"
            for="address"
          >
            地址
          </label>
          <div>
            <div
              class="d-flex gap-2 mb-2"
            >
              <select
                class="form-select p-4 text-neutral-80 fw-medium rounded-3"
                v-model="signupData.address.zipcode"
              >
                <option  v-for=" item in ZipCodeMap"
                  :key="item.zipcode"
                  :value="item.zipcode"
                >
                {{ item.detail }}
                </option>
              </select>
            </div>
            <input
              id="address"
              type="text"
              class="form-control p-4 rounded-3"
              placeholder="請輸入詳細地址"
              v-model="signupData.address.detail"
            >
          </div>
        </div>
      
        <div class="form-check d-flex align-items-end gap-2 mb-10 text-neutral-0">
          <input
            id="agreementCheck"
            class="form-check-input"
            type="checkbox"
            value=""
          >
          <label
            class="form-check-label fw-bold"
            for="agreementCheck"
          >
            我已閱讀並同意本網站個資使用規範
          </label>
        </div>
        <button
          class="btn btn-primary-100 w-100 py-4 text-neutral-0 fw-bold"
          type="button"
          @click="pushSignup2"
        >
          完成註冊
        </button>
      </form>
    </div>

    <p class="mb-0 fs-8 fs-md-7">
      <span class="me-2 text-neutral-0 fw-medium">已經有會員了嗎？</span>
      <NuxtLink
        :to="{name: 'account'}"
        class="text-primary-100 fw-bold text-decoration-underline bg-transparent border-0"
      >
        <span>立即登入</span>
      </NuxtLink>
    </p>
  </div>
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


input[type="password"] {
  font: small-caption;
  font-size: 1.5rem;
}

input::placeholder {
  color: #909090;
  font-size: 1rem;
  font-weight: 500;

  @include media-breakpoint-down(md) {
    font-size: 14px;
  }
}

.form-check-input {
  width: 1.5rem;
  height: 1.5rem;
}

.form-check-input:checked {
  background-color: #BF9D7D;
  border-color: #BF9D7D;
}

.step {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
}
</style>
