let userNicknameSpan = document.querySelector("#userNicknameSpan");
let nicknameAndIcon = document.querySelector("#nicknameAndIcon");
let textArea1 = document.querySelector("#textArea1");
let logoutFunction = document.querySelector("#logoutFunction");
let remainingChar = document.querySelector("#remainingChar");
let textAreaDiv = document.querySelector("#textAreaDiv");
let postsContainer = document.querySelector("#postsContainer");

userNicknameSpan.textContent = JSON.parse(
  localStorage.getItem("login")
).username;

let count = 50;

textArea1.addEventListener("input", (e) => {
  remainingChar.textContent = count - textArea1.value.length;

  if (textArea1.value.length > 49) {
    textArea1.value = textArea1.value.substr(0, 49);
    remainingChar.textContent = 0;
  }
});

<<<<<<< HEAD
textAreaDiv.addEventListener("submit", (e) => {
  e.preventDefault();
  let post = textArea1.value;

  postsContainer.innerHTML += `<div class="coloreBgTweet mt-5 py-4 px-2 border text-break "><p>${post}</p>
</div>`;
});
=======
textAreaDiv.addEventListener('submit', e => {
    e.preventDefault();
    let post = textArea1.value;

    postsContainer.innerHTML += `<div class="coloreBgTweet mt-5 py-4 border"><p>${post}</p>
</div>`
})
>>>>>>> a79da19c4aa2d9266c1fceca7d81bbca0dd39672
