import { Button, Dropdown, Menu, Space } from 'antd'
import React, { Fragment, useState } from 'react'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { GroupPeopleByLetter } from '../../redux/actions/PersonAction';
import PersonList from '../list/PersonList';

const FilterDropdownAntd = ({filterByFirstLetter,handleGroupPeople,handleOrderByDesc,filterOrderDesc, handleDefaultFilter}) => {



    const menu =  (
        <Menu
     
      >
        <div class="d-flex flex-column justify-content-center">
        <button class="btn" key={1} onClick={handleDefaultFilter}>Added : The newest to oldest</button>
        <button class="btn" onClick={handleOrderByDesc}>Added : The Oldest to newest</button>
        <button  class="btn text-start my-2" onClick={handleGroupPeople} >Grouping by first letter</button>
        </div>
      </Menu>
    )
  return (
   <Fragment>


<Dropdown  overlay={menu}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      <Button  > Default Filter <DownOutlined /></Button>
     
      </Space>
    </a>
  </Dropdown>

    
   </Fragment>
  )
}

export default FilterDropdownAntd