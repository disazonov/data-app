import React, { useEffect, useState } from "react";
import { OPTIONS } from "../../../assets/constants";
import { Card, Button } from 'antd';
import styled from "styled-components";

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  .item-card {
    width: calc(100%/3 - 15px);
  }
`
const Home: React.FC = () => {
  const [list, setList] = useState<any[]>([]);
  const [filtered, setFiltered] = useState(false)

  useEffect(() => {
    if (Object.keys(list).length === 0) {
      fetch(OPTIONS.url)
        .then((response) => response.json())
        .then((data) => setList(data.products))
        .catch((error) => console.error(error));
    }
  }, []);

  const getMyDevices = () => {
    if (!filtered) {
      const mapped = list.map((item: Array<String>) => item)
      const filtered = mapped.filter((item: any) => item.title.includes('MacBook'))
      setList(filtered)
      setFiltered(true)
    }

    return
  }

  return (
    <div>
      <h1>Home page</h1>
      <Button onClick={getMyDevices}>Show My Devices</Button>
      <ItemWrapper>
        {list.map(item => (
          <Card key={item.id} title={item.title} className="item-card">
            {item.description}
          </Card>
        ))}
      </ItemWrapper>
    </div >
  );
};

export default Home;
