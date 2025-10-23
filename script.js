// 顯示提示文字按鈕功能
const button = document.getElementById('thanksButton');
const message = document.getElementById('thanksMessage');

button.addEventListener('click', function() {
  message.textContent = "謝謝瀏覽我的名片！";
});

// 動態建立超連結按鈕
const card = document.querySelector('.card');
const linkButton = document.createElement('a');
linkButton.textContent = "前往我的網站";
linkButton.href = "https://example.com"; // 👉 換成你要導向的網址
linkButton.target = "_blank";
linkButton.classList.add('link-button');
card.insertBefore(linkButton, button);

// ✅ 新增：展開 / 收合「工作履歷」
const toggleExperience = document.getElementById('toggleExperience');
const experienceContent = document.getElementById('experienceContent');

toggleExperience.addEventListener('click', () => {
  if (experienceContent.style.display === 'none') {
    experienceContent.style.display = 'block';
    toggleExperience.textContent = '工作履歷 ▲';
  } else {
    experienceContent.style.display = 'none';
    toggleExperience.textContent = '工作履歷 ▼';
  }
});

