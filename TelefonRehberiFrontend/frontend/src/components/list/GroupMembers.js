import { Button, Tooltip } from 'antd'
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetUsersInGroup } from '../../redux/actions/GroupAction'
import { DeleteUser } from '../../redux/actions/UserAction'
import { DELETE_USER_RESET } from '../../redux/constants/UserConstant'

const GroupMembers = ({user}) => {


    const dispatch = useDispatch()

    const handleDeleteUser =(id) => {
        dispatch(DeleteUser(id))
    }

  return (
    <Fragment>
         <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">{user.name}</div>
                    {user.description}
                  </div>

                  <Tooltip
                    title={
                      <ul class="list-group">
                        <button
                          type="button"
                          class="btn btn-link btn-sm"
                          style={{ color: "#fff" }}
                          onClick={()=> handleDeleteUser(user.id)}
                        >
                          Remove {user.id}
                        </button>
                        <button
                          type="button"
                          class="btn btn-link btn-sm"
                          style={{ color: "#fff" }}
                        >
                          Make Admin
                        </button>
                      </ul>
                    }
                    trigger="click"
                  >
                    <Button
                      type="primary"
                      shape="circle"
                     
                    />
                  </Tooltip>
                </li>
    </Fragment>
  )
}

export default GroupMembers