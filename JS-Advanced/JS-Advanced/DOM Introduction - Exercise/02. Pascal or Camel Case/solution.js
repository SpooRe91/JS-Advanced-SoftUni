function solve(string, type) {
  string = document.getElementById("text").value;
  type = document.getElementById("naming-convention").value;
  let result = '';

  string = string.toLowerCase().split(' ');

  if (type === "Camel Case") {
      for (let i = 1; i < string.length; i++) {
          string[i] = string[i][0].toUpperCase()+string[i].slice(1);
      }
      document.getElementById("result").textContent = string.join('');
  } else if (type === "Pascal Case") {
      for (let i = 0; i < string.length; i++) {
          string[i] = string[i][0].toUpperCase()+string[i].slice(1);
      }
      document.getElementById("result").textContent = string.join('');
  } else {
      result = 'Error!'
      document.getElementById("result").textContent = result;
  }
}