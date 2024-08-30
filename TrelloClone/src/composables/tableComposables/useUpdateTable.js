import axios from "axios";

export const useUpdateTable = () => {
  const PATH_API = "http://localhost:3000/tables/";

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
