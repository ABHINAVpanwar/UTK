window.addEventListener("load", function () {
  // Hide preloader and manage animations
  document.getElementById("preloader").style.display = "none";
  document.getElementById("PL").style.display = "none";
  const textElement = document.getElementById("T1");
  const textElm = document.getElementById("T2");

  if (textElement && textElm) {
    textElement.classList.add("animation");
    setTimeout(() => {
      textElm.style.opacity = 1;
      textElement.style.opacity = 1;
    }, 0);
  }

  // IntersectionObserver logic
  const elements = [
    document.getElementById("about"),
    document.getElementById("port"),
    document.getElementById("working"),
    document.getElementById("who-am-i"),
    document.getElementById("what-i-do"),
    document.getElementById("how-i-do"),
    document.getElementById("where-am-i"),
    document.getElementById("one"),
    document.getElementById("two"),
    document.getElementById("three"),
    document.getElementById("four"),
    document.getElementById("five"),
    document.getElementById("adj1"),
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Add class to the observed element
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is visible
  );

  // Observe each element
  elements.forEach((el) => {
    if (el) observer.observe(el);
  });

  // JavaScript to update the number and trigger the animation
  const experienceElement = document.getElementById("experience");
  const targetExperience = 5000;
  let currentExperience = 0;

  // Set up the Intersection Observer
  const observer2 = new IntersectionObserver(
    (entries, observer2) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start the animation when the target element comes into view
          experienceElement.style.animation = "rise 2s ease-out";
          experienceElement.style.opacity = 1;
          updateExperience();
          observer2.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  ); // Adjust threshold as needed

  // Observe the target element
  observer2.observe(experienceElement);

  plus = document.getElementById("plus");

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
        plus.style.display = "block";
      }
    }, updateInterval);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to show the overlay and the div after a specific time
  function showOverlayAndDiv() {
    var overlay = document.getElementById("overlay");
    var div = document.getElementById("S7");

    overlay.style.display = "block";
    div.style.display = "block";

    // Trigger a reflow before adding the 'visible' class
    overlay.offsetHeight;
    div.offsetHeight;

    overlay.style.filter = "blur(5px)"; // Adjust the blur intensity as needed
    div.style.opacity = 1;
  }

  // Function to hide the overlay and the div
  function hideOverlayAndDiv() {
    var overlay = document.getElementById("overlay");
    var div = document.getElementById("S7");

    overlay.style.filter = "none";
    overlay.style.display = "none";
    div.style.display = "none";

    setTimeout(function () {
      Notification.requestPermission().then((perm) => {
        if (perm == "granted") {
          setTimeout(function () {
            new Notification("Appreciate Your Visit!", {
              body: "Thanks for stopping by My Website. Explore more or reach out if you need anything.",
              icon: "./IMAGE/logo.jpg",
            });
          }, 5000);
        }
      });
    }, 5000);
  }

  // Call showOverlayAndDiv after a delay (e.g., 3000 milliseconds for 3 seconds)
  // setTimeout(showOverlayAndDiv, 10000);

  // Add a click event listener to the overlay to hide it when clicked
  document
    .getElementById("overlay")
    .addEventListener("click", hideOverlayAndDiv);
});

let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");
t1 = document.getElementById("T1");
t2 = document.getElementById("T2");
B1 = document.getElementById("B1");
DA = document.getElementById("DA");
S2 = document.getElementById("S2");
S3 = document.getElementById("S3");
S4 = document.getElementById("S4");
S5 = document.getElementById("S5");
S6 = document.getElementById("S6");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
  S2.style.display = S2.style.display === "none" ? "flex" : "none";
  S3.style.display = S3.style.display === "none" ? "flex" : "none";
  S4.style.display = S4.style.display === "none" ? "flex" : "none";
  S5.style.display = S5.style.display === "none" ? "flex" : "none";
  S6.style.display = S6.style.display === "none" ? "flex" : "none";
  t1.style.display = t1.style.display === "none" ? "block" : "none";
  t2.style.display = t2.style.display === "none" ? "block" : "none";
  B1.style.display = B1.style.display === "none" ? "flex" : "none";
  DA.style.display = DA.style.display === "none" ? "flex" : "none";
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});

