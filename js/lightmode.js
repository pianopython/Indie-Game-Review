const toggle = document.getElementById("lightModeToggle");
const body = document.body;
let lightModeEnabled = false;

toggle.addEventListener("click", function() {
    body.classList.toggle("lightMode");
    if (lightModeEnabled == false) {
        toggle.innerHTML = "Dark Mode";
        lightModeEnabled = true;
    } else {
        toggle.innerHTML = "Light Mode";
        lightModeEnabled = false;
    }
})