function solve() {
  const [input, result] = Array.from(document.querySelectorAll('textarea'));

  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));


  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate(ev) {
    let arr = JSON.parse(input.value)

    for (let i = 0; i < arr.length; i++) {
      let newRow = document.createElement('tr')
      document.getElementsByTagName('tbody')[0].appendChild(newRow);
      let all = document.querySelectorAll('tbody tr');
      let currentRow = all[all.length - 1];
      let imgTd = document.createElement('td');
      let nameTd = document.createElement('td');
      let decFactorTd = document.createElement('td');
      let priceTd = document.createElement('td');

      let newImg = document.createElement('img');
      newImg.src = arr[i]["img"];

      imgTd.appendChild(newImg)
      currentRow.appendChild(imgTd);

      let namePar = document.createElement('p');
      namePar.textContent = arr[i]["name"];
      nameTd.appendChild(namePar);
      currentRow.appendChild(nameTd);

      let pricePar = document.createElement('p');
      pricePar.textContent = arr[i]["price"];
      priceTd.appendChild(pricePar);
      currentRow.appendChild(priceTd);

      let decPar = document.createElement('p');
      decPar.textContent = arr[i]["decFactor"];
      decFactorTd.appendChild(decPar);
      currentRow.appendChild(decFactorTd);


      let newInput = document.createElement('input');
      newInput.type = "checkbox";
      newTd = document.createElement('td');
      newTd.appendChild(newInput);
      currentRow.appendChild(newTd);
    }
  }
  function buy() {
    let furniture = []
    let totalPrice = 0;
    let resultFactor = 0;

    let checkboxes = Array.from(document.querySelectorAll('tbody tr'));

    for (let i = 0; i < checkboxes.length; i++) {
      let currentCheck = checkboxes[i].getElementsByTagName('input')[0];
      if (currentCheck.checked == true) {
        let name = currentCheck.parentNode.parentNode.querySelectorAll('p')[0].textContent;
        let price = currentCheck.parentNode.parentNode.querySelectorAll('p')[1].textContent;
        let factor = currentCheck.parentNode.parentNode.querySelectorAll('p')[2].textContent;
        furniture.push(name);
        totalPrice += Number(price);
        resultFactor += Number(factor);

      }
    }
    result.value = `Bought furniture: ${furniture.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${resultFactor / furniture.length}`
  }


}

