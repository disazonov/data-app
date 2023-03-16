import React, { useEffect, useState } from "react";
import { OPTIONS } from "../../../assets/constants";
import { Card } from 'antd';
import styled from "styled-components";

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Home: React.FC = () => {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    if (Object.keys(list).length === 0) {
      fetch(OPTIONS.url)
        .then((response) => response.json())
        .then((data) => setList(data.products))
        .catch((error) => console.error(error));
    }
  }, []);

  return (
    <div>
      <h1>Home page</h1>
      <ItemWrapper>
        {list.map(item => (
          <Card key={item.id} title={item.title} bordered={false} style={{ width: 300 }}>
            {item.description}
          </Card>
        ))}
      </ItemWrapper>
    </div>
  );
};

export default Home;
