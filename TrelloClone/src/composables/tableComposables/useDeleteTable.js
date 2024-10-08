import axios from "axios";

export const useDeleteTable = () => {
    const PATH_API = import.meta.env.VITE_APP_DB_URL;
    const removeTable = async(id) => {
      try {
        const res = await axios.delete(PATH_API + id)
        return res.data
      } catch (e) {
        console.error(e);
      }
    }
    return {removeTable}
}
