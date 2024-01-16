let counter = 0;
const counterDisplay = document.getElementById('counterDisplay');

function increment() {
    counter++;
    updateDisplay();
}

function decrement() {
    counter--;
    updateDisplay();
}

function reset() {
    counter = 0;
    updateDisplay();
}

function updateDisplay() {
    counterDisplay.textContent = counter;
}
