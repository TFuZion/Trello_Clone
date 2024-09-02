export class Card {
    id;
    name;
    description;
    checkList;
    cardMemberId;
    cardTagId;
    coverImg;
    comment;
    startDate;
    endDate;


    constructor(name) {
        this.name = name
    }
}