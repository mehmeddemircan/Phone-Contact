import { Avatar, List } from 'antd'
import React, { Fragment } from 'react'

const PersonListItem = ({person}) => {
  return (
  <Fragment>
    <List.Item key={person.id}>
                <List.Item.Meta
                  avatar={<Avatar src={"https://joeschmoe.io/api/v1/random"} />}
                  title={
                    <>
                      <a href="https://ant.design">
                        {person.name} {person.surname}
                      </a>{" "}
                      <a class="mx-2">{person.id}</a>
                    </>
                  }
                  description={person.description}
                />
                <div>Details</div>
              </List.Item>
  </Fragment>
  )
}

export default PersonListItem