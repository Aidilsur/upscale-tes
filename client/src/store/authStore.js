import { create } from "zustand";
import { persist } from "zustand/middleware";
import Cookies from "js-cookie";

const useAuthStore = create()(
  persist(
    (set) => ({
      token: null,
      user: null,
      setToken: (token) => set({ token }),
      setUser: (user) => set({ user }),
      clear: () => {
        Cookies.remove("token");
        set({ token: null, user: null });
      },
    }),
    { name: "auth-storage" }
  )
);

export default useAuthStore;
