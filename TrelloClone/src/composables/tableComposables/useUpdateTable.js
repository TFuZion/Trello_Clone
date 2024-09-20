import axios from "axios";

export const useUpdateTable = () => {
  const PATH_API = import.meta.env.VITE_APP_DB_URL;

  const updateTable = async (id, table) => {
    try {
      const response = await axios.put(PATH_API + 'update/' + id, table);
      console.log(response);
      return response.data.table;
    } catch (e) {
      console.error(e);
    }
  };
  return { updateTable };
};
