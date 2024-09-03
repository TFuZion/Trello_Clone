export class Table {
    id;
    name;
    lists;
    tags;

    constructor(name) {
        this.name = name
        this.lists = [];
        this.tags = [];
    }
}