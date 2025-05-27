import React, { useState } from "react";
import { Layout, theme } from "antd";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const { Content } = Layout;

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileSidebarVisible, setMobileSidebarVisible] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh", overflow: "hidden" }}>
     <Sidebar
  collapsed={collapsed}
  setCollapsed={setCollapsed}
  mobileSidebarVisible={mobileSidebarVisible}
  setMobileSidebarVisible={setMobileSidebarVisible}
/>


      {/* <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} /> */}
      <Layout>
        {/* <Header collapsed={collapsed} colorBgContainer={colorBgContainer} /> */}
      <Header
  collapsed={collapsed}
  colorBgContainer={colorBgContainer}
  setMobileSidebarVisible={setMobileSidebarVisible}
  mobileSidebarVisible={mobileSidebarVisible}
/>
        <Content
          style={{
            margin: "16px",
            padding: 0,
            background: "#f5f7fa",
            height: "calc(100vh - 72px)",
            overflowY: "auto",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
