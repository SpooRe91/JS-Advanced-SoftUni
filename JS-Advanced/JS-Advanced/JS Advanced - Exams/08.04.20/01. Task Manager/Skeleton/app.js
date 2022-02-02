function solve() {


    let buttonAdd = document.getElementById("add")

    buttonAdd.addEventListener("click", onClick)

    function onClick(ev) {
        ev.preventDefault()
        let taskInput = document.getElementById("task")
        let descriptionInput = document.getElementById("description")
        let dateInput = document.getElementById("date")

        if (taskInput.value && descriptionInput.value && dateInput.value) {
            let article = document.createElement("article")
            let h3 = document.createElement("h3")
            let pDescription = document.createElement("p")
            let pDate = document.createElement("p")
            let div = document.createElement("div")
            div.classList.add("flex")
            let buttonStart = document.createElement("button")
            let buttonDelete = document.createElement("button")
            buttonStart.classList.add("green")
            buttonStart.textContent = "Start"
            buttonDelete.classList.add("red")
            buttonDelete.textContent = "Delete"

            buttonStart.addEventListener("click", onStart)
            buttonDelete.addEventListener("click", onDelete)

            h3.textContent = taskInput.value
            pDescription.textContent = `Description: ${descriptionInput.value}`
            pDate.textContent = `Due Date: ${dateInput.value}`

            div.appendChild(buttonStart)
            div.appendChild(buttonDelete)
            article.appendChild(h3)
            article.appendChild(pDescription)
            article.appendChild(pDate)
            article.appendChild(div)

            document.getElementsByClassName("orange")[0].parentNode.parentNode.children[1].appendChild(article)

            taskInput.value = ""
            descriptionInput.value = ""
            dateInput.value = ""
        }

        function onStart(ev) {
            let first = ev.target.parentNode.children[0]                //selecting the start button 
            let buttonFinish = document.createElement("button")
            buttonFinish.classList.add("orange")
            buttonFinish.textContent = "Finish"

            buttonFinish.addEventListener("click", onFinish)

            ev.target.parentNode.appendChild(buttonFinish)
            document.getElementById("in-progress").appendChild(ev.target.parentNode.parentNode)
            ev.target.parentNode.removeChild(first)                     //removing the start button

        }

        function onDelete(ev) {
            ev.target.parentNode.parentNode.remove()
        }

        function onFinish(ev) {
            document.querySelector("h1.green").parentNode.parentNode.children[1].appendChild(ev.target.parentNode.parentNode)

            ev.target.parentNode.remove()                               //remove all btns

        }
    }
}