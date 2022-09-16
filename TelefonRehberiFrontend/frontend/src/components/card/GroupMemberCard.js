import { Badge, Space } from 'antd'
import React, { Fragment } from 'react'
import GroupMembers from '../list/GroupMembers'

const GroupMemberCard = ({groupDetails,loading}) => {
  return (
   <Fragment>
    <div class="col-md-6 my-4">
                    <div class="d-flex justify-content-between align-items-center">
                      <Space class="d-inline-block ">
                        <Badge count={groupDetails.users.length}>
                          <h6 class="d-inline-block mx-1">
                            {" "}
                            {
                            groupDetails.users.length !== 0
                              ? <h2>Group Members</h2>
                              : <h2>No Member </h2>}
                          </h6>
                        </Badge>
                      </Space>
                    </div>

                    <ol class="list-group list-group-numbered">
                      {loading === true ? (
                        <h2>loading</h2>
                      ) : (
                        groupDetails.users.map((user) => (
                          <GroupMembers key={user.id} user={user}  groupDetails={groupDetails}/>
                        ))
                      )}
                    </ol>
                  </div>
   </Fragment>
  )
}

export default GroupMemberCard