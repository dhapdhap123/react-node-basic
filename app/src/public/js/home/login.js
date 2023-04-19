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
  console.log(req);
}
