import React from "react";
import { Layout } from "antd";
import {
  IoIosNotificationsOutline
} from "react-icons/io";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineCloseSquare, AiOutlineMenu } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import BreadcrumbComponent from "../components/Breadcrumb";
import NotificationsPanel from "./NotificationsPanel";

const { Header: AntHeader } = Layout;

const Header = ({ collapsed, colorBgContainer, setMobileSidebarVisible, mobileSidebarVisible }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [showNotifications, setShowNotifications] = React.useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
  };

  return (
    <AntHeader
      style={{
        padding: "0 24px",
        background: colorBgContainer,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.05)",
        height: "64px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        transition: "all 0.2s",
      }}
    >
      <div
        className="header-left"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div id="menu_mobile_nav">
          <button
            style={{ padding: 12, border: "none", height: 10, background: "none" }}
            onClick={() => setMobileSidebarVisible((prev) => !prev)}
          >
            {mobileSidebarVisible ? <AiOutlineCloseSquare size={20} /> : <AiOutlineMenu size={20} />}
          </button>
        </div>
        <BreadcrumbComponent />
      </div>

      <div style={{ position: "relative" }}>
        <button
          onClick={() => window.location.reload()}
          style={{ padding: 12, border: "none", height: 10, background: "none" }}
        >
          <BiRefresh />
        </button>

        <button
          onClick={toggleNotifications}
          style={{ padding: 12, border: "none", height: 10, background: "none" }}
        >
          <IoIosNotificationsOutline color="black" />
        </button>

        {showNotifications && (
          <div
          id="notification_modals"
            style={{

             
            }}
          >
            <NotificationsPanel />
          </div>
        )}
      </div>
    </AntHeader>
  );
};

export default Header;
