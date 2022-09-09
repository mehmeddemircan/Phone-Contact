import { Button, Form, Input } from 'antd';
import React, { Fragment } from 'react'

const EditAccountForm = () => {
  const [form] = Form.useForm();
  return (
   <Fragment>
              <div class="position-relative w-75 mx-auto   ">
              <Form
      
      form={form}
      layout="vertical"
     
    >
     
      <Form.Item label="Field A">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Field B">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item >
        <Button type="primary">Submit</Button>
      </Form.Item>
      
    </Form>
              </div>
   </Fragment>
  )
}

export default EditAccountForm