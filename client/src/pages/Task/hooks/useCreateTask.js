import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../../utils/api";
import { toast } from "react-toastify";

function useCreateTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["createTask"],
    mutationFn: async (payload) => {
      const response = api.post("/task/add", payload);

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

export default useCreateTask;
