function calc() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let result = Number(a) + Number(b);
    document.getElementById("sum").value = Number(result);
}