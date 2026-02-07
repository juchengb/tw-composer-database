# Play the Present - TAIWAN COMPSER DATABASE
## 台灣作曲家資料庫

記錄、保存與推廣台灣當代音樂創作的數位平台 Demo。

[HomePage Demo](https://juchengb.github.io/tw-composer-database/inedx.html) 

[Composer Demo](https://juchengb.github.io/tw-composer-database/anniwei.html) 

[Composer Demo](https://juchengb.github.io/tw-composer-database/upload.html) 

---
## 專案說明

本專案為「台灣作曲家資料庫」網站的前端 Demo，目前包含：

- **首頁**：精選作曲家、統計數據、關於我們、聯絡區塊  
- **作曲家頁面**：單一作曲家介紹、樂譜選輯、影像作品、音檔試聽（以魏安妮為範例）
- **作品上傳頁面**：作品上傳表單

---
## 目錄結構

```
tw-composer-database/
├── inedx.html          # 首頁（注意檔名為 inedx，可自行改為 index.html）
├── anniwei.html        # 作曲家範例頁：魏安妮
├── upload.html         # 作品上傳頁面
├── README.md
├── css/
│   ├── main.css        # 全域：變數、reset、header、footer、responsive
│   └── ... .css        # 各頁面專用樣式
├── js/
│   ├── main.js         # 共用：header 捲動、選單開關、錨點平滑捲動
│   └── ... .js         # 頁面專用動畫
├── img/                # 圖片資源
└── assets/             # 樂譜資源
```

---
## 技術與資源

- **字型**：Google Fonts（Playfair Display、Montserrat、Noto Serif TC）
- **樣式**：原生 CSS（變數、Flexbox、Grid、media queries）
- **腳本**：原生 JavaScript（無框架）
- **內容**：樂譜預覽（PDF embed）、YouTube、SoundCloud 嵌入

---
## 注意事項

- 首頁檔名目前為 `inedx.html`，若需作為預設首頁可重新命名為 `index.html` 並更新連結。
- 作曲家頁面請在 `<body>` 加上 `class="page-composer"`，以使用正確的 header 淺色樣式。
- 影音與樂譜內容為 Demo 用途，版權屬作曲家與相關權利人。

---
## 授權與版權

本網站影音、樂譜內容皆為作曲家版權所有，未經授權不得轉載或使用。
© 2026 Taiwan Composer Database All Rights Reserved.
All audio-visual materials and musical scores on this website are protected by the composers’ copyrights. Unauthorized reproduction or use is strictly prohibited.

