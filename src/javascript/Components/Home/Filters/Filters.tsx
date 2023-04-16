import { FunctionComponent } from "react";
import styled from "styled-components";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Button } from 'antd';

const FiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  .home-card {
    width: calc(100%/3 - 15px);
  }
`

interface IFiltersProps {
  deviceList: Array<any>,
  setFilteredDeviceList: Function,
  setFilteredDevices: Function,
}

const Filters: FunctionComponent<IFiltersProps> = (props: IFiltersProps) => {
  const { deviceList, setFilteredDeviceList, setFilteredDevices } = props
  const handleGetDevices = (brand: string) => {
    const myDevices = deviceList
      .map((item: Array<object>) => item)
      .filter((item: any) => item.brand === brand)

    setFilteredDeviceList(myDevices)
    setFilteredDevices(true)
  }

  const handleResetFilter = () => {
    setFilteredDeviceList(deviceList)
    setFilteredDevices(false)
  }

  return (
    <FiltersWrapper>
      <Button onClick={() => handleGetDevices('Apple')}>Show apple devices</Button>
      <Button onClick={() => handleGetDevices('Samsung')}>Show apple devices</Button>
      <Button onClick={handleResetFilter} icon={<CloseCircleOutlined />}>Reset filters</Button>
    </FiltersWrapper>
  )
}

export default Filters;
