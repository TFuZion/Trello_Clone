
export class Card {
  id: number;
  name: string;
  description: string | undefined;
  checkList: boolean[];
  cardMemberId: number | undefined
  cardTagId: number | undefined;
  coverImg: string | undefined;
  comment: string | undefined;
  startDate: Date;
  endDate: Date | undefined;

  constructor(id: number, name: string, startDate: Date) {
    this.id = id
    this.name = name;
    this.checkList = [];
    this.startDate = startDate;
  }
}
