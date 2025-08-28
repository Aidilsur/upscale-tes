import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../../utils/api";
import { toast } from "react-toastify";

function useUpdateTask(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateTask"],
    mutationFn: async (payload) => {
      const response = api.patch(`/task/update/${id}`, payload);

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

export default useUpdateTask;
