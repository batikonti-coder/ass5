const hoverBox = document.getElementById('hover-box');

hoverBox.addEventListener('mouseover', function() {
    hoverBox.style.backgroundColor = '#e74c3c'; 
    hoverBox.textContent = 'Mouse is inside! 🛑';
});

hoverBox.addEventListener('mouseout', function() {
    hoverBox.style.backgroundColor = '#3498db';
    hoverBox.textContent = 'Hover over me! 🔵';
});

const liveInput = document.getElementById('live-input');
const liveOutput = document.getElementById('live-output');

liveInput.addEventListener('keyup', function() {
    liveOutput.textContent = liveInput.value;
});

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const calcResult = document.getElementById('calc-result');

function getNumbers() {
    const n1 = Number(num1Input.value);
    const n2 = Number(num2Input.value);
    return { n1, n2 };
}

document.getElementById('btn-add').addEventListener('click', function() {
    const nums = getNumbers();
    calcResult.textContent = nums.n1 + nums.n2;
});

document.getElementById('btn-sub').addEventListener('click', function() {
    const nums = getNumbers();
    calcResult.textContent = nums.n1 - nums.n2;
});

document.getElementById('btn-mul').addEventListener('click', function() {
    const nums = getNumbers();
    calcResult.textContent = nums.n1 * nums.n2;
});

document.getElementById('btn-div').addEventListener('click', function() {
    const nums = getNumbers();
    if (nums.n2 === 0) {
        calcResult.textContent = "Error (Divide by 0)";
    } else {
        calcResult.textContent = nums.n1 / nums.n2;
    }
});