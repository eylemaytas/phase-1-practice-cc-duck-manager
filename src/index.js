
const duckNav = document.getElementById('duck-nav')
const displayDuckName = document.getElementById('duck-display-name')
const displayDuckImage = document.getElementById('duck-display-image')
const displayLikes = document.getElementById('duck-display-likes')
let likesCount = 0
const newDuckForm = document.getElementById('new-duck-form')

fetch('http://localhost:3000/ducks')
.then(res => res.json())
.then(ducks => {
  ducks.forEach(duck => {
    addtoNav(duck)
    displayDuckDetails(ducks[0])
  })
})
function addtoNav(duck){
 const imgTag = document.createElement('img')
 imgTag.src = duck.img_url
 duckNav.appendChild(imgTag)
 imgTag.addEventListener('click' , () =>  displayDuckDetails(duck) )
}

function displayDuckDetails(duck){
displayDuckName.textContent = duck.name
displayDuckImage.src = duck.img_url
likesCount = parseInt(duck.likes)
displayLikes.textContent = `${likesCount} likes`
}

function addLikes(){
  likesCount+= 1
  displayLikes.textContent = `${likesCount} likes`
}
displayLikes.addEventListener('click' , addLikes)


newDuckForm.addEventListener('submit' , (event) => {
  event.preventDefault()
const  newDuckName = event.target[0].value
 const  newDuckImage = event.target[1].value
 const newDuck = {
  name: newDuckName,
  img_url: newDuckImage,
  likes: 0
 }
 addtoNav(newDuck)
})














/* const duckNav = document.getElementById("duck-nav");
const displayName = document.getElementById("duck-display-name");
const displayImage = document.getElementById("duck-display-image");
const displayedLikes = document.getElementById("duck-display-likes");
const newDuck = document.getElementById("new-duck-form")
let likesCount = 0;
let currentDuck;
fetch("http://localhost:3000/ducks")
  .then((response) => response.json())
  .then((ducks) => {
    ducks.forEach((duck) => {
      addToNav(duck);
    });
  });

function addToNav(duck) {
  const navImage = document.createElement("img");
  navImage.src = duck.img_url;
  duckNav.appendChild(navImage);
  navImage.addEventListener("click", () => displayDuckDetails(duck));
}

function displayDuckDetails(duck) {
  currentDuck = duck;
  displayName.textContent = duck.name;
  displayImage.src = duck.img_url;
  likesCount = parseInt(duck.likes);
  displayedLikes.textContent = `${likesCount} likes`;
}

function addLikes() {
  likesCount += 1;
  displayedLikes.textContent = `${likesCount} likes`;
}
displayedLikes.addEventListener("click", addLikes);


function addNewDuck(duck) {
    
}
*/