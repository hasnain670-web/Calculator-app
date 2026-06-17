function appendValue(value) {
    document.getElementById('display').value += value;

}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculator() {
    let display = document.getElementById('display');

    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = 'Error';
    }

}
function deleteone() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (
        key >= '0' && key <= '9' ||
        key === '+' || key === '-' ||
        key === '*' || key === '/' ||
        key === '.' || key === '%'
    ) {
        appendValue(key);
    }
    else if (key === 'Enter') {
        calculator();
    }
    else if (key === 'Backspace') {
        deleteone();
    }
    else if (key === 'Escape') {
        clearDisplay();
    }

});