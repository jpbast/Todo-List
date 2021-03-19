class Item {
    static lastId = localStorage.getItem('id') ? Number(localStorage.getItem('id')) + 1 : 0; 
    constructor(text) {
        this.id = Item.lastId++;
        this.text = text;
        this.done = false;
    }
}

export default Item;