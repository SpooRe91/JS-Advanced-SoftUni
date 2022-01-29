function solve() {
   document.getElementsByClassName('btn create')[0].type = 'button';
   let creator = document.getElementById("creator");
   let title = document.getElementById("title");
   let category = document.getElementById("category");
   let content = document.getElementById("content");
   let createBtn = document.getElementsByClassName('btn create')[0]


   createBtn.addEventListener("click", create);
   function create() {
      let article = document.createElement("article");

      let h1 = document.createElement("h1");
      h1.textContent = title.value;

      let categoryP = document.createElement("p");
      let firstStrong = document.createElement("strong");
      firstStrong.textContent = category.value
      categoryP.textContent = "Category: ";
      categoryP.appendChild(firstStrong);

      let creatorP = document.createElement("p");
      let secondStrong = document.createElement("strong");
      secondStrong.textContent = creator.value;
      creatorP.textContent = "Creator: ";
      creatorP.appendChild(secondStrong)

      let contentP = document.createElement("p");
      contentP.textContent = content.value

      let divButtons = document.createElement("div");
      divButtons.classList = "buttons";

      let deleteBtn = document.createElement("button");
      deleteBtn.classList = "btn delete";
      deleteBtn.textContent = "Delete"

      let archiveBtn = document.createElement("button")
      archiveBtn.classList = "btn archive";
      archiveBtn.textContent = "Archive"

      divButtons.appendChild(deleteBtn);
      divButtons.appendChild(archiveBtn);

      article.appendChild(h1);
      article.appendChild(categoryP);
      article.appendChild(creatorP);
      article.appendChild(contentP);
      article.appendChild(divButtons);

      document.querySelector("main section").appendChild(article);

      title.value = ""
      creator.value = ""
      category.value = ""
      content.value = ""



      deleteBtn.addEventListener("click", deletes)

      function deletes() {
         document.querySelector("main section").removeChild(article)
      }



      archiveBtn.addEventListener("click", archive)

      function archive() {
         let ol = document.querySelector("ol")
         let li = document.createElement("li")
         li.textContent = h1.textContent;
         ol.appendChild(li)
         let ordered = Array.from(document.querySelectorAll("li")).sort((a, b) => a.textContent.localeCompare(b.textContent))
         ol.innerHTML = ordered.map(li => li.outerHTML).join('');

         document.querySelector("main section").removeChild(article)
      }
   }


}
