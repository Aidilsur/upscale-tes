import { useState } from "react";
import { Button, Card, TextInput } from "../../components";
import Style from "./style.module.css";
import useAuthStore from "../../store/authStore";
import api from "../../utils/api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Register() {
  const { setUser } = useAuthStore();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    username: "",
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
      const res = await api.post("http://localhost:5000/register", form, {
        withCredentials: true,
      });

      if (res.status === 201) {
        const { token, user } = res.data;

        Cookies.set("token", token);
        setUser(user);

        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className={Style.wrapper}>
      <Card>
        <div className={Style.cardSection}>
          <h1 className={Style.header}>Register</h1>
          <p className={Style.subtitle}>Please fill all form</p>

          <form onSubmit={onSubmit} className={Style.form}>
            <TextInput
              label="email"
              id="email"
              name="email"
              onChange={handleChange}
            />
            <TextInput
              label="username"
              id="username"
              name="username"
              onChange={handleChange}
            />
            <TextInput
              label="password"
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
        <div className={Style.registerWrapper}>
          <a className={Style.register} href="/login">
            Login
          </a>
        </div>
      </Card>
    </div>
  );
}

export default Register;
