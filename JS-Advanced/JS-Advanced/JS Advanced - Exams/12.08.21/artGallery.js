class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            "picture": 200,
            "photo": 50,
            "item": 250,
        }
        this.listOfArticles = []
        this.guests = []
    }

    addArticle(articleModel, articleName, quantity) {
        quantity = Number(quantity)
        articleModel = articleModel.toLowerCase();

        if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error("This article model is not included in this gallery!")
        }

        let isThere = false;
        this.listOfArticles.forEach(article => {
            if (article.articleName === articleName && article.articleModel === articleModel) {
                isThere = true;
                article.quantity += quantity;
            }
        })

        if (!isThere) {
            let newArticle = {
                articleModel,
                articleName,
                quantity
            }
            this.listOfArticles.push(newArticle);
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {
        this.guests.forEach(guest => {
            if (guest.guestName === guestName) {
                throw new Error(`${guestName} has already been invited.`)
            }
        })
        let points = 0;
        if (personality === "Vip") {
            points = 500
        } else if (personality === "Middle") {
            points = 250
        } else {
            points = 50
        }

        let newGuest = {
            guestName: guestName,
            points: points,
            purchaseArticle: 0
        }

        this.guests.push(newGuest)

        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {
        let isThere = false;
        let theArticle = {}
        this.listOfArticles.forEach(article => {
            if (article.articleName === articleName && article.articleModel === articleModel) {
                isThere = true;
                theArticle = article
                if (article.quantity == 0) {
                    return `The ${article.articleName} is not available.`
                }
            }
        })
        

        if (!isThere) {
            throw new Error("This article is not found.")
        }

        let guestThere = false
        let theGuest = {}
        this.guests.forEach(guest => {
            if (guest.guestName === guestName) {
                guestThere = true
                theGuest = guest
            }
        })
        if (!guestThere) {
            return 'This guest is not invited.'
        }
        const neededPoints = this.possibleArticles[theArticle.articleModel]

        if (theGuest.points < neededPoints) {
            return "You need to more points to purchase the article."
        } else {
            theGuest.points -= neededPoints;
            theGuest.purchaseArticle++;
            theArticle.quantity--;
            return `${guestName} successfully purchased the article worth ${neededPoints} points.`
        }


    }

    showGalleryInfo(criteria) {
        let output = []
        if (criteria === "article") {
            output.push("Articles information:")

            this.listOfArticles.forEach(article => {
                output.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`)
            })
        } else if (criteria === "guest") {
            output.push("Guests information:")

            this.guests.forEach(guest => {
                output.push(`${guest.guestName} - ${guest.purchaseArticle}`)
            })
        }

        return output.join("\n")
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));

