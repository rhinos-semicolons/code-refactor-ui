import React from 'react';
import { Layout, Input, Button, Form } from 'antd';
import './DashboardPage.css';

const { Header, Content } = Layout;

function DashboardPage() {
  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo">Code Refactor Application</div>
      </Header>
      <Content className="content">
        <div className="form-container">
          <Form onFinish={onFinish} layout="vertical">
            <Form.Item
              label="GitHub Repo URL"
              name="repoUrl"
              rules={[
                { required: true, message: 'Please enter the GitHub repo URL' }
              ]}
            >
              <Input
                placeholder="Enter the GitHub repo URL"
                style={{ width: '750px' }}
              />
            </Form.Item>
            <Form.Item
              label="Branch Name"
              name="branchName"
              rules={[
                { required: true, message: 'Please enter the Branch name' }
              ]}
            >
              <Input
                placeholder="Enter Branch name"
                style={{ width: '750px' }}
              />
            </Form.Item>
            <div style={{ textAlign: 'right', marginRight: 10 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Content>
    </Layout>
  );
}

export default DashboardPage;
