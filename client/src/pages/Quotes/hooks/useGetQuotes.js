import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useGetQuotes() {
  return useQuery({
    queryKey: ["getQuotes"],
    queryFn: async () => {
      const response = await axios.get("https://dummyjson.com/quotes");
      return response.data;
    },
  });
}

export default useGetQuotes;
