window.addEventListener("load", function () {
  this.document.getElementById("preloader").style.display = "none";
  this.document.getElementById("PL").style.display = "none";
});

let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");
t1 = document.getElementById("T1");
t2 = document.getElementById("T2");
B1 = document.getElementById("B1");
DA = document.getElementById("DA");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
  t1.style.display = t1.style.display === "none" ? "block" : "none";
  t2.style.display = t2.style.display === "none" ? "block" : "none";
  B1.style.display = B1.style.display === "none" ? "block" : "none";
  DA.style.display = DA.style.display === "none" ? "flex" : "none";
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});

document.getElementById("clicked1").addEventListener("click", function () {
  t1.style.display = "block";
  t2.style.display = "block";
  B1.style.display = "block";
  DA.style.display = "flex";
});

document.getElementById("clicked2").addEventListener("click", function () {
  t1.style.display = "block";
  t2.style.display = "block";
  B1.style.display = "block";
  DA.style.display = "flex";
});

document.getElementById("clicked3").addEventListener("click", function () {
  t1.style.display = "block";
  t2.style.display = "block";
  B1.style.display = "block";
  DA.style.display = "flex";
});

document.getElementById("clicked4").addEventListener("click", function () {
  t1.style.display = "block";
  t2.style.display = "block";
  B1.style.display = "block";
  DA.style.display = "flex";
});

document.getElementById("clicked5").addEventListener("click", function () {
  t1.style.display = "block";
  t2.style.display = "block";
  B1.style.display = "block";
  DA.style.display = "flex";
});

video = document.getElementById("myVideo2");
var player = new Vimeo.Player(video);
vide0 = document.getElementById("myVideo");

document.getElementById("B1").addEventListener("click", function () {
  if (video.style.display == "none") {
    t1.style.display = "none";
    t2.style.display = "none";
    video.style.display = "block";
    player.play();
    vide0.pause();
    this.innerHTML = "PAUSE SHOWREEL";
  } else {
    t1.style.display = "block";
    t2.style.display = "block";
    video.style.display = "none";
    player.pause();
    vide0.play();
    this.innerHTML = "PLAY SHOWREEL";
  }
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

funk = document.getElementById("funk");

funk.addEventListener("click", function () {
  if (slideIndex == 1) {
    window.open(
      "https://utkarshpanwar11.artstation.com/projects/rJZ3mm",
      "_blank"
    );
  }
  if (slideIndex == 2) {
    window.open(
      "https://utkarshpanwar11.artstation.com/projects/zPPlbw",
      "_blank"
    );
  }
  if (slideIndex == 3) {
    window.open(
      "https://utkarshpanwar11.artstation.com/projects/ob20dL",
      "_blank"
    );
  }
  // if (slideIndex == 4) {
  //   window.open(
  //     "",
  //     "_blank"
  //   );
  // }
  if (slideIndex == 5) {
    window.open(
      "https://utkarshpanwar11.artstation.com/projects/rAyL9L",
      "_blank"
    );
  }
  if (slideIndex == 6) {
    window.open(
      "https://www.youtube.com/watch?app=desktop&si=EeJdiwFJVKmTzFwe&fbclid=PAAabowrVq8C9yKBGYJE7NCiH3cpmzI12qUA0Mr4BoVlxP1Wd52N5j0D-I-A0&v=s2vZfC_sQ1k&feature=youtu.be",
      "_blank"
    );
  }
});

portfolio = document.getElementById("portfolio");
cntr = document.getElementById("cntr");
btnl = document.getElementById("btnl");
btnr = document.getElementById("btnr");

work1 = document.getElementById("work1");
// work2 = document.getElementById("work2");
work3 = document.getElementById("work3");
work4 = document.getElementById("work4");
var p1 = new Vimeo.Player(work1);
// var p2 = new Vimeo.Player(work2);
var p3 = new Vimeo.Player(work3);
var p4 = new Vimeo.Player(work4);

cntr.addEventListener("click", function () {
  if (cntr.innerHTML == "Hide") {
    portfolio.style.display = "block";
    btnl.style.display = "block";
    btnr.style.display = "block";
    cntr.innerHTML = "View";
    work1.style.display = "none";
    // work2.style.display = "none";
    work3.style.display = "none";
    work4.style.display = "none";
    p1.pause();
    // p2.pause();
    p3.pause();
    p4.pause();
  } else if (slideIndex == 1) {
    portfolio.style.display = "none";
    btnl.style.display = "none";
    btnr.style.display = "none";
    cntr.innerHTML = "Hide";
    work1.style.display = "block";
    p1.play();
  }
  // else if (slideIndex == 2) {
  //   portfolio.style.display = "none";
  //   btnl.style.display = "none";
  //   btnr.style.display = "none";
  //   cntr.innerHTML = "Hide";
  //   work2.style.display = "block";
  //   p2.play();
  // }
  else if (slideIndex == 3) {
    portfolio.style.display = "none";
    btnl.style.display = "none";
    btnr.style.display = "none";
    cntr.innerHTML = "Hide";
    work3.style.display = "block";
    p3.play();
  } else if (slideIndex == 4) {
    portfolio.style.display = "none";
    btnl.style.display = "none";
    btnr.style.display = "none";
    cntr.innerHTML = "Hide";
    work4.style.display = "block";
    p4.play();
  }
  // else if (slideIndex == 5) {
  //   portfolio.style.display = "none";
  //   btnl.style.display = "none";
  //   btnr.style.display = "none";
  //   cntr.innerHTML = "Hide";
  // }
});

document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  // Initialize the slideshow
  showSlide(currentSlide);

  // Optional: Add event listeners for navigation (e.g., buttons)
  document.getElementById("prevBtn").addEventListener("click", prevSlide);
  document.getElementById("nextBtn").addEventListener("click", nextSlide);
});

// JavaScript to update the number and trigger the animation
const experienceElement = document.getElementById("experience");
const targetExperience = 5000;
let currentExperience = 0;

// Set up the Intersection Observer
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Start the animation when the target element comes into view
        experienceElement.style.animation = "rise 2s ease-out";
        experienceElement.style.opacity = 1;
        updateExperience();
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
); // Adjust threshold as needed

// Observe the target element
observer.observe(experienceElement);

function updateExperience() {
  const updateInterval = 2; // milliseconds
  const frames = Math.ceil(2000 / updateInterval); // 2000 ms for 2 seconds animation

  const increment = targetExperience / frames;

  const update = setInterval(() => {
    if (currentExperience < targetExperience) {
      experienceElement.textContent = Math.ceil(currentExperience);
      currentExperience += increment;
    } else {
      experienceElement.textContent = targetExperience; // Ensure the final value is exact
      clearInterval(update);
    }
  }, updateInterval);
}
