// menu slide popup
var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");

sideNav.style.right = "-250px";
menuBtn.onclick = () => {
  sideNav.style.right === "-250px"
    ? (sideNav.style.right = "0")
    : (sideNav.style.right = "-250px");
};

// menu link smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
