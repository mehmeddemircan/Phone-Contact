import React from 'react'
import { SmileOutlined } from '@ant-design/icons';
import { Result } from 'antd';
const NoUserResult = () => {
  return (
    <Result
    icon={<SmileOutlined />}
    title="There is no group member in your group"
    // extra={<Button type="primary">Next</Button>}
  />
  )
}

export default NoUserResult