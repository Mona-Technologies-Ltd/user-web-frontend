import React from "react";
import { Layout, Button, Space, Avatar, Dropdown } from "antd";
import {
  LogoutOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import BreadcrumbComponent from "../components/Breadcrumb";
import ToggleMenu from "./ToggleMenu";

const { Header: AntHeader } = Layout;

const Header = ({ collapsed, colorBgContainer }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  // Check if we're on the dashboard page
  const isDashboard =
    location.pathname === "/" || location.pathname === "/dashboard";

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
        marginLeft: collapsed ? 0 : "0",
      }}
    >
      {/* <div
        className="header-left"
        style={{ display: "flex", alignItems: "center", width:'20rem', background:'red' }}
      >
        <BreadcrumbComponent />
      </div> */}
      <div
  className="header-left"
  style={{
    display: "flex",
    alignItems: "center",
    width: "40%",
    flexShrink: 0,
    // background: "red",
    position:'absolute'
  }}
>
  <BreadcrumbComponent />
</div>


      <div className="mobile_nav">
        <ToggleMenu />
      </div>
    </AntHeader>
  );
};

export default Header;
