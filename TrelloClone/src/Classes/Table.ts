import type { List } from "./List";
import type { Tag } from "./Tag";
export class Table {
    id: number;
    name: string;
    lists: List[];
    tags: Tag[];

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
        this.lists = [];
        this.tags = [];
    }
}