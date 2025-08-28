import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../../utils/api";

function useDeleteTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteTask"],
    mutationFn: async (payload) => {
      const response = api.delete(`/task/delete/${payload}`);

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

export default useDeleteTask;
