"use strict";

const id_input = document.getElementById("id"),
  password_input = document.getElementById("password"),
  confirmPassword = document.getElementById("confirm_password"),
  name = document.getElementById("name"),
  submit_btn = document.getElementById("submit_btn");

submit_btn.addEventListener("click", register);

function register(e) {
  e.preventDefault();
  const req = {
    id: id.value,
    name: name.value,
    psword: password_input.value,
    confirmPassword: confirmPassword.value,
  };
  console.log(req);
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("회원가입 중 에러 발생");
    });
}
