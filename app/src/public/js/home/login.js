"use strict";

const id_input = document.getElementById("id"),
  password_input = document.getElementById("password"),
  submit_btn = document.getElementById("submit_btn");

submit_btn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    psword: password_input.value,
  };
  if (!req.id) {
    return alert("아이디를 입력해주세요.");
  }
  if (!req.psword) {
    return alert("비밀번호를 입력해주세요");
  }

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
        if (res.err) return alert(res.err);
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("로그인 중 에러 발생");
    });
}
