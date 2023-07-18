const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector("ul");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("slide");
});

const navToggle = document.getElementById("hamburger");
const nav = document.getElementById("navbar");

// Function to close the navbar
function closeNavbar() {
  navbar.style.display = "none";
}

// Function to toggle the navbar visibility
function toggleNavbar() {
  if (navbar.style.display === "none") {
    navbar.style.display = "block";
  } else {
    closeNavbar();
    block = {};
    closeNavbar();
  }
}

// Event listener for navbar toggle button
navbarToggle.addEventListener("click", toggleNavbar);

// Event listener for clicks outside the navbar
document.addEventListener("click", function (event) {
  const target = event.target;

  if (target !== navbarToggle && !nav.contains(target)) {
    closeNavbar();
  }
});
