import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Layout } from "antd";

import RouteConfig from "../../../routes";

const App: React.FC = () => {
  const { Content } = Layout

  return (
    <div className="App">
      <Navbar />
      <Content>
        <RouteConfig />
      </Content>
    </div>
  );
};

export default App;
