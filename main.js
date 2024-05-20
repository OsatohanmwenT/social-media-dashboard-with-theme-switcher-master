const darkModeToggle = document.querySelector(".toggle-btn");
const darkModeToggleBtn = document.querySelector(".toggle");
let darkMode = localStorage.getItem("darkmode");

const darkModeEnabled = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkmode", "enabled");
};

const darkModeDisabled = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkmode", null);
};

// Check initial dark mode state and apply it
if (darkMode === "enabled") {
  darkModeEnabled();
  darkModeToggle.classList.add("active");
} else {
  darkModeDisabled();
  darkModeToggle.classList.remove("active");
}

darkModeToggleBtn.addEventListener("click", () => {
  // Toggle dark mode
  if (darkMode !== "enabled") {
    darkModeEnabled();
    darkModeToggle.classList.add("active");
  } else {
    darkModeDisabled();
    darkModeToggle.classList.remove("active");
  }
  // Update the dark mode state variable
  darkMode = localStorage.getItem("darkmode");
});
