function generateReport() {
    let checkboxes = document.querySelectorAll('table thead tr th input'); //list with all checkboxes
    let rows = document.querySelectorAll('tbody tr');   //list with all rows
    let output = [];
    for (let i = 0; i < rows.length; i++) {
        let obj = {};

        //get the textContent of every row
        let values = Array.from(rows[i].getElementsByTagName('td')).map(el => el.textContent);
        
        //see if it is checked and get all the values of the row
        for (let j = 0; j < checkboxes.length; j++) {
            if (checkboxes[j].checked) {
                obj[checkboxes[j].name] = values[j];
            }
        }
        output.push(obj);
    }
    document.querySelector('#output').value = JSON.stringify(output);
}