function addItem() {

    let items = document.getElementById("items")
    let input =  document.getElementById("newItemText");
    let newItem = document.createElement("li");
    newItem.textContent = input.value;
    items.appendChild(newItem);

    input.value ='';

}


// function addItem() {
//     let text = document.getElementById('newItemText').value;
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(text));
//     document.getElementById("items").appendChild(li);
//       //clearing the input:
//     document.getElementById('newItemText').value = '';
//   } 
  