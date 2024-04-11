let userNicknameSpan = document.querySelector('#userNicknameSpan');
let nicknameAndIcon = document.querySelector('#nicknameAndIcon')
let textArea1 = document.querySelector('#textArea1');
let logoutFunction = document.querySelector('#logoutFunction');

userNicknameSpan.textContent = JSON.parse(localStorage.getItem('login')).username;