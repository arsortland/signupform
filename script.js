// const inputs = document.querySelectorAll("input");
const passwords = document.querySelectorAll(".error");
const password1 = document.querySelector("#password");
const formCheck = () => {
  passwords.forEach((pw) => {
    if (pw.textContent !== "") {
      alert("noe");
    }
  });
};
