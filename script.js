// API = "https://api.genratr.com/?length=16&uppercase&lowercase&special&numbers";

const inputField = document.querySelector("input");
const copybutton = document.getElementById("copy-button");

async function generatePassword() {
  const response = await fetch(
    "https://api.genratr.com/?length=16&uppercase&lowercase&special&numbers"
  );
  const result = await response.json();
  inputField.value = result.password;
}

copybutton.addEventListener("click", function () {
  navigator.clipboard
    .writeText(inputField.value)
    .then(alert("Copied to clipboard"));
});
