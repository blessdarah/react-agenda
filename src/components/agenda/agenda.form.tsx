import { Button, Col, DatePicker, Form, Input, message, Row, Space } from 'antd'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { Agenda, emptyAgenda } from '../../models/agenda.model'
import { agendaListState } from '../../recoil/atoms/agenda-atom'

type Props = {
    mode: "edit" | "create"
    agenda?: Agenda
}

const AgendaForm: React.FC<Props> = ({mode, agenda = emptyAgenda}) => {
    const [agendaList, setAgendaList] = useRecoilState(agendaListState)
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm()
    
    const onFinish = (values: Agenda) => {
        setLoading(true)
        if(mode === 'create') {
           setAgendaList([...agendaList, {...values, id: new Date().getTime()}]) 
            message.success("Item created successfully")
        }else {
            const others = agendaList.filter(item => item.id !== agenda.id)
            setAgendaList([...others, {...values, id: new Date().getTime()}])
            message.success("Item updated successfully")
        }
        setLoading(false)
        form.resetFields()
    }

    return (
        <Form
            name="agenda-form"
            form={form}
            onFinish={onFinish}
            initialValues={agenda}
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
