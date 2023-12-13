console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement("article");
newPost.classList.add("post");
document.body.append(newPost);
const postText = document.createElement("p");
postText.classList.add("post__content");
postText.textContent = "das ist ein Post";
newPost.append(postText);

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");
newPost.append(postFooter);

const postUser = document.createElement("span");
postUser.classList.add("post__username");
postUser.textContent="@parishilton";
postFooter.append(postUser);

const postButton = document.createElement("button");
postButton.classList.add("post__button");
postButton.textContent = "Like";
postFooter.append(postButton);
postButton.addEventListener("click", handleLikeButtonClick);

console.log(newPost);