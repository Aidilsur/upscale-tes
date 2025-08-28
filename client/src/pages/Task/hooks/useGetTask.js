import { useQuery } from "@tanstack/react-query";
import api from "../../../utils/api";

function useGetTask(status) {
  const queryString =
    status && status !== "all" ? `?status=${encodeURIComponent(status)}` : "";

  return useQuery({
    queryKey: ["getTask", status],
    queryFn: async () => {
      const response = await api.get(`/task${queryString}`);
      return response.data?.tasks || [];
    },
  });
}

export default useGetTask;
