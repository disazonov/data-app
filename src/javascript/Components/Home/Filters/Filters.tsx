import React, { FC, FunctionComponent } from "react";
import styled from "styled-components";
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
  filteredDevices: Boolean,
  setFilteredDeviceList: Function,
  setFilteredDevices: Function,
}

const Filters: React.FunctionComponent<IFiltersProps> = (props: IFiltersProps) => {
  const { deviceList, filteredDevices, setFilteredDeviceList, setFilteredDevices } = props
  const getMyDevices = () => {
    if (!filteredDevices) {
      const myDevices = deviceList
        .map((item: Array<object>) => item)
        .filter((item: any) => item.brand === 'Apple')

      setFilteredDeviceList(myDevices)
      setFilteredDevices(true)
      return
    }

    setFilteredDevices(false)
  }

  return (
    <FiltersWrapper>
      <Button onClick={getMyDevices}>{filteredDevices ? 'Show devices list' : 'Show my devices'}</Button>
    </FiltersWrapper>
  )
}

export default Filters;
