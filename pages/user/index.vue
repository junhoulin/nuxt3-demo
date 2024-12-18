<script setup>
const ZipCodeMap = ref ([
  { detail: '100臺北市中正區', zipcode: 100, city: '臺北市', county: '中正區' },
    { detail: '103臺北市大同區', zipcode: 103, city: '臺北市', county: '大同區' },
    { detail: '104臺北市中山區', zipcode: 104, city: '臺北市', county: '中山區' },
    { detail: '105臺北市松山區', zipcode: 105, city: '臺北市', county: '松山區' },
    { detail: '106臺北市大安區', zipcode: 106, city: '臺北市', county: '大安區' },
])

import dayjs from 'dayjs';

definePageMeta({
  middleware: "user-login",
});
const userinfo = userinfoStore();
const { userDatainfo } = storeToRefs(userinfo);

const isEditPassword = ref(false);
const isEditProfile = ref(false);
const userData = userDatainfo;
const birthday = dayjs(userData.value.birthday); 
// 格式化日期為 YYYY-MM-DD
const formattedBirthday = birthday.format('YYYY-MM-DD');
const [Year, Month, Day] = formattedBirthday.split('-').map(Number);

const birthYear =ref(0);
const birthMonth =ref(0);
const birthDay =ref(0);

const changYear = () => {
  birthYear.value = Year;
  birthMonth.value = Month;
  birthDay.value = Day;
}

const editButton = async () => {
  isEditProfile.value = !isEditProfile.value;
  await changYear();
};

</script>

