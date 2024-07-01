function updateDateTime() {
  const now = new Date();
  const eatTime = new Date(now.getTime());
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "Africa/Nairobi",
    timeZoneName: "short",
  };

  const eatTimeString = eatTime.toLocaleString("en-US", options);

  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][eatTime.getUTCDay()];

  document.getElementById("currentTime").textContent = eatTimeString;
  document.getElementById("currentDay").textContent = dayOfWeek;
}

function typeWriter(element, text, speed = 100) {
  let index = 0;

  function type() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  type();
}

function toggleDarkMode() {
  const body = document.body;
  const toggleButton = document.getElementById("darkModeToggle");
  const toggleText = document.getElementById("toggleText");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleText.textContent = "Toggle Light Mode";
  } else {
    toggleText.textContent = "Toggle Dark Mode";
  }

  localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
}

function initDarkMode() {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const toggleText = document.getElementById("toggleText");
  const isDarkMode = localStorage.getItem("darkMode") === "true";

  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    toggleText.textContent = "Toggle Light Mode";
  } else {
    toggleText.textContent = "Toggle Dark Mode";
  }

  darkModeToggle.addEventListener("click", toggleDarkMode);
}

function animateProgressBars() {
  const progressBars = document.querySelectorAll(".progress");
  progressBars.forEach((bar) => {
    const progress = bar.getAttribute("data-progress");
    setTimeout(() => {
      bar.style.width = `${progress}%`;
    }, 500); // Slight delay for visual effect
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Update time and day immediately and then every second
  updateDateTime();
  setInterval(updateDateTime, 1000);

  // Typewriter effect for the main title
  const title = document.getElementById("main-title");
  const titleText = "My Tech Goals for the Next 2 Years";
  typeWriter(title, titleText);

  // Initialize dark mode
  initDarkMode();

    // Animate progress bars
    animateProgressBars();
});
