window.addEventListener('load', solve);

function solve() {
    document.getElementById("add").type = "button";
    let modelInput = document.getElementById("model")
    let yearInput = document.getElementById("year")
    let descriptionInput = document.getElementById("description")
    let priceInput = document.getElementById("price")
    let buttonAdd = document.getElementById("add")
    let total = 0;

    let tBody = document.getElementById("furniture-list")

    buttonAdd.addEventListener("click", onAdd);

    function onAdd() {
        if (modelInput.value != "" && descriptionInput.value != "" && yearInput.value > 0 && priceInput.value > 0 && yearInput.value != "" && priceInput.value != "") {
            let rowInfo = document.createElement("tr")
            rowInfo.classList.add("info");
            let tdModel = document.createElement("td")
            tdModel.textContent = modelInput.value;
            let tdPrice = document.createElement("td")
            tdPrice.textContent = Number(priceInput.value).toFixed(2);

            rowInfo.appendChild(tdModel)
            rowInfo.appendChild(tdPrice);

            let td = document.createElement("td")
            td.innerHTML = "<button class='moreBtn'>More Info</button> <button class='buyBtn'>Buy it</button>";

            rowInfo.appendChild(td)

            let rowHide = document.createElement("tr")
            rowHide.classList.add("hide");
            let tdYear = document.createElement("td")
            tdYear.textContent = `Year: ${yearInput.value}`
            let tdDesc = document.createElement("td");
            tdDesc.setAttribute("colspan", 3)
            tdDesc.textContent = `Description: ${descriptionInput.value}`
            rowHide.appendChild(tdYear)
            rowHide.appendChild(tdDesc)

            tBody.appendChild(rowInfo)
            tBody.appendChild(rowHide)

            Array.from(document.querySelectorAll(".moreBtn")).forEach((e) => e.addEventListener("click", onClick))

            function onClick(ev) {
                if (ev.target.textContent == "More Info") {
                    ev.target.textContent = "Less Info";
                    ev.target.parentNode.parentNode.parentNode.children[1].style.display = "contents"
                } else if (ev.target.textContent == "Less Info") {
                    ev.target.textContent = "More Info";
                    ev.target.parentNode.parentNode.parentNode.children[1].style.display = "none"
                }
            }
            document.querySelector(".buyBtn").addEventListener("click", onBuy);

            function onBuy(ev) {

                total += Number(tdPrice.textContent)

                document.querySelector(".total-price").textContent = total.toFixed(2);

                ev.target.parentNode.parentNode.parentNode.removeChild(rowHide)
                ev.target.parentNode.parentNode.parentNode.removeChild(rowInfo)
            }
            modelInput.value = "";
            yearInput.value = "";
            descriptionInput.value = "";
            priceInput.value = "";
        }
    }
}
