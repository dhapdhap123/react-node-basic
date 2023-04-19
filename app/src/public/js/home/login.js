"use strict";

const id_input = document.getElementById("id"),
  password_input = document.getElementById("password"),
  submit_btn = document.getElementById("submit_btn");

submit_btn.addEventListener("click", login);

function login(e) {
  e.preventDefault();
  const req = {
    id: id.value,
    password: password_input.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("로그인 중 에러 발생");
    });
}
