import axios from "axios"

export const useCreateTable = () => {
  const PATH_API = import.meta.env.VITE_APP_DB_URL
  
  const createTable = async(table) => {
    try {
      const res = await axios.post(PATH_API + 'tables/create', table)
      return res.data
    } catch (error) {
      console.error(error);
    }
  }
  return {createTable}

}