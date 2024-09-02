import { Table } from "@/Classes/Table"
import axios from "axios"

export async function getTableById(tableId){
    const API = "http://localhost:3000/tables/" + tableId

    try {
        const res = await axios.get(API)
        return res.data
        
    } catch (error) {
        console.log(error)
    }
}