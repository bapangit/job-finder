import { useState } from "react";
import styled, { css } from "styled-components";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import options from "utils/paths";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
  .navbar {
    height: 50px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left-block {
      display: flex;
      gap: 10px;
      margin: 0px 20px;
    }
    .right-block {
      margin: 0px 10px;
    }
  }
  .sidebar {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    transition: all 0.4s ease-out;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px;
    position: absolute;
    height: 100%;
    top: 50px;
    width: 180px;
    .option {
      border-radius: 4px;
      padding: 5px;
      cursor: pointer;
      &:hover {
        background-color: #333333;
        color: white;
      }
      &:active {
        color: lightgray;
      }
    }
    ${({ showSideBar }) =>
      showSideBar
        ? css`
            left: 0px;
            opacity: 1;
          `
        : css`
            left: -180px;
            opacity: 0;
          `};
  }
  .children {
    position: absolute;
    transition: all 0.4s ease-out;
    width: 100%;
    height: calc(100vh - 50px);
    ${({ showSideBar }) =>
      showSideBar
        ? css`
            left: 180px;
          `
        : css`
            left: 0px;
          `};
  }
`;

function AppLayout() {
  const navigate = useNavigate();
  const [showSideBar, setShowSideBar] = useState(false);
  const toggleNavBar = () => setShowSideBar(!showSideBar);

  return (
    <Layout showSideBar={showSideBar}>
      <div className="navbar">
        <div className="left-block">
          <span style={{ cursor: "pointer" }} onClick={toggleNavBar}>
            {showSideBar ? <AiOutlineClose /> : <HiOutlineMenu />}
          </span>
        </div>
        <div className="right-block">
          {/* {<Button label="Login" onClick={() => navigate("/login")} />} */}
        </div>
      </div>
      <div className="sidebar">
        {options.map((option) => (
          <div className="option" onClick={() => navigate(option.path)}>
            {option.name}
          </div>
        ))}
      </div>
      <div className="children">
        <Outlet />
      </div>
    </Layout>
  );
}

export default AppLayout;
