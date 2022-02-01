function solution() {
    document.querySelector(".container").addEventListener("click", onClick)

    function onClick(ev) {
        
        let input = document.querySelector("input");
        let newLi = document.createElement("li");
        newLi.classList = "gift";
        let allUL = document.querySelectorAll("ul");
        let allButtons = document.querySelectorAll("button");

        let buttonSend = document.createElement("button");
        buttonSend.id = "sendButton";
        buttonSend.textContent = "Send";
        let buttonDiscard = document.createElement("button");
        buttonDiscard.id = "discardButton";
        buttonDiscard.textContent = "Discard";

        if (ev.target == allButtons[0]) {
            newLi.textContent = input.value;
            newLi.appendChild(buttonSend);
            newLi.appendChild(buttonDiscard)
            allUL[0].appendChild(newLi);
            let ordered = Array.from(allUL[0].children).sort((a, b) => a.textContent.localeCompare(b.textContent))
            allUL[0].innerHTML = ordered.map(li => li.outerHTML).join('');
            input.value = ""
        }

        if (ev.target.id == "sendButton") {
            allUL[1].appendChild(ev.target.parentNode);
            ev.target.parentNode.children[1].remove();
            ev.target.parentNode.children[0].remove();
        }

        if (ev.target.id == "discardButton") {
            ev.target.parentNode.children[0].remove();
            allUL[2].appendChild(ev.target.parentNode);
            ev.target.parentNode.children[0].remove();
        }

    }
}