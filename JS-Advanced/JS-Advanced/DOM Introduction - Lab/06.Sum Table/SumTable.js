function sumTable() {
    let rows = document.querySelectorAll("table tr");
    let sum = 0;
    for (let i = 1; i < rows.length; i++) {
        let current = rows[i].lastElementChild

        sum += Number(current.textContent);
    }
    document.getElementById("sum").textContent = sum;

}