h1El = document.querySelector('h1');
buttonEl = document.querySelector('button');
showButton = document.getElementById('show');


h1El.textContent = "Hello";


buttonEl.addEventListener("click", () => {
    h1El.style.display = 'none'
});

showButton.addEventListener("click", () => {
    h1El.style.display = "inline";
})

