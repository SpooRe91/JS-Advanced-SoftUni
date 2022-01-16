function solve() {

    const [input, result] = Array.from(document.querySelectorAll('textarea'));
  
    const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
  
    generateBtn.addEventListener('click', generate);
    buyBtn.addEventListener('click', buy);
  
    const items = [];
  
    function generate(event) {
  
      const tbody = document.querySelector('tbody');
      let furnitures = JSON.parse(input.value);
      for (currFurniture of furnitures) {
  
        let tr = document.createElement('tr');
        let tdImg = document.createElement('td');
        let tdName = document.createElement('td');
        let tdPrice = document.createElement('td');
        let tdDecFactor = document.createElement('td');
        let tdInput = document.createElement('td');
  
        let img = document.createElement('img');
        img.src = currFurniture.img;
        tdImg.appendChild(img);
  
        let item = document.createElement('p');
        item.textContent = currFurniture.name;
        tdName.appendChild(item);
  
        let price = document.createElement('p');
        price.textContent = Number(currFurniture.price);
        tdPrice.appendChild(price);
  
        let decFactorP = document.createElement('p');
        decFactorP.textContent = Number(currFurniture.decFactor);
        tdDecFactor.appendChild(decFactorP);
  
        let inputBox = document.createElement('input');
        inputBox.type = "checkbox";
        tdInput.appendChild(inputBox);
  
        tr.appendChild(tdImg);
        tr.appendChild(tdName);
        tr.appendChild(tdPrice);
        tr.appendChild(tdDecFactor);
        tr.appendChild(tdInput);
        tbody.appendChild(tr);
  
        items.push({
          element: tr,
          isChecked,
          currFurniture
        });
  
        function isChecked() {
          return inputBox.checked;
        }
      }
    }
    function buy(event) {
      let checkboxes = items
        .filter(i => i.isChecked())
        .map(r => ({
          name: r.currFurniture.name,
          price: Number(r.currFurniture.price),
          decFactor: Number(r.currFurniture.decFactor)
        }))
  
      let list = [];
      let totalPrice = 0;
      let totalDecFactor = 0;
      for (let item of checkboxes) {
        list.push(item.name);
        totalPrice += item.price;
        totalDecFactor += item.decFactor;
      }
      result.value = `Bought furniture: ${list.join(", ")}
  Total price: ${totalPrice.toFixed(2)}
  Average decoration factor: ${totalDecFactor / list.length}`;
    }
  }