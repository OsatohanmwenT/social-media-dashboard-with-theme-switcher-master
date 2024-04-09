const darkModeToggleBtn = document.querySelector(".toggle-btn");
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
    darkModeToggleBtn.classList.add("active");
} else {
    darkModeDisabled();
    darkModeToggleBtn.classList.remove("active");
}

darkModeToggleBtn.addEventListener("click", () => {
    // Toggle dark mode
    if (darkMode !== "enabled") {
        darkModeEnabled();
        darkModeToggleBtn.classList.add("active");
    } else {
        darkModeDisabled();
        darkModeToggleBtn.classList.remove("active");
    }
    // Update the dark mode state variable
    darkMode = localStorage.getItem("darkmode");
});