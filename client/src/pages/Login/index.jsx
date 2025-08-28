import { useState } from "react";
import { Button, Card, TextInput } from "../../components";
import Style from "./style.module.css";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import useAuthStore from "../../store/authStore";
import { toast } from "react-toastify";

function Login() {
  const { setUser } = useAuthStore();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const res = await api.post("/login", form);
      const token = res.data.token;
      Cookies.set("token", token);

      if (res.status === 200) {
        const userRes = await api.get("/profile");

        setUser(userRes.data);
        toast.success("welcome");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className={Style.wrapper}>
      <Card>
        <div className={Style.cardSection}>
          <h1 className={Style.header}>Welcome</h1>
          <p className={Style.subtitle}>Please login to continue</p>

          <form onSubmit={onSubmit} className={Style.form}>
            <TextInput
              label="email"
              id="email"
              name="email"
              onChange={handleChange}
            />
            <TextInput
              label="password"
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
            />
            <Button type="submit">Login</Button>
          </form>
        </div>
        <div className={Style.registerWrapper}>
          <a className={Style.register} href="/register">
            sign up
          </a>
        </div>
      </Card>
    </div>
  );
}

export default Login;
