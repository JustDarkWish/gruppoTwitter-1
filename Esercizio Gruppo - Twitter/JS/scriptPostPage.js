let userNicknameSpan = document.querySelector('#userNicknameSpan');
let nicknameAndIcon = document.querySelector('#nicknameAndIcon')
let textArea1 = document.querySelector('#textArea1');
let logoutFunction = document.querySelector('#logoutFunction');
let remainingChar = document.querySelector('#remainingChar');
let textAreaDiv = document.querySelector('#textAreaDiv');
let postsContainer = document.querySelector('#postsContainer')

userNicknameSpan.textContent = JSON.parse(localStorage.getItem('login')).username;

let count = 50;

textArea1.addEventListener('input', e => {
    remainingChar.textContent = count - textArea1.value.length;

    if (textArea1.value.length > 49) {
        textArea1.value = textArea1.value.substr(0,49);
        remainingChar.textContent = 0;
    }
})

textAreaDiv.addEventListener('submit', e => {
    e.preventDefault();
    let post = textArea1.value;

    postsContainer.innerHTML += `<div class="coloreBgTweet mt-5 py-4 border d-flex flex-wrap"><p class="p-4">${post}</p>
</div>`
})