import React from "react";
import styled from "styled-components";
import { Card } from 'antd';

const HomeCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 15px;

  .home-card {
    width: calc(100%/3 - 15px);
  }
`

interface IHomeCardProps {
  selectedList: Array<any>,
}

const HomeCard: React.FunctionComponent<IHomeCardProps> = (props: IHomeCardProps) => {
  const { selectedList } = props

  return (
    <HomeCardWrapper>
      {selectedList.map(item => (
        <Card key={item.id} title={item.title} className="home-card">
          {item.description}
        </Card>
      ))}
    </HomeCardWrapper>
  )
}

export default HomeCard;
