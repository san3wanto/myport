// menu show
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");
// ------------------

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// active menu scrol
// pakai class nav-link dan tag article
const li = document.querySelectorAll(".nav-link");
const ar = document.querySelectorAll("article");

function activeMenu() {
  let len = ar.length;
  while (--len && window.scrollY + 97 < ar[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("active"));
  li[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// Open the 
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// show contact 
const showContact = (toglId, sdbarId, scId) => {
  const sdbar = document.getElementById(sdbarId),
    togl = document.getElementById(toglId),
    scrl = document.getElementById(scId);
  if (sdbar && togl) {
    togl.addEventListener("click", () => {
      sdbar.classList.toggle("show");
      scrl.classList.toggle("sc");
    });
  }
};
showContact("call-act", "asd", "scn");

