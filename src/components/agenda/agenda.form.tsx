import { Button, Col, DatePicker, Form, Input, Row, Space } from 'antd'
import React, { useState } from 'react'
import { Agenda, emptyAgenda } from '../../models/agenda.model'

const AgendaForm: React.FC = () => {
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm()

    const onFinish = (values: Agenda) => {
        setLoading(true)
        console.log('values: ', values)
        setLoading(false)
    }

    return (
        <Form
            name="agenda-form"
            form={form}
            onFinish={onFinish}
            initialValues={emptyAgenda}
            layout="vertical"
        >
           <Form.Item
            name="title"
            label="Title"
           >
                <Input placeholder="Title" />
           </Form.Item>
           <Form.Item
            name="description"
            label="Description"
           >
                <Input placeholder="Title" />
           </Form.Item>
           <Form.Item
            name="location"
            label="Location"
           >
                <Input placeholder="location"/>
           </Form.Item>
            <Row gutter={[16, 16]}>
                <Col md={12}>
                   <Form.Item
                    name="startDate"
                    label="Start date"
                   >
                        <DatePicker style={{width: '100%'}} showTime/>
                   </Form.Item>
                </Col>
                <Col md={12}>
                   <Form.Item
                    name="endDate"
                    label="Start date"
                   >
                        <DatePicker style={{width: '100%'}} showTime/>
                   </Form.Item>
                </Col>
                <Space size="small">
                    <Button type="primary" htmlType="submit" loading={loading}>Save</Button>
                </Space>
            </Row>
        </Form>
    )
}

export default AgendaForm
