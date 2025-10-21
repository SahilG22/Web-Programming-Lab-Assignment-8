const input = document.getElementById('input');
const btn = document.querySelectorAll('button');
function calculate(n) {
        return new Function('return ' + n)();
}
function ops(btnValue) {
    if (btnValue === 'C') {
        input.value = '';
    } else if (btnValue === 'DEL') {
        input.value = input.value.slice(0, -1);
    } else if (btnValue === '=') {
        input.value = calculate(input.value);
    } else {
        input.value += btnValue;
    }
}
btn.forEach(button => {
    let btnValue = button.innerText;
    button.addEventListener('click', function () {
        ops(btnValue);
    });
});