document.getElementById("clicked1").addEventListener("click", function () {
  if (window.innerWidth <= 900) {
    S2.style.display = S2.style.display === "none" ? "flex" : "none";
    S3.style.display = S3.style.display === "none" ? "flex" : "none";
    S4.style.display = S4.style.display === "none" ? "flex" : "none";
    S5.style.display = S5.style.display === "none" ? "flex" : "none";
    S6.style.display = S6.style.display === "none" ? "flex" : "none";
  }
  t1.style.display = "block";
  t2.style.display = "block";
  B1.style.display = "block";
  DA.style.display = "flex";
});

document.getElementById("clicked2").addEventListener("click", function () {
  if (window.innerWidth <= 900) {
    S2.style.display = S2.style.display === "none" ? "flex" : "none";
    S3.style.display = S3.style.display === "none" ? "flex" : "none";
    S4.style.display = S4.style.display === "none" ? "flex" : "none";
    S5.style.display = S5.style.display === "none" ? "flex" : "none";
    S6.style.display = S6.style.display === "none" ? "flex" : "none";
  }
  t1.style.display = "block";
  t2.style.display = "block";
  B1.style.display = "block";
  DA.style.display = "flex";
});

document.getElementById("clicked3").addEventListener("click", function () {
  if (window.innerWidth <= 900) {
    S2.style.display = S2.style.display === "none" ? "flex" : "none";
    S3.style.display = S3.style.display === "none" ? "flex" : "none";
    S4.style.display = S4.style.display === "none" ? "flex" : "none";
    S5.style.display = S5.style.display === "none" ? "flex" : "none";
    S6.style.display = S6.style.display === "none" ? "flex" : "none";
  }
  t1.style.display = "block";
  t2.style.display = "block";
  B1.style.display = "block";
  DA.style.display = "flex";
});

document.getElementById("clicked4").addEventListener("click", function () {
  if (window.innerWidth <= 900) {
    S2.style.display = S2.style.display === "none" ? "flex" : "none";
    S3.style.display = S3.style.display === "none" ? "flex" : "none";
    S4.style.display = S4.style.display === "none" ? "flex" : "none";
    S5.style.display = S5.style.display === "none" ? "flex" : "none";
    S6.style.display = S6.style.display === "none" ? "flex" : "none";
  }
  t1.style.display = "block";
  t2.style.display = "block";
  B1.style.display = "block";
  DA.style.display = "flex";
});

document.getElementById("clicked5").addEventListener("click", function () {
  if (window.innerWidth <= 900) {
    S2.style.display = S2.style.display === "none" ? "flex" : "none";
    S3.style.display = S3.style.display === "none" ? "flex" : "none";
    S4.style.display = S4.style.display === "none" ? "flex" : "none";
    S5.style.display = S5.style.display === "none" ? "flex" : "none";
    S6.style.display = S6.style.display === "none" ? "flex" : "none";
  }
  t1.style.display = "block";
  t2.style.display = "block";
  B1.style.display = "block";
  DA.style.display = "flex";
});

video = document.getElementById("myVideo2");
var player = new Vimeo.Player(video);
vide0 = document.getElementById("myVideo");

document.getElementById("B1").addEventListener("click", async function () {
  try {
    // Check current state
    const isPlaying = video.style.display === "block";

    if (!isPlaying) {
      // Show video and hide other elements
      video.style.display = "block";
      t1.style.display = "none";
      t2.style.display = "none";
      if (window.innerWidth <= 900) {
        hamMenuIcon.style.display = "none";
      }

      // Pause background video
      vide0.pause();

      // Ensure player is ready before playing
      await player.ready();
      await player.play();

      this.innerHTML = "PAUSE SHOWREEL";
    } else {
      // Hide video and show other elements
      video.style.display = "none";
      t1.style.display = "block";
      t2.style.display = "block";
      if (window.innerWidth <= 900) {
        hamMenuIcon.style.display = "block";
      }

      // Pause showreel and play background video
      await player.pause();
      vide0.play();

      this.innerHTML = "PLAY SHOWREEL";
    }
  } catch (error) {
    console.error("Error controlling video:", error);
    // Fallback behavior
    video.style.display = video.style.display === "block" ? "none" : "block";
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

midsec = document.getElementById("midsec");
arc = document.getElementById("arc");
var color = [
  "#eb9191",
  "#e0be99",
  "#b4be89",
  "#e49eff",
  "#ac8fff",
  "#f1c751",
  "#fffdf6",
];

midsec.addEventListener("click", function () {
  arc.style.borderColor = color[Math.floor(Math.random() * color.length)];
});