<template>
  <NuxtLayout name="user">
    <div class="row gap-6 gap-md-0">
      <div class="col-12 col-md-5">
        <section class="rounded-3xl d-flex flex-column gap-6 gap-md-10 p-6 p-md-10 bg-neutral-0">
          <h2 class="fs-6 fs-md-5 fw-bold">
            修改密碼
          </h2>
          <div class="d-flex flex-column gap-4 gap-md-6">
            <div class="fs-8 fs-md-7">
              <p class="mb-2 text-neutral-80 fw-medium">
                電子信箱
              </p>
              <span
                class="form-control pe-none p-0 text-neutral-100 fw-bold border-0"
              >{{ userData.email}}</span>
            </div>

            <div
              class="d-flex justify-content-between align-items-center"
              :class="{'d-none': isEditPassword}"
            >
              <div>
                <label class="mb-0 text-neutral-80 fs-8 fs-md-7 fw-medium">
                  密碼
                </label>
                <input
                  class="form-control pe-none p-0 text-neutral-100 fs-5 fs-md-3 fw-bold border-0"
                  type="password"
                  value="**********"
                >
              </div>

              <button
                class="flex-shrink-0 text-primary-100 fs-8 fs-md-7 fw-bold text-decoration-underline border-0 bg-transparent"
                type="button"
                @click="isEditPassword = !isEditPassword"
              >
                重設
              </button>
            </div>

            <div
              class="d-flex flex-column gap-4 gap-md-6"
              :class="{'d-none': !isEditPassword}"
            >
              <div>
                <label
                  for="oldPassword"
                  class="form-label fs-8 fs-md-7 fw-bold"
                >舊密碼</label>
                <input
                  id="oldPassword"
                  type="password"
                  class="form-control p-4 fs-7 rounded-3"
                  placeholder="請輸入舊密碼"
                >
              </div>

              <div>
                <label
                  for="newPassword"
                  class="form-label fs-8 fs-md-7 fw-bold"
                >新密碼</label>
                <input
                  id="newPassword"
                  type="password"
                  class="form-control p-4 fs-7 rounded-3"
                  placeholder="請輸入新密碼"
                >
              </div>

              <div>
                <label
                  for="confirmPassword"
                  class="form-label fs-8 fs-md-7 fw-bold"
                >確認新密碼</label>
                <input
                  id="confirmPassword"
                  type="password"
                  class="form-control p-4 fs-7 rounded-3"
                  placeholder="請再輸入一次新密碼"
                >
              </div>
            </div>

            <button
              :class="{'d-none': !isEditPassword}"
              class="btn btn-neutral-40 align-self-md-start px-8 py-4 text-neutral-60 rounded-3"
              type="button"
            >
              儲存設定
            </button>
          </div>
        </section>
      </div>

      <div class="col-12 col-md-7">
        <section class="rounded-3xl d-flex flex-column gap-6 gap-md-10 p-6 p-md-10 bg-neutral-0">
          <h2 class="fs-6 fs-md-5 fw-bold">
            基本資料
          </h2>
          <div class="d-flex flex-column gap-4 gap-md-6">
            <div class="fs-8 fs-md-7">
              <label
                class="form-label"
                :class="{'fw-bold text-neutral-100': isEditProfile, 'fw-medium text-neutral-80': !isEditProfile}"
                for="name"
              >
                姓名
              </label>
              <input
                id="name"
                name="name"
                class="form-control text-neutral-100 fw-bold"
                :class="{'pe-none p-0 border-0': !isEditProfile, 'p-4': isEditProfile}"
                type="text"
                v-model="userData.name"
              >
            </div>

            <div class="fs-8 fs-md-7">
              <label
                class="form-label"
                :class="{'fw-bold text-neutral-100': isEditProfile, 'fw-medium text-neutral-80': !isEditProfile}"
                for="phone"
              >
                手機號碼
              </label>
              <input
                id="phone"
                name="phone"
                class="form-control text-neutral-100 fw-bold"
                :class="{'pe-none p-0 border-0': !isEditProfile, 'p-4': isEditProfile}"
                type="tel"
                v-model="userData.phone"
              >
            </div>

            <div class="fs-8 fs-md-7">
              <label
                class="form-label"
                :class="{'fw-bold text-neutral-100': isEditProfile, 'fw-medium text-neutral-80': !isEditProfile}"
                for="birth"
              >
                生日
              </label>
              <span
                class="form-control pe-none p-0 text-neutral-100 fw-bold border-0"
                :class="{'d-none': isEditProfile}"
                v-day:YYYY-MM-DD="userData.birthday"
              ></span>
              <div
                class="d-flex gap-2"
                :class="{'d-none': !isEditProfile}"
              >
                <select
                  id="birth"
                  class="form-select p-4 text-neutral-80 fw-medium rounded-3"
                  v-model="birthYear"
                >
                  <option
                    v-for="year in 65"
                    :key="year"
                    :value="year + 1958"
                  >
                  {{ year + 1958 }} 年
                  </option>
                </select>
                <select
                  class="form-select p-4 text-neutral-80 fw-medium rounded-3"
                  v-model="birthMonth"
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
                  v-model="birthDay"
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

            <div class="fs-8 fs-md-7">
              <label
                class="form-label"
                :class="{'fw-bold text-neutral-100': isEditProfile, 'fw-medium text-neutral-80': !isEditProfile}"
                for="address"
              >
                地址
              </label>
              <span
                class="form-control pe-none p-0 text-neutral-100 fw-bold border-0"
                :class="{'d-none': isEditProfile}"
              >{{ userData.address.zipcode }}{{ userData.address.detail }}</span>
              <div :class="{'d-none': !isEditProfile}">
                <div
                  class="d-flex gap-2 mb-2"
                >
                  <select
                    class="form-select p-4 text-neutral-80 fw-medium rounded-3"
                  >
                    <option 
                      v-for=" item in ZipCodeMap"
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
                  :value="userData.address.detail"
                >
              </div>
            </div>
          </div>
          <button
            :class="{'d-none': isEditProfile}"
            class="btn btn-outline-primary-100 align-self-start px-8 py-4 rounded-3"
            type="button"
            @click="editButton"
          >
            編輯
          </button>

          <button
            :class="{'d-none': !isEditProfile}"
            class="btn btn-neutral-40 align-self-md-start px-8 py-4 text-neutral-60 rounded-3"
            type="button"
          >
            儲存設定
          </button>
        </section>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.rounded-3xl {
  border-radius: 1.25rem;
}

input[type="password"] {
  font: small-caption;
}

.form-control::placeholder {
  --neutral-60: #909090;
  color: var(--neutral-60);
  font-weight: 500;
}
</style>
