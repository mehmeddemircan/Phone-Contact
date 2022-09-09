import { Empty } from 'antd'
import React from 'react'

const NoCommentResutl = () => {
  return (
    <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 100,
    }}
    description={
      <h3>
            There is no comment
      </h3>
    }
  >

  </Empty>

  )
}

export default NoCommentResutl