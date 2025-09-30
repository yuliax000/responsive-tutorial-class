const modeButton = document.getElementById("modeButton");

// function to toggle between dark mode and light mode
// takes in bool : if true set to dark if false set to light
function switchModes(toDark){
  if(toDark){
    modeButton.textContent = "Light Mode";
  } else {
    modeButton.textContent = "Dark Mode";
  }
}