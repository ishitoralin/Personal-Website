---
sidebar_position: 2
---

## 軟體開發

### 1. 原有產品新增 CIS benchmark 功能
   - Vue router 建立 CIS 檢驗流程
   - 模組化 Axios，減少一半呼叫 API 相關程式碼，增加可讀性
   - Vue 輸出 html report
   - 使用 Chart.js 實現統計資料視覺化圖像化

### 2. 產品新增線上更新功能(OTA)
   - 使用 Azure 建立 Web service，提供檔案比對、下載、上傳
   - API 功能分離，官方使用者使用 JWT 控管上傳流程，邊緣運算機台使用 hash 控管比對、下載功能。
   - 修改產品打包流程 Control file，由 dpkg 檔改為加密 gpg 檔
   - 修改所有產品 Service file ExecStart 指向共同 script，由 script 控管產品啟動、版本切換邏輯，任何產品維護時僅需針對共同 script 修改，減少人力耗損。
   - 使用 Vue 建立單頁更新頁面，使用者使用左鍵即可完成更新

### 3. Docker GUI 設計開發
   - 使用 node.js 及 dockerode 建立 docker remote server
   - 使用 vue3(Composition API)及 vue cli 開發 docker GUI 介面
### 4. AD server 架設及串接
   - 使用 python fastapi 開發 AD 帳號驗證功能。

## 網站開發

### 1. 健身房網站
   - 建立電商功能，販賣課程及產品
   - React(Next.js)開發前端視覺及切版 RWD
   - Node.js(Express)開發後端資料處理及前端資料接收
   - MySQL(MAMP)資料庫，進行資料儲存
   - 購物車結帳流程前後端 API 開發與串接
   - 金流串接(藍新、Linepay)
### 2. Ubike 站點查詢系統
   - React(Next.js)開發前端視覺介面
   - 串接台北市政府 Ubike 即時站點 API