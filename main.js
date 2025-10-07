const modeButton = document.getElementById("modeButton");
let islightMode = true;
// function to toggle between dark mode and light mode
// takes in bool : if true set to dark if false set to light
function switchModes(toDark) {
  if (toDark) {
    modeButton.textContent = "Light Mode";
    islightMode = false;
  } else {
    modeButton.textContent = "Dark Mode";
    islightMode = true;
  }
}

modeButton.addEventListener("click", () => {
  switchModes(islightMode);
});

// when page loads, test the current user color mode preference
let checkDarkMode = window.matchMedia("(prefers-color-scheme:dark)");

// if above test is true, user prefers dark mode
if (checkDarkMode.matches) {
  islightMode = false;
  switchModes(true);
}
