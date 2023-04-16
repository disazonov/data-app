import React, { useEffect, useState } from "react";
import { OPTIONS } from "../../../assets/constants";
import Filters from "./Filters/Filters";
import HomeCard from "./HomeCard/HomeCard";

const Home: React.FunctionComponent = () => {
  const [deviceList, setDeviceList] = useState<Array<object>>([])
  const [filteredDeviceList, setFilteredDeviceList] = useState<Array<object>>([])
  const [filteredDevices, setFilteredDevices] = useState(false)
  const selectedList = filteredDevices ? filteredDeviceList : deviceList

  useEffect(() => {
    if (Object.keys(deviceList).length === 0) {
      fetch(OPTIONS.url)
        .then((response) => response.json())
        .then((data) => setDeviceList(data.products))
        .catch((error) => console.error(error));
    }
  }, []);


  return (
    <div>
      <h1>Home page</h1>
      <Filters deviceList={deviceList} setFilteredDeviceList={setFilteredDeviceList} setFilteredDevices={setFilteredDevices} />
      <HomeCard selectedList={selectedList} />
    </div >
  );
};

export default Home;
