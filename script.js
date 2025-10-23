// 顯示提示文字按鈕功能
const button = document.getElementById('thanksButton');
const message = document.getElementById('thanksMessage');

button.addEventListener('click', function() {
  message.textContent = "謝謝瀏覽我的名片！";
});

// 新增：動態建立超連結按鈕
const card = document.querySelector('.card');
const linkButton = document.createElement('a');
linkButton.textContent = "前往我的網站";
linkButton.href = "https://www.google.com/"; // 👉 這裡換成你要導向的網址
linkButton.target = "_blank";
linkButton.classList.add('link-button');

// 插入到感謝按鈕之前
card.insertBefore(linkButton, button);
