// Your code goes here
var busImg = document.querySelector(".intro img");
var navBar = document.querySelectorAll("a");
var destinationImg = document.querySelector(".content-destination img");

destinationImg.setAttribute("draggable", "false");

for (let i = 0; i < navBar.length; i++) {
  navBar[i].setAttribute("draggable", "false");
}

let magicSchoolBusVideo = "GAaWl9poEK4";
let boatVideo = "8xslszO84vM";

busImg.addEventListener("click", playYouTube);
busImg.setAttribute("draggable", "false");

function playYouTube(video) {
  let ifrm = document.createElement("iframe");
  if (event.target === busImg) {
    video = magicSchoolBusVideo;
    var newStyle = document.querySelector(".intro");
  }

  if (event.target === boatImg) {
    video = boatVideo;
    var newStyle = document.querySelector(".content-destination");
  }

  newStyle.style.display = "flex";
  newStyle.style.flexDirection = "column";
  newStyle.style.alignContent = "center";

  ifrm.setAttribute(
    "src",
    `https://www.youtube.com/embed/${video}?start=1&autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1`
  );

  this.parentNode.replaceChild(ifrm, this);
  ifrm.style.height = "242px";

  console.log("wat");
}

let welcome = document.querySelector(".intro p");
welcome.addEventListener("mouseover", scarySchoolBus);

function scarySchoolBus() {
  let universal = document.querySelector("*");
  universal.style.backgroundColor = "rgba(125, 200, 140, 0.7)";
  welcome.style.backgroundColor = "rgba(125, 125, 125, 0.9)";
  welcome.style.padding = "4px";
}

let buttons = document.querySelectorAll(".btn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseover", function() {
    this.style.backgroundColor = "blue";
  });
  buttons[i].addEventListener("mouseleave", function() {
    this.style.backgroundColor = "#17A2B8";
  });
}

let paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].addEventListener("mouseout", function() {
    this.style.backgroundColor = "black";
    this.style.color = "white";
    this.style.padding = "4px";
  });
}
let funImg = document.querySelector(".inverse-content img");
funImg.setAttribute("draggable", "true");

funImg.addEventListener("drag", disappear);

function disappear() {
  this.style.opacity = "0.5";
}

let mapImg = document.querySelector(".img-content img");
mapImg.setAttribute("draggable", "false");
mapImg.addEventListener("drag", function(event) {});

mapImg.addEventListener("dragenter", function(event) {
  event.target.style.border = "1px dotted black";
  mapImg.setAttribute(
    "src",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/1920px-Tsunami_by_hokusai_19th_century.jpg"
  );
});

mapImg.addEventListener("dragleave", function(event) {
  event.target.style.border = "none";
});
//

var boatImg = document.querySelector(".content-destination img");

boatImg.addEventListener("click", playYouTube);

var anyH2 = document.querySelectorAll("h2");
for (let i = 0; i < anyH2.length; i++) {
  anyH2[i].addEventListener("dblclick", spinWoo);
}

function spinWoo() {
  this.animate(spin, {
    duration: 750,
    iterations: 1
  });
}
var spin = [
  { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
  { transform: "rotate(360deg) translate3D(0%, 0%, 0)", color: "#000" }
];
