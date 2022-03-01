import { postBook, getBooks, deleteBook, editBook, getBookById } from './requests.js';
import { render } from 'https://unpkg.com/lit-html?module'
import { tableTemp } from './template.js';

document.addEventListener("click", click);
document.addEventListener("submit", onSubmit);
let tempId;
let tempAuthor;
let tempTitle;
let submitText = "Submit"

update()

async function click(ev) {
   const target = ev.target

   if (target.tagName == "BUTTON" && target.textContent == "LOAD ALL BOOKS") {
      update();
   } else if (target.tagName == "BUTTON" && target.textContent == "Edit") {
      tempId = target.parentNode.dataset.id
      let book = await getBookById(tempId)
      tempAuthor = book.author;
      tempTitle = book.title;
      submitText = "Save"
      update(submitText, tempTitle, tempAuthor)
   } else if (target.tagName == "BUTTON" && target.textContent == "Delete") {
      let id = target.parentNode.dataset.id
      await deleteBook(id)

      update()
   }
}

async function onSubmit(ev) {
   ev.preventDefault();
   const target = ev.target
   let title = target.querySelector("[name=title]")
   let author = target.querySelector("[name=author]")

   if (target.id == "add-form") {
      let data = {
         "author": author.value,
         "title": title.value
      }

      await postBook(data)

      title.value = ""
      author.value = ""

      update()

   } else if (target.id == "edit-form") {
      let data = {
         "author": author.value,
         "title": title.value
      }

      await editBook(tempId,data)

      update()

   }
}


async function update(submitText = "Submit", title = "", author = "") {
   let data = await getBooks();
   render(tableTemp(data, submitText, title, author), document.querySelector("body"))

}

