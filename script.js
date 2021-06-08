//Model
let element = "element";
let checked = "Er du menneske?";
let selectedColor = "Velg den heksadesimale fargen";
let verification = "for verifisering";
let options = "submit";
let success = "#";
let button = "btn btn-light";
let start = "checkbox";

//viwe
showQuiz();
function showQuiz() {
    document.getElementById("app").innerHTML = `
    <div class="form_container">
    <form action="success.html" ${success}>
    <h1>${selectedColor}:<span id="selectColor"></span>${verification}</h1>
    <input type="checkbox" id="checkbox" />
    <label for="${start}x">${checked}</label>
    <button class="${button}" type="submit">${options}</button></form>
    <main class="container">
    <div class="element">${element}</div>
    <div class="element">${element}</div>
    <div class="element">${element}</div>
    <div class="element">${element}</div>
    <div class="element">${element}</div>
    <div class="element">${element}</div>
    <div class="element">${element}</div>
    <div class="element">${element}</div>
    <div class="element">${element}</div>
    </main>
    </div>
    `;
}



// Assign color to elements

//controller
let submitBtn = quiz();
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

function quizPlay() {
    elements = document.querySelectorAll(".element");
}

function submit() {
    showQuiz();
    let submitBtn;
    submitBtn = document.querySelector("button[type=submit]");
    submitBtn.disabled = true;
    return submitBtn;
}

//generere tilfeldig fargefunksjon
function getRandomColor() {

    const letter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random(1) * 16)];
    }
    return color;
}

// sjekk om den rette fargen;;
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

