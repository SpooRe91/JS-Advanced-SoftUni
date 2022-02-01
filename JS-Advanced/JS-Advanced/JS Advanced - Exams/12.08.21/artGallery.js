class ArtGallery {
    constructor(creator) {
        this.creator = creator
        this.possibleArticles = {
            "picture": 200,
            "photo": 50,
            "item": 250,
        }
        this.listOfArticles = []
        this.guests = []
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase()
        if (!articleModel in this.possibleArticles) {
            throw new Error("This article model is not included in this gallery!")
        }
        let exist = false;
        for (let i = 0; i < this.listOfArticles.length; i++) {
            let values = Object.values(this.listOfArticles[i])
            if (values.includes(articleModel) && values.includes(articleName)) {
                exist = true;
                this.listOfArticles[i].quantity += +quantity
            }
        }
        if (!exist) {
            this.listOfArticles.push({ articleModel, articleName, quantity })
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`

    }

    inviteGuest(guestName, personality) {
        let points = 0;
        if (personality == "Vip") {
            points = 500
        } else if (personality == "Middle") {
            points = 250
        } else {
            points = 50
        }

        let exist = false;
        this.guests.forEach(obj => {
            if (obj.guestName == guestName) {
                exist = true;
                throw new Error(`${guestName} has already been invited.`)
            }
        })

        if (!exist) {
            this.guests.push({
                guestName,
                points,
                purchaseArticle: 0
            })
        }

        return `You have successfully invited ${guestName}!`
    }
    buyArticle(articleModel, articleName, guestName) {
        let check = false
        this.listOfArticles.forEach(obj => {
            if (obj.articleName == articleName && obj.articleModel == articleModel) {
                check = true;
            }
            if (obj.articleName == articleName && check) {
                if (obj.quantity == 0) {
                    return `The ${articleName} is not available.`
                }
            }
        })
        if (!check) {
            throw new Error("This article is not found.")
        }

        let exist = false;
        this.guests.forEach(obj => {
            if (obj.guestName == guestName) {
                exist = true;
                if (obj.points >= this.possibleArticles[articleModel]) {
                    obj.points -= this.possibleArticles[articleModel]
                    obj.purchaseArticle++;
                    this.listOfArticles.forEach(obj => {
                        if (obj.articleName == articleName) {
                            obj.quantity -= 1
                        }
                    })
                }
            }
        })
        if (!exist) {
            return "This guest is not invited."
        }
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
    }

    showGalleryInfo(criteria) {
        if (criteria == "article") {
            let output = []
            let str = "Articles information:\n"
            this.listOfArticles.forEach(obj => {
                output.push(`${obj.articleModel} - ${obj.articleName} - ${obj.quantity}`)
            })
            return str + output.join("\n")
        } else if (criteria == "guest") {
            let output = []
            let str = "Guests information:\n"
            this.guests.forEach(obj => {
                output.push(`${obj.guestName} - ${obj.purchaseArticle}`)
            })
            return str + output.join("\n")

        }
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
