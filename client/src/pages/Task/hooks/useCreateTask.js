import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../../utils/api";

function useCreateTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["createTask"],
    mutationFn: async (payload) => {
      const response = api.post("/task/add", payload);

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

export default useCreateTask;
