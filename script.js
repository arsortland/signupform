const password1 = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const message = document.querySelector("span");

const formCheck = () => {
  if (password1.value != password2.value) {
    alert("Password don't match. Please try again.");
  }
};
