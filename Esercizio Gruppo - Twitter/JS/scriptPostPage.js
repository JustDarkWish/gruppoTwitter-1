let userNicknameSpan = document.querySelector('#userNicknameSpan');
let nicknameAndIcon = document.querySelector('#nicknameAndIcon')
let textArea1 = document.querySelector('#textArea1');
let logoutFunction = document.querySelector('#logoutFunction');
let remainingChar = document.querySelector('#remainingChar');

userNicknameSpan.textContent = JSON.parse(localStorage.getItem('login')).username;

let count = 50;

textArea1.addEventListener('input', e => {
    remainingChar.textContent = count - textArea1.value.length;

    if (textArea1.value.length > 49) {
        textArea1.value = textArea1.value.substr(0,49);
        remainingChar.textContent = 0;
    }
})

