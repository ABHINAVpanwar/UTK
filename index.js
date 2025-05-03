// Initialize variables at the top
let player;
let vide0;
let currentSlide = 0;
let currentExperience = 0;
const targetExperience = 5000;

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Vimeo players
  const video = document.getElementById("myVideo2");
  vide0 = document.getElementById("myVideo");
  player = new Vimeo.Player(video);

  // Preload the player
  player
    .ready()
    .then(() => {
      console.log("Vimeo player ready");
    })
    .catch((error) => {
      console.error("Vimeo player error:", error);
    });

  // Showreel button functionality
  document.getElementById("B1").addEventListener("click", async function () {
    const btn = this;
    const isPlaying = video.style.display === "block";

    try {
      btn.disabled = true;
      btn.innerHTML = isPlaying ? "LOADING..." : "PAUSING...";

      if (!isPlaying) {
        // Show video and hide other elements
        video.style.display = "block";
        document.getElementById("T1").style.display = "none";
        document.getElementById("T2").style.display = "none";

        if (window.innerWidth <= 900) {
          document.getElementById("ham-menu").style.display = "none";
        }

        // Pause background video
        vide0.pause();

        // Play showreel
        await player.play();
        btn.innerHTML = "PAUSE SHOWREEL";
      } else {
        // Hide video and show other elements
        video.style.display = "none";
        document.getElementById("T1").style.display = "block";
        document.getElementById("T2").style.display = "block";

        if (window.innerWidth <= 900) {
          document.getElementById("ham-menu").style.display = "block";
        }

        // Pause showreel and play background
        await player.pause();
        vide0.play();
        btn.innerHTML = "PLAY SHOWREEL";
      }
    } catch (error) {
      console.error("Video control error:", error);
      // Fallback behavior
      video.style.display = isPlaying ? "none" : "block";
      btn.innerHTML = isPlaying ? "PLAY SHOWREEL" : "PAUSE SHOWREEL";
    } finally {
      btn.disabled = false;
    }
  });

  // Rest of your existing code...
  window.addEventListener("load", function () {
    // Preloader and initial animations
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

    // IntersectionObserver setup
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
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    // Experience counter
    const experienceElement = document.getElementById("experience");
    const plus = document.getElementById("plus");

    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            experienceElement.style.animation = "rise 2s ease-out";
            experienceElement.style.opacity = 1;
            updateExperience();
            observer2.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (experienceElement) {
      observer2.observe(experienceElement);
    }

    function updateExperience() {
      const updateInterval = 2;
      const frames = Math.ceil(2000 / updateInterval);
      const increment = targetExperience / frames;

      const update = setInterval(() => {
        if (currentExperience < targetExperience) {
          experienceElement.textContent = Math.ceil(currentExperience);
          currentExperience += increment;
        } else {
          experienceElement.textContent = targetExperience;
          clearInterval(update);
          if (plus) plus.style.display = "block";
        }
      }, updateInterval);
    }
  });

  // Navigation and other event listeners...
  const hamMenuIcon = document.getElementById("ham-menu");
  const navBar = document.getElementById("nav-bar");
  const navLinks = navBar.querySelectorAll("li");

  if (hamMenuIcon && navBar) {
    hamMenuIcon.addEventListener("click", () => {
      navBar.classList.toggle("active");
      hamMenuIcon.classList.toggle("fa-times");

      const sections = ["S2", "S3", "S4", "S5", "S6"];
      const elements = ["T1", "T2", "B1", "DA"];

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el)
          el.style.display = el.style.display === "none" ? "flex" : "none";
      });

      elements.forEach((id) => {
        const el = document.getElementById(id);
        if (el)
          el.style.display = el.style.display === "none" ? "block" : "none";
      });
    });
  }

  // Navigation link clicks
  for (let i = 1; i <= 5; i++) {
    const link = document.getElementById(`clicked${i}`);
    if (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 900) {
          ["S2", "S3", "S4", "S5", "S6"].forEach((id) => {
            const el = document.getElementById(id);
            if (el)
              el.style.display = el.style.display === "none" ? "flex" : "none";
          });
        }

        ["T1", "T2", "B1"].forEach((id) => {
          const el = document.getElementById(id);
          if (el) el.style.display = "block";
        });

        const da = document.getElementById("DA");
        if (da) da.style.display = "flex";
      });
    }
  }

  // Portfolio slideshow
  showDivs(1);

  // Portfolio controls
  const funk = document.getElementById("funk");
  if (funk) {
    funk.addEventListener("click", function () {
      const links = [
        "https://utkarshpanwar11.artstation.com/projects/rJZ3mm",
        "https://utkarshpanwar11.artstation.com/projects/zPPlbw",
        "https://utkarshpanwar11.artstation.com/projects/ob20dL",
      ];
      if (slideIndex >= 1 && slideIndex <= 3) {
        window.open(links[slideIndex - 1], "_blank");
      }
    });
  }

  // Video portfolio controls
  const portfolio = document.getElementById("portfolio");
  const cntr = document.getElementById("cntr");
  const btnl = document.getElementById("btnl");
  const btnr = document.getElementById("btnr");

  const works = {
    1: document.getElementById("work1"),
    3: document.getElementById("work3"),
    4: document.getElementById("work4"),
  };

  const players = {
    1: new Vimeo.Player(works[1]),
    3: new Vimeo.Player(works[3]),
    4: new Vimeo.Player(works[4]),
  };

  if (cntr) {
    cntr.addEventListener("click", function () {
      if (this.innerHTML == "Hide") {
        portfolio.style.display = "block";
        if (btnl) btnl.style.display = "block";
        if (btnr) btnr.style.display = "block";
        this.innerHTML = "View";

        Object.values(works).forEach((work) => {
          if (work) work.style.display = "none";
        });

        Object.values(players).forEach((p) => p.pause());
      } else if (works[slideIndex]) {
        portfolio.style.display = "none";
        if (btnl) btnl.style.display = "none";
        if (btnr) btnr.style.display = "none";
        this.innerHTML = "Hide";

        works[slideIndex].style.display = "block";
        players[slideIndex].play();
      }
    });
  }

  // Video slideshow
  const slides = document.querySelectorAll(".slide");
  if (slides.length > 0) {
    showSlide(currentSlide);

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (prevBtn) prevBtn.addEventListener("click", prevSlide);
    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
  }

  // Arc color changer
  const midsec = document.getElementById("midsec");
  const arc = document.getElementById("arc");
  const colors = [
    "#eb9191",
    "#e0be99",
    "#b4be89",
    "#e49eff",
    "#ac8fff",
    "#f1c751",
    "#fffdf6",
  ];

  if (midsec && arc) {
    midsec.addEventListener("click", function () {
      arc.style.borderColor = colors[Math.floor(Math.random() * colors.length)];
    });
  }
});

// Slideshow functions
function showDivs(n) {
  const x = document.getElementsByClassName("mySlides");
  if (x.length === 0) return;

  slideIndex = n > x.length ? 1 : n < 1 ? x.length : n;

  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex - 1].style.display = "block";
}

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (slides.length === 0) return;

  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.style.display = i === currentSlide ? "block" : "none";
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}
