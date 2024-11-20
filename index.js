const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "img/avatar-vangogh.jpg",
    post: "img/avatar-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "./img/avatar-courbet.jpg",
    post: "./img/avatar-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "./img/avatar-ducreux.webp",
    post: "./img/avatar-ducreux.webp",
    comment:
      "gm friends! which coin are YOU stacking up today?? post     below and WAGMI!",
    likes: 152,
  },
];

const element = document.createElement("div");

posts.forEach(({ name, username, location, avatar, post, comment, likes }) => {
  element.innerHTML += `<div class="post">
  <div class="post-header">
  <img src="${avatar}" alt="${name}" class="avatar" />
  <div class="post-header-info">
    <h3>${name}</h3>
    <p>${location} </p>
    </div>
    </div>
    <div class="post-img-container">
    <img src="${post}" alt="${name}" class="post-img"/>
    </div>
    <footer>
     <img src="./img/icons.png" alt="icons" class="icons"/>
     <p class="likes">${likes} likes</p>
     <p class="username"><span>${username}</span> ${comment} </p>
    </footer>
    </div>`;
});
document.body.appendChild(element);
