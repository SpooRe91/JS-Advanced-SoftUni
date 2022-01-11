function search() {
   let list = Array.from(document.querySelectorAll("ul li"));
   let word = document.getElementById("searchText").value;
   let count = 0;
   for (const el of list) {
       if (el.innerHTML.includes(word)) {
           el.style.textDecoration = "underline";
           el.style.fontWeight = "bold";
           count++;
       } else {
           el.style.textDecoration = "";
           el.style.fontWeight = "normal";
       }
   }
   document.getElementById("result").textContent = `${count} matches found`
}