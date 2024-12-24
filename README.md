# 📱作業日記
## 2024/12/16
- 將 AccountLogin導入API，並且將取得的資料存進cookies
- 在 全域新增 apiBase
## 2024/12/16
- 將 user 的 login 完成 並將 signin完成到API規定之格式資料( 未發送API )
- 新增 middleware 進入user畫面要丟API去檢查token
## 2024/12/17
- 完成使用者註冊串接 、設定Pinia、day.js、將個人頁面資料串接正常，使用者登入/註冊完成80%。
## 2024/12/18
- 將主頁的 NEWSAPI串接完畢、後端API上傳資料
## 2024/12/20
- room 房間資料完成API串接
- booking API串接完畢
## 202412/23
- 登入的API刪除多的auth參數
- [bookid].vue 將預設結構刪除並使用 可選鏈接運算子 ? 回傳undefine 拿不到資料程式不會報錯
## 202412/24
- 已完成後續須更新事項 1、3、4、5、6、7、8

# 📱後續須更新事項
1. ✔︎  index.vue、rooms/index.vue、rooms/[id].vue 使用 useFetch() 取得資料時會發生伺服器端渲染（SSR）和 客戶端渲染（CSR） 的渲染不一致的問題 ( 如下圖 ) 。在 SSR 會以空陣列渲染，CSR 會以獲取的 API 資料進行渲染。
2. components/global/header.vue 在帳號登入成功後，userName.value 資料的狀態沒有調整成使用者名稱。
3. ✔︎  rooms/[id].vue 的 DatePickerModal 元件建議在外層包一層 <ClientOnly>，避免這一頁頁面重整時發生 Hydration class mismatch。
4. ✔︎  rooms/[id].vue 頁面在沒有填寫入住或退房日期的狀態下，需要禁止使用者透過立即預定按鈕前往預定頁面。
5. ✔︎  rooms/[id].vue 頁面行動版型的訂房流程沒有正常運作，需要再請同學調整哩。
6. ✔︎  進入 booking/index.vue 時需要使用 middleware 檢查是否為登入狀態，需要是登入狀態才可以建立訂單。
7. ✔︎  booking/index.vue 的 confirmBooking 函式可以不用包 if (process.client){} 判斷是否為客戶端環境，因為確認訂房點擊執行當下的環境為客戶端。
8. ✔︎  booking/[bookid].vue getBooking 函式取得訂單建議改成使用 useFetch() ，避免 $fetch() 在伺服器端和客戶端各執行一次。
9. booking/[bookid].vue 和帳號登入註冊的表單可以加入表單驗證，例如 Email 格式、密碼需至少 8 碼以上等驗證規則。
10.✔︎  AccountLogin.vue 登入功能的請求不需帶入 Authorization ，可以移除。
11. 修改個人資料頁面的 更新使用者資訊、取消訂單以及訂單列表 API 未完成串接
