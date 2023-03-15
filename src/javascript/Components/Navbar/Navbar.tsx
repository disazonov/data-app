import React, { useState } from "react";
import styled from "styled-components";
import { Layout } from "antd";
import { navbarItems } from "./NavbarItems";
import { NavLink } from "react-router-dom";

const Link = styled(NavLink)`
&.active {
  color: red;
}`

const Navbar: React.FC = () => {

  return (
    <Layout.Header>
      <nav>
        <ul>
          {navbarItems.map((item) => (
            <li key={item.key}>
              <Link to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Layout.Header>
  );
};

export default Navbar;
