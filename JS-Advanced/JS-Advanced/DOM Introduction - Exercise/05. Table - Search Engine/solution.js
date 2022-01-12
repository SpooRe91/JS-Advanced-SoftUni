function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        let text = document.getElementById("searchField").value.toLowerCase();
        let elements = Array.from(document.querySelectorAll("tbody tr"));
        elements.forEach((el) => {
            if (el.textContent.toLowerCase().includes(text)) {
                el.classList.add("select");
            } else {
                el.classList.remove("select");
            }

        })
        document.getElementById("searchField").value = "";

    }

}