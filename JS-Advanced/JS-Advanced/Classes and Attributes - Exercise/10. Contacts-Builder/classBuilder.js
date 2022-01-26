class Contact {
    constructor(firstName, lastName, phone, email,) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }
    get online() {
        return this._online;
    }
    set online(value) {

        this._online = value;
        if (this.divTitle) {
            if (value == false) {
                this.divTitle.classList.remove('online')
            } else {
                this.divTitle.classList.add('online')
            }
        }
    }

    render(id) {
        let article = document.createElement("article");
        this.divTitle = document.createElement("div");
        let divInfo = document.createElement("div");
        let spanPhone = document.createElement("span");
        let spanEmail = document.createElement("span")
        let button = document.createElement("button");
        this.divTitle.classList = "title";

        if (this._online) {
            this.divTitle.classList.add("online");
        }

        this.divTitle.textContent = `${this.firstName} ${this.lastName}`
        button.innerHTML = '&#8505;'
        divInfo.classList = "info";
        divInfo.style.display = 'none';
        spanPhone.innerHTML = `&phone; ${this.phone}`;
        spanEmail.innerHTML = `&#9993; ${this.email}`;
        this.divTitle.appendChild(button);
        divInfo.appendChild(spanPhone);
        divInfo.appendChild(spanEmail);
        article.appendChild(this.divTitle);
        article.appendChild(divInfo)
        let element = document.getElementById(id)
        element.appendChild(article);

        button.addEventListener('click', collapseInfo);

        function collapseInfo() {
            if (divInfo.style.display === 'block') {
                divInfo.style.display = 'none';
            } else {
                divInfo.style.display = 'block';
            }
        }
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
