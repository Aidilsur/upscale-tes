import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../../utils/api";

function useUpdateTask(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateTask"],
    mutationFn: async (payload) => {
      const response = api.patch(`/task/update/${id}`, payload);

      return response;
    },
    onSuccess: (res) => {
      console.log("response :", res.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries("getAllUser");
    },
  });
}

export default useUpdateTask;
