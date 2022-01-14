function addItem() {

    let items = document.getElementById("items")
    let input =  document.getElementById("newItemText");
    let newItem = document.createElement("li");
    newItem.textContent = input.value;
    items.appendChild(newItem);

    input.value ='';

}