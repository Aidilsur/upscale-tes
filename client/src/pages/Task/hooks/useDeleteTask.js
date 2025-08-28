import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../../utils/api";
import { toast } from "react-toastify";

function useDeleteTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteTask"],
    mutationFn: async (payload) => {
      const response = api.delete(`/task/delete/${payload}`);

      return response;
    },
    onSuccess: (res) => {
      toast.success(res.data.message);
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries("getAllUser");
    },
  });
}

export default useDeleteTask;
