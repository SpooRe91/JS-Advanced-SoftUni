window.addEventListener('load', solve);

function solve() {

    let description = document.getElementById("description");
    let name = document.getElementById("client-name");
    let phone = document.getElementById("client-phone");
    let button = document.querySelector("button");
    let type = document.getElementById("type-product")
    let receivedSection = document.getElementById("received-orders");
    let completedSection = document.getElementById("completed-orders");

    receivedSection.addEventListener("click", manipulateRepair)
    completedSection.addEventListener("click", clear)

    button.addEventListener("click", onSubmit);

    function clear(ev) {
        if (ev.target.className == "clear-btn") {
            completedSection.innerHTML =`<h2>Completed orders:</h2>
            <img src="./style/img/completed-order.png">
            <button class="clear-btn">Clear</button>`
            }
    }

    function onSubmit(ev) {
        ev.preventDefault();

        if (description.value && name.value && phone.value) {
            let newDiv = document.createElement("div");
            newDiv.className = "container";
            newDiv.innerHTML = `<h2>Product type for repair: ${type.value}</h2>
            <h3>Client information: ${name.value}, ${phone.value}</h3> 
            <h4>Description of the problem: ${description.value}</h4>
            <button class="start-btn">Start repair</button> 
            <button class="finish-btn" disabled>Finish repair</button>`
            receivedSection.appendChild(newDiv)

            description.value = ""
            name.value = ""
            phone.value = ""
        }
    }

    function manipulateRepair(ev) {
        if (ev.target.className == "start-btn") {
            ev.target.disabled = true;
            ev.target.parentNode.children[4].disabled = false;
        } else if (ev.target.className == "finish-btn") {
            let div = ev.target.parentNode
            ev.target.parentNode.remove()
            div.removeChild(div.children[3])
            div.removeChild(div.lastChild)
            div = div.outerHTML
            completedSection.innerHTML += div
        }
    }

}