"use strict";

const id_input = document.getElementById("id"),
  password_input = document.getElementById("password"),
  confirmPassword = document.getElementById("confirm_password"),
  name = document.getElementById("name"),
  submit_btn = document.getElementById("submit_btn");

submit_btn.addEventListener("click", register);

function register() {
  const req = {
    id: id.value,
    name: name.value,
    psword: password_input.value,
  };
  if (req.psword !== confirmPassword.value) {
    return alert("비밀번호 불일치!");
  }
  if (!id.value) {
    return alert("아이디를 입력해주세요.");
  }
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
