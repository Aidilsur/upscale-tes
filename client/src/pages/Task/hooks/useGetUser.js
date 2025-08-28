import { useQuery } from "@tanstack/react-query";
import api from "../../../utils/api";

function useGetUser() {
  return useQuery({
    queryKey: ["getAllUser"],
    queryFn: async () => {
      const { data } = await api.get(`/users`);
      return data;
    },
  });
}

export default useGetUser;
