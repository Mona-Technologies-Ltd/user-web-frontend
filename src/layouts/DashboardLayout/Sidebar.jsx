import { BiLogOut } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import React from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { Icon } from "@iconify/react";
import monaHeaderLogo from "../assets/monaHeaderLogo.svg";
import monaSingleLogo from "../assets/monaSingleLogo.png";
import { useMediaQuery } from "react-responsive";

const { Sider } = Layout;

const SidebarContent = ({ collapsed, setCollapsed, onNavigate }) => {
  const location = useLocation();

  const currentPath = location.pathname;

  const menuItems = [
    {
      key: "/dashboard",
      icon: <RxDashboard size="20" />,
      label: "Dashboard",
    },
    {
      key: "/claims",
      icon: <Icon icon="icon-park-outline:list" width="20" height="20" />,
      label: "Claims",
    },
    {
      key: "/devices",
      icon: <Icon icon="tdesign:device" width="20" height="20" />,
      label: "Devices",
    },
    {
      key: "/support",
      icon: <AiOutlineSetting size={20} />,
      label: "Support",
    },
    {
      key: "/account",
      icon: <BsPerson size={20} />,
      label: "Account",
    },
  ];

  return (
    <>
      <div
        className="logo"
        style={{ height: "64px", padding: "16px", position: "relative" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: collapsed ? "center" : "flex-start",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img
            src={collapsed ? monaSingleLogo : monaHeaderLogo}
            alt="Mona Logo"
            style={{ maxHeight: "32px" }}
          />
        </div>

        {/* Show collapse toggle only on desktop */}
        {setCollapsed && (
          <Button
            type="text"
            icon={
              <Icon
                icon={collapsed ? "mdi:chevron-right" : "mdi:chevron-left"}
                width="20"
                height="20"
                style={{ color: "#1890ff" }}
              />
            }
            onClick={() => setCollapsed(!collapsed)}
            className="sidebar-toggle"
            style={{
              position: "absolute",
              right: "-12px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 100,
              width: "28px",
              height: "28px",
              background: "#fff",
              boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
              border: "1px solid #e8e8e8",
              padding: 0,
            }}
          />
        )}
      </div>

      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[currentPath]}
        onClick={onNavigate}
        items={[
          ...menuItems,
          {
            key: "logout",
            icon: <BiLogOut size={20} />,
            label: "Logout",
            style: { marginTop: "20px", color: "#000" },
          },
        ]}
      />
    </>
  );
};

const Sidebar = ({
  collapsed,
  setCollapsed,
  mobileSidebarVisible,
  setMobileSidebarVisible,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMenuClick = (e) => {
    if (e.key === "logout") {
      dispatch(logout());
      navigate("/login");
    } else {
      navigate(e.key);
    }
    // Close drawer if mobile
    if (isMobile) {
      setMobileSidebarVisible(false);
    }
  };

  if (isMobile) {
    return (
      <Drawer
        placement="left"
        closable={false}
        onClose={() => setMobileSidebarVisible(false)}
        open={mobileSidebarVisible}
        width={250}
        bodyStyle={{ padding: 0 }}
      >
        <SidebarContent collapsed={false} onNavigate={handleMenuClick} />
      </Drawer>
    );
  }

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={250}
      className="dashboard-sidebar"
      theme="light"
    >
      <SidebarContent
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        onNavigate={handleMenuClick}
      />
    </Sider>
  );
};

export default Sidebar;
