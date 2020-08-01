document.addEventListener("DOMContentLoaded", function () {
  function createParagraph() {
    let para = document.createElement("p");
    para.textContent = "Vous avez clické sur le bouton";
    document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll("button");

  for (let i = 0; buttons.length; i++) {
    buttons[i].addEventListener("click", createParagraph);
  }
});
