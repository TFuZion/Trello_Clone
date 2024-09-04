import type { Card } from './Card'

export class List {
  id: number
  tableId: number
  name: string
  cards: Card[] | undefined

  constructor(id: number, tableId: number, name: string) {
    this.id = id
    this.tableId = tableId
    this.name = name;
    this.cards = []
  }
}
