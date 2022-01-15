function addItem() {

    let inputText = document.getElementById('newItemText');
    let inputValue = document.getElementById('newItemValue');

    let newOption = document.createElement('OPTION');
    newOption.textContent = inputText.value;
    newOption.value = inputValue.value;
    document.getElementById('menu').appendChild(newOption);

    inputText.value = '';
    inputValue.value = '';
}
