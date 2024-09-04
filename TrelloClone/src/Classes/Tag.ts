export class Tag {
    id: number;
    tableId: number;
    name: string;
    color: string;

    
    constructor(id: number, tableId: number, name: string, color: string) {
        this.id = id;
        this.tableId = tableId;
        this.name = name;
        this.color = color;
    }
}