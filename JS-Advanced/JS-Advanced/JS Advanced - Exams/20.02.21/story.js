class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
        }
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!")
        }
        if (username == this.creator) {
            throw new Error("You can't like your own story!")
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!")
        } else {
            this._likes.splice(this._likes.indexOf(username), 1)
            return `${username} disliked ${this.title}`
        }
    }

    comment(username, content, id) {

        let commentWithId = this._comments.find(c => c.Id === id);

        if (id == undefined || commentWithId == undefined) {
            let comment = {
                Id: this._comments.length + 1,
                Username: username,
                Content: content,
                Replies: []

            }
            this._comments.push(comment)
            return `${username} commented on ${this.title}`
        }

        let reply = {
            Id: commentWithId.Replies.length + 1,
            Username: username,
            Content: content,
        }
        commentWithId.Replies.push(reply)
        return "You replied successfully"

    }






    toString(sortingType) {
        let output = [];
        output.push(`Title: ${this.title}`);
        output.push(`Creator: ${this.creator}`);
        output.push(`Likes: ${this._likes.length}`);
        output.push('Comments:');

        if (sortingType == "asc") {
            this._comments.sort((a, b) => a.Id - b.Id);

            this._comments.forEach(
                comment => comment.Replies.sort(
                    (a, b) => a.Id - b.Id));

            this._fillResult(output, this._comments)

        } else if (sortingType == "desc") {
            this._comments.sort((a, b) => b.Id - a.Id);

            this._comments.forEach(
                comment => comment.Replies.sort(
                    (a, b) => b.Id - a.Id));

            this._fillResult(output, this._comments)


        } else if (sortingType == "username") {
            this._comments.sort((a, b) => a.Username.localeCompare(b.Username));

            this._comments.forEach(
                comment => comment.Replies.sort(
                    (a, b) => a.Username.localeCompare(b.Username)));

            this._fillResult(output, this._comments)
        }

        return output.join("\n")
    }

    _fillResult(resultArr, commentsArr) {
        return commentsArr.forEach(comment => {
            if (comment.Replies.length == 0) {
                resultArr.push(`-- ${comment.Id}. ${comment.Username}: ${comment.Content}`);
            } else {
                resultArr.push(`-- ${comment.Id}. ${comment.Username}: ${comment.Content}`)
                comment.Replies.forEach(reply => {
                    resultArr.push(`--- ${comment.Id}.${reply.Id}. ${reply.Username}: ${reply.Content}`)
                })
            }
        })
    }

    /*
        toString(sortingType) {
            let result = [];
            result.push(`Title: ${this.title}`);
            result.push(`Creator: ${this.creator}`);
            result.push(`Likes: ${this._likes.length}`);
            result.push('Comments:');
    
            if (this._comments.length > 0) {
                let sortedComments = this._sortCriteria(this._comments, sortingType);
                result.push(this._sortThem(sortedComments, sortingType));
            }
            return result.join('\n');
        }
    
        _sortCriteria(commentsOrReplies, criteria) {
            let copyCommentsOrReplies = commentsOrReplies.slice();
            let sortedCommentsOrReplies = null;
    
            if (criteria === 'asc') {
                sortedCommentsOrReplies = copyCommentsOrReplies.sort((a, b) => a.Id - b.Id);
            } else if (criteria === 'desc') {
                sortedCommentsOrReplies = copyCommentsOrReplies.sort((a, b) => b.Id - a.Id);
            } else if (criteria === 'username') {
                sortedCommentsOrReplies = copyCommentsOrReplies.sort((a, b) => a.Username.localeCompare(b.Username));
            }
    
            return sortedCommentsOrReplies;
        }
    
        _sortThem(sortedComments, criteria) {
            let commentAndReplies = [];
    
            for (let comment of sortedComments) {
                commentAndReplies.push(`-- ${comment.Id}. ${comment.Username}: ${comment.Content}`);
    
                if (comment.Replies.length > 0) {
                    let sortedReplies = this._sortCriteria(comment.Replies, criteria);
                    sortedReplies.forEach(r => commentAndReplies.push(`--- ${comment.Id}.${r.Id}. ${r.Username}: ${r.Content}`));
                }
            }
            return commentAndReplies.join('\n');
        }
    */

}
let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
