import React from "react";
import styled from "styled-components";
import { Layout } from "antd";
import { navbarItems } from "./NavbarItems";
import { NavLink } from "react-router-dom";

const NavbarHeader = styled(Layout.Header)`
  background: white;
  position: sticky;
  top: 0;
  z-index: 1;

  ul {
    display: flex;
    flex-direction: rows;
    position: sticky;
    gap: 15px;
    padding: 15px 0 5px;
  }

  a {
    border-bottom: 2px solid;
    border-color: rgba(0, 0, 0, 0.88);
    color: rgba(0, 0, 0, .88);
    padding: 5px 0;
    transition: all ease-in .2s;

    &:hover {
      color: #64a5ff;
      border-color: #64a5ff;
    }

    &.active {
      border-color: #1677ff;
      color: #1677ff;
    }
  }
`

const Navbar: React.FC = () => (
  <NavbarHeader>
    <nav>
      <ul>
        {navbarItems.map((item) => (
          <li key={item.key}>
            <NavLink to={item.to}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </NavbarHeader>
);

export default Navbar;
