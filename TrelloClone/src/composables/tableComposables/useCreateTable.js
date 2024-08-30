import axios from "axios"

export const useCreateTable = () => {
  const PATH_API = "http://localhost:3000/tables/"
  
  const createTable = async(table) => {
    try {
      const res = await axios.post(PATH_API, table)
      return res.data
    } catch (error) {
      console.error(error);
    }
  }
  return {createTable}

}