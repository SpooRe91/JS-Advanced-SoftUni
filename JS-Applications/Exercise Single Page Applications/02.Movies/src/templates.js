import { html } from "https://unpkg.com/lit-html?module";


const loginTemp = () => html`
<section id="form-login">
    <form class="text-center border border-light p-5" action="" method="">
        <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" class="form-control" placeholder="Email" name="email" value="">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input id="password" type="password" class="form-control" placeholder="Password" name="password" value="">
        </div>

        <button type="submit" class="btn btn-primary">Login</button>
    </form>
</section>
${footerTemp()}`


const registerTemp = () => html`
<section id="form-sign-up">
    <form class="text-center border border-light p-5" action="#" method="post">
        <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" class="form-control" placeholder="Email" name="email" value="">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input id="password" type="password" class="form-control" placeholder="Password" name="password" value="">
        </div>

        <div class="form-group">
            <label for="repeatPassword">Repeat Password</label>
            <input id="repeatPassword" type="password" class="form-control" placeholder="Repeat-Password"
                name="repeatPassword" value="">
        </div>

        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</section>
${footerTemp()}`


const editMovieTemp = (title, description, url,id) => html`
<section id="edit-movie">
    <form class="text-center border border-light p-5" action="#" method="" data-id=${id}>
        <h1>Edit Movie</h1>
        <div class="form-group">
            <label for="title">Movie Title</label>
            <input id="title" type="text" class="form-control" placeholder="Movie Title" value="" name="title"
                .value=${title}>
        </div>
        <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea class="form-control" placeholder="Movie Description..."
                name="description">${description}</textarea>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input id="imageUrl" type="text" class="form-control" placeholder="Image Url" value="" name="imageUrl"
                .value=${url}>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</section>
${footerTemp()}`

const addMovieTemp = () => html`
<section id="add-movie">
    <form class="text-center border border-light p-5" action="#" method="">
        <h1>Add Movie</h1>
        <div class="form-group">
            <label for="title">Movie Title</label>
            <input id="title" type="text" class="form-control" placeholder="Title" name="title" value="">
        </div>
        <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea class="form-control" placeholder="Description" name="description"></textarea>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input id="imageUrl" type="text" class="form-control" placeholder="Image Url" name="imageUrl" value="">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</section>
${footerTemp()}`

const homeTemp = () => html`
<section id="home-page">
    <div class="jumbotron jumbotron-fluid text-light" style="background-color: #343a40;">
        <img src="https://slicksmovieblog.files.wordpress.com/2014/08/cropped-movie-banner-e1408372575210.jpg"
            class="img-fluid" alt="Responsive image" style="width: 150%; height: 200px">
        <h1 class="display-4">Movies</h1>
        <p class="lead">Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.</p>
    </div>
</section>`

const moviesListTemp = (moviesData) => html`
<h1 class="text-center">Movies</h1>
${sessionStorage.hasOwnProperty("authToken")? html`<section id="add-movie-button">
    <a href="#" class="btn btn-warning ">Add Movie</a>
</section>`:   null}



<section id="movie">
    <div class=" mt-3 ">
        <div class="row d-flex d-wrap">

            <div class="card-deck d-flex justify-content-center">

                ${moviesData.map(movie => html`
                <div class="card mb-4">
                    <img class="card-img-top" src=${movie.img} alt="Card image cap" width="400">
                    <div class="card-body">
                        <h4 class="card-title">${movie.title}</h4>
                    </div>
                    <div class="card-footer">
                        ${sessionStorage.getItem("authToken")?html`
                        <a href="#">
                            <button type="button" class="btn btn-info" data-id=${movie._id}>Details</button>
                        </a>`:   null}
                        
                    </div>
                
                </div>`)}

            </div>
        </div>
    </div>
</section>
${ footerTemp() }`


const movieDetailsTemp = (movie,likedByUser,likes) => html`
    <section id = "movie-example">
        <div class="container">
            <div class="row bg-light text-dark">
                <h1>Movie title: ${movie.title}</h1>

                <div class="col-md-8">
                    <img class="img-thumbnail" src=${movie.img} alt="Movie">
                </div>
                <div class="col-md-4 text-center" data-id=${movie._id}>
                    <h3 class="my-3 ">Movie Description</h3>
                    <p>${movie.description}</p>

                    ${movie._ownerId==sessionStorage.getItem("userId")? html`
                    <a class="btn btn-danger" href="#">Delete</a>
                    <a class="btn btn-warning" href="#">Edit</a>`: null}
                    
                    ${movie._ownerId==sessionStorage.getItem("userId")?null: likedByUser?html`
                    <a class="btn btn-primary" href="#">Dislike</a>`: html`
                    <a class="btn btn-primary" href="#">Like</a>`}
                    
                    <span class="enrolled-span">Liked ${likes}</span>
                </div>
            </div>
        </div>
</section>
${footerTemp()}`

const footerTemp = () => html`
    <footer footer class="page-footer font-small" >
        <div class="footer-copyright text-center py-3">© 2020
            <a href="#" class="text-dark">JS
                Applications</a>
        </div>
</footer> `

const pageTemp = (movies) => html`
${ homeTemp() }
${ moviesListTemp(movies) }
`

const loadingTemp=()=> html`
<h1>Loading...</h1>`

export { pageTemp, loginTemp, registerTemp, movieDetailsTemp, editMovieTemp, addMovieTemp,loadingTemp }