export class List {
    id;
    tableId;
    name;
    cards;

    constructor(name){
        this.name = name
        this.cards = [];
    }
}