function addItem() {

    let items = document.getElementById("items")
    let input =  document.getElementById("newItemText");
    let newItem = document.createElement("li");

    newItem.textContent = input.value;

    let linkText = document.createTextNode("[Delete]");
    let anchor = document.createElement("a");
    anchor.href = '#'

    anchor.addEventListener("click", deleteItem);
    
    anchor.appendChild(linkText);
    newItem.appendChild(anchor)
    items.appendChild(newItem);

function deleteItem() {
    newItem.parentNode.removeChild(newItem);
    //newItem.remove(); 
}

    input.value ='';

}