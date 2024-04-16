let userNicknameSpan = document.querySelector("#userNicknameSpan");
let nicknameAndIcon = document.querySelector("#nicknameAndIcon");
let textArea1 = document.querySelector("#textArea1");
let btnLogout = document.querySelector("#logoutFunction");
let remainingChar = document.querySelector("#remainingChar");
let textAreaDiv = document.querySelector("#textAreaDiv");
let postsContainer = document.querySelector("#postsContainer");
let carattereFinale = document.querySelector('#carattereFinale');
let utenteLoggato = JSON.parse(localStorage.getItem("login"));
let tweetDefault = document.querySelector('#tweetDefault');
let avatarUser = document.querySelector("#avatar");
let numberPost = document.querySelector(".number");

const URL_API = "http://localhost:3000/utenti";


avatarUser.src = utenteLoggato.avatar;



function Post(tweet, date) {

    this.tweet = tweet;
    this.date = date;

}

function actualDate() {

    let orarioFormattato = luxon.DateTime.now().toFormat("dd-MM-yyyy HH:mm:ss");

    return orarioFormattato;

}

userNicknameSpan.textContent = JSON.parse(
    localStorage.getItem("login")
).username;

let count = 50;

textArea1.addEventListener("input", (e) => {
    remainingChar.textContent = count - textArea1.value.length;
    e.preventDefault();

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

let newPost;

let i = 0;

textAreaDiv.addEventListener("submit", (e) => {

    e.preventDefault();
    let post = textArea1.value;


    tweetDefault.classList.add('d-none');


    textArea1.value = "";

    newPost = new Post(post, actualDate());

    utenteLoggato.posts.push(newPost);

    numberPost.innerHTML = utenteLoggato.posts.length;

    postsContainer.innerHTML += `<div class="coloreBgTweet p-3 border rounded-2 mx-2"><p class="m-0">${utenteLoggato.posts[i].date} @${utenteLoggato.username}</p><p>${utenteLoggato.posts[i].tweet}</p></div>`;

    localStorage.setItem("login", JSON.stringify(utenteLoggato))

    i++

});


btnLogout.addEventListener("submit", function () {
    fetch(URL_API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(utenteLoggato)
    })
    localStorage.clear();
});

