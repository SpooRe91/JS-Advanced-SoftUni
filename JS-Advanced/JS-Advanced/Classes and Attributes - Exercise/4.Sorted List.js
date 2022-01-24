class List {
    constructor() {
        this.collection = []
        this.size = 0;
    }

    add(element) {
        this.collection.push(element)
        this.size++;
        this.collection.sort((a, b) => a - b);
    }
    remove(index) {
        if (index >= this.collection.length || index < 0) {
            throw new Error('No such index')
        }
        this.collection.splice(index, 1);
        this.size--;
        this.collection.sort((a, b) => a - b)
    }
    get(index) {
        if (index >= this.collection.length || index < 0) {
            throw new Error('No such index')
        }
        return this.collection[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(3));
list.remove(1);
console.log(list.get(1));
