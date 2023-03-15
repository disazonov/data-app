import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Layout } from "antd";

import RouteConfig from "../../../routes";

const App: React.FC = () => {

  return (
    <div className="App">
      <Navbar />
      <Layout.Content>
        <RouteConfig />
      </Layout.Content>
    </div>
  );
};

export default App;
