const btnChangeText = document.getElementById('btn-change-text');
const contentText = document.getElementById('content-text');

btnChangeText.addEventListener('click', function() {
    contentText.textContent = "Boom! The text has been changed using JavaScript!";
    contentText.classList.add('text-success', 'fw-bold'); 
});

const btnChangeBg = document.getElementById('btn-change-bg');
const btnChangeFont = document.getElementById('btn-change-font');
const styleBox = document.getElementById('style-box');
const boxText = document.getElementById('box-text');

btnChangeBg.addEventListener('click', function() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    styleBox.style.backgroundColor = randomColor;
});
btnChangeFont.addEventListener('click', function() {
    boxText.style.fontSize = '24px';
    boxText.style.fontWeight = 'bold';
    boxText.style.color = '#fff';
});

const btnAddItem = document.getElementById('btn-add-item');
const btnRemoveItem = document.getElementById('btn-remove-item');
const itemList = document.getElementById('item-list');
let itemCount = 1; 
btnAddItem.addEventListener('click', function() {
    itemCount++;
    const newLi = document.createElement('li');
    newLi.className = 'list-group-item';
    newLi.textContent = 'New Item ' + itemCount;
    itemList.appendChild(newLi);
});
btnRemoveItem.addEventListener('click', function() {
    if (itemList.lastElementChild) {
        itemList.removeChild(itemList.lastElementChild);
        itemCount--; 
    } else {
        alert("The list is already empty!");
    }
});