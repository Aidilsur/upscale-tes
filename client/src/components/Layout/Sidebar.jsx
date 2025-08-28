import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../components";
import useAuthStore from "../../store/authStore";
import Style from "./style.module.css";
import { ListChecks, LogOut, User, Quote } from "lucide-react";

const menu = [
  { label: "task", url: "/task", icon: <ListChecks size={15} /> },
  { label: "quotes list", url: "/quotes", icon: <Quote size={15} /> },
];

function Icon(props) {
  const IconComponent = props.icon;
  return <IconComponent {...props} />;
}

function Sidebar() {
  const navigate = useNavigate();
  const { user, clear } = useAuthStore();
  const location = useLocation();

  function handleLogout() {
    clear();
    navigate("/login");
  }
  return (
    <div className={Style.sidebar}>
      <div className={Style.contentSidebar}>
        <h2 className={Style.logo}>Upscale</h2>
        <p className={Style.menuTitle}>Menu</p>
        <ul className={Style.menuList}>
          {menu.map((item, index) => (
            <li key={index}>
              <Link
                className={`${Style.menu} ${
                  location.pathname === item.url ? Style.active : ""
                }`}
                to={item.url}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={Style.profile}>
        <div className={Style.userWrapper}>
          <div className={Style.user}>
            <User />
            <div>
              <p>{user.username}</p>
              <p>{user.email}</p>
            </div>
          </div>
          <div style={{ width: "5rem" }}>
            <Button variant="outlined" onClick={handleLogout}>
              <LogOut />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
