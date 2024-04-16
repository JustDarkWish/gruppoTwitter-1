let userNicknameSpan = document.querySelector("#userNicknameSpan");
let nicknameAndIcon = document.querySelector("#nicknameAndIcon");
let textArea1 = document.querySelector("#textArea1");
let logoutFunction = document.querySelector("#logoutFunction");
let remainingChar = document.querySelector("#remainingChar");
let textAreaDiv = document.querySelector("#textAreaDiv");
let postsContainer = document.querySelector("#postsContainer");
let carattereFinale = document.querySelector('#carattereFinale');
let d = luxon.DateTime.now();
let utenteLoggato = JSON.parse(localStorage.getItem("login"));
let tweetDefault = document.querySelector('#tweetDefault');

function Post(tweet, date) {

  this.tweet = tweet;
  this.date = date;

}

function actualDate() {

  let orarioFormattato = d.toFormat("dd-MM-yyyy HH:mm");

  return orarioFormattato;

}

userNicknameSpan.textContent = JSON.parse(
  localStorage.getItem("login")
).username;

let count = 50;

textArea1.addEventListener("input", (e) => {
  remainingChar.textContent = count - textArea1.value.length;

  if (textArea1.value.length > 50) {
    textArea1.value = textArea1.value.substr(0, 50);
    remainingChar.textContent = 0;
  }

  if (textArea1.value.length == 49) {
    carattereFinale.textContent = "e";
  } else {
    carattereFinale.textContent = "i";
  }
});

let newPost

let i = 0;

textAreaDiv.addEventListener("submit", (e) => {
  e.preventDefault();
  let post = textArea1.value;

  tweetDefault.classList.add('d-none');


textArea1.value = "";

newPost = new Post(post, actualDate());

utenteLoggato.posts.push(newPost);

localStorage.setItem("login", JSON.stringify(utenteLoggato))

postsContainer.innerHTML += `<div id="${i}" class="coloreBgTweet mt-5 py-4 px-2 border text-break rounded-2"><p>${utenteLoggato.posts[i].date} @${utenteLoggato.username}</p><p>${post}</p>
</div>`;
i++
});

console.log(utenteLoggato);