import { addLike, deleteBook, getBookById, getLikesForBook,userLiked } from "../api/data.js";
import { html } from "../helper.js";


const detailsTemplate = (book,onDelete,likes,onLike,isLiked) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <div class="actions">

            ${sessionStorage.getItem("userId") == book._ownerId 
                ? html`
                    <a class="button" href="/edit/${book._id}">Edit</a>
                    <a class="button" href="javascript:void(0)" @click=${onDelete}>Delete</a>`
                : null}

            <!-- Bonus -->
            ${(sessionStorage.getItem("userId")&&(sessionStorage.getItem("userId")!=book._ownerId)&&(isLiked==false))
                ? html` <a @click=${onLike} class="button" href="javascript:void(0)">Like</a>`
                : null}
           

            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${likes}</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>`

export async function detailsPage(ctx){
    const bookId = ctx.params.id

    
    const book = await getBookById(bookId)
    let likes = await getLikesForBook(bookId) 

    if(sessionStorage.getItem("userId")){
        let userId = sessionStorage.getItem("userId")
        let isLiked = await userLiked(bookId,userId)
        ctx.render(detailsTemplate(book,onDelete,likes,onLike,isLiked))

    }else{
        ctx.render(detailsTemplate(book,onDelete,likes,onLike))
    }


    

    async function onDelete(){
        await deleteBook(bookId)
        ctx.page.redirect("/dashboard")
    }

    async function onLike(){
        await addLike(bookId)
        let likes = await getLikesForBook(bookId)
        let userId = sessionStorage.getItem("userId")
        let isLiked = await userLiked(bookId,userId)
        ctx.render(detailsTemplate(book,onDelete,likes,onLike,isLiked))

        ctx.render(detailsTemplate(book,onDelete,likes,onLike,isLiked))
    }
}

