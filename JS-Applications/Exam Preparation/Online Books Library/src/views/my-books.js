import { getUserBooks } from "../api/data.js";
import { html } from "../helper.js";

const myBooksTemplate = (books) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>

    <ul class="my-books-list">
        ${books.length > 0 
            ? books.map(singleBook) 
            : html`<p class="no-books">No books in database!</p>`}

    </ul>

</section>`

const singleBook = (b) => html`
<li class="otherBooks">
    <h3>${b.title}</h3>
    <p>Type: ${b.type}</p>
    <p class="img"><img src=${b.imageUrl}></p>
    <a class="button" href="/details/${b._id}">Details</a>
</li>`

export async function myBooksPage(ctx){
    const userId = sessionStorage.getItem("userId");
    const books = await getUserBooks(userId)

    ctx.render(myBooksTemplate(books))
}