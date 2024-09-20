import axios from "axios";

export const useUpdateTable = () => {
  const PATH_API = import.meta.env.VITE_APP_DB_URL;

  const updateTable = async (id, table) => {
    try {
      const res = await axios.put(PATH_API + id, table);
      return res.data;
    } catch (e) {
      console.error(e);
    }
  };
  return { updateTable };
};
