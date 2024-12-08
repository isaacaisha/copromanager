// Function to toggle the theme
function toggleTheme() {
  const isDarkMode = document.body.classList.toggle("dark-mode");

  // Save the current theme in localStorage
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");

  // Update the toggle button state
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.checked = isDarkMode;
  }

}

// On page load, apply the saved theme
window.addEventListener("load", function () {
  const savedTheme = localStorage.getItem("theme");
  const isDarkMode = savedTheme === "dark";

  // Apply the saved theme
  document.body.classList.toggle("dark-mode", isDarkMode);

  // Update the toggle button state
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.checked = isDarkMode;
  }

  // Add smooth transitions for a better user experience
  document.body.style.transition = "background-color 0.3s, color 0.3s";

});

// Attach event listener for theme toggle button
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("change", toggleTheme);
}
