# DailyDrinks
DailyDrinks 是簡易的飲料點單系統，方便工作夥伴們在忙碌的時刻快速開團訂購手搖飲料。
## Demo & 使用方法
- 開啟 https://codesandbox.io/s/github/howshal/17-dailydrinks 直接執行預覽。
- 作為範例，app 初次載入時已預先設定五筆訂單。
- 新增訂單：點擊 app 右下角「+」按鈕開始新增訂單。
- 編輯訂單：於任何訂單項目右側，點擊「編輯」以編輯該訂單。
- 刪除訂單：於任何訂單項目右側，點擊「刪除」以刪除該訂單。

## 額外功能
- 本系統有基礎的 RWD 設計，有適合電腦/手機的版面布局。
- 訂單的「備註」欄支援換行顯示，且仍然防止 HTML 等代碼被解析顯示。

## 原始碼概觀
`src/App.js` 主程式 entry。

`src/component/*` 包含各式訂單相關 UI 元件。

`src/models/*` 包含與訂單相關之 entity 與存取 API。

`src/utility/TextFormatter.js` 為處理文字格式相關之 helper functions。

`src/App.css` 包含本系統所有介面樣式表。

Thanks for reviewing!