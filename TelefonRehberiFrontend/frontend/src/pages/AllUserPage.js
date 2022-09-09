import { Avatar, List, Pagination, Skeleton } from 'antd'
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeLayout from '../components/layout/HomeLayout'
import AllUserListItem from '../components/list/AllUserListItem'
import UserPagination from '../components/pagination/UserPagination'
import { GetAllUser } from '../redux/actions/UserAction'

const AllUserPage = () => {


    const dispatch = useDispatch()
    const getAllUsers = useSelector((state) => state.getAllUsers)
    const [current, setCurrent] = useState(1);

    const onChange = (page) => {
      console.log(page);
      setCurrent(page);
    };
    const pageSize = 4 ; 

    useEffect(() => {
        dispatch(GetAllUser(current,pageSize))
    }, [dispatch,current,pageSize])


  return (
    <Fragment>
        <HomeLayout>
        <List>

            {getAllUsers.users.map((user) => (
                <AllUserListItem 
                    key={user.id}
                    user={user}
                />
            ))}
    
     
        </List>
                <UserPagination 
                    current={current}
                    onChange={onChange}
                />
        </HomeLayout>
    </Fragment>
  )
}

export default AllUserPage