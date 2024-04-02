const USERID = {
  name: null,
  identity: null,
  image: null,
  message: null,
  date: null
}

const discussionName = document.querySelector(".dynamicId");
const paragraph = document.querySelector("#discussionName");
const userComment = document.querySelector(".usercomment");
const publishBtn = document.querySelector("#publish");
const comments = document.querySelector(".comments");
const userName = document.querySelector(".user");
const container = document.getElementById('container');

userComment.addEventListener("input", () => {
  if (!userComment.value) {
    publishBtn.disabled = true;
  } else {
    publishBtn.disabled = false;
  }
});

function addPost() {
  if (!userComment.value) return;
  USERID.name = userName.value;
  if (!USERID.name) return;
  else {
    USERID.identity = true;
  }

  USERID.message = userComment.value;
  USERID.date = new Date().toLocaleString();
  let published = 
  `<div id="parents">
      <div id="comment1">
          <h1>${USERID.name}</h1>
          <p>${USERID.message}</p>
          <br>
          <button onclick="deleteDiv1()">Delete</button>
          <br>
          <span class="date">${USERID.date}</span>
      </div>    
  </div>`

  container.innerHTML += published;
  userComment.value = "";
  publishBtn.disabled = true;

  updateCommentCount();
}

function updateCommentCount() {
  let commentsNum = document.querySelectorAll(".date").length;
  document.getElementById("comment").textContent = commentsNum;
}

function deleteDiv1() {
  let element = document.getElementById("parents");
  if (element) {
    element.remove();
    updateCommentCount();
  }
}

publishBtn.addEventListener("click", addPost);
