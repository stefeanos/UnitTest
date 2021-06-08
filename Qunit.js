
function successHtml() {
  return `
<div class="form_container">
<form action="success.html">
`;
}

function checkboxHtml() {
  return `
<input type="checkbox" id="checkbox" />
<label for="checkbox">checked</label>`;
}


function elementHtml() {
  return `
    <main class="container">
    <div class="element"></div>
    <div class="element"></div>
    <div class="element"></div>
    <div class="element"></div>
    <div class="element"></div>
    <div class="element"></div>
    <div class="element"></div>
    <div class="element"></div>
    <div class="element"></div>
    </main>`;
}



function submitHtml() {
  return `
<button class="btn btn-light"
type="submit">button</button>`;
}



elements.forEach(function (element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.innerHTML = color;
  selectColor.innerHTML = color;
});



function quiz() {
  let submitBtn;
  submitBtn = submit();
  quizPlay();
  checkbox.disabled = true;
  return submitBtn;

}


function getRandomColor() {

  const letter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random(1) * 16)];
  }
  return color;
}


document.querySelector("button[type=submit]");
elements.forEach(function (element) {
  element.addEventListener("click", function () {
    if (element.innerHTML === selectColor.innerHTML) {
      checkbox.checked = true;
      alert("Du er menneske!");
      submitBtn.disabled = false;
      submitBtn.classList.remove("btn-light");

      submitBtn.classList.add("btn-success");
      console.log(submitBtn);
    } else {
      alert("vennligst bekreft at du er menneske!");
      location.reload(true);
    }

  });
});