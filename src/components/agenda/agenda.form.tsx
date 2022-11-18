import { Button, Col, DatePicker, Form, Input, message, Row, Space } from 'antd'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { Agenda, emptyAgenda } from '../../models/agenda.model'
import { agendaListState } from '../../recoil/atoms/agenda-atom'
import { useAppModal } from '../common/app-modal'

type Props = {
    mode: "edit" | "create"
    agenda?: Agenda
}

const AgendaForm: React.FC<Props> = ({mode, agenda = emptyAgenda}) => {
    const [agendaList, setAgendaList] = useRecoilState(agendaListState)
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm()
    const {setOpen} = useAppModal()
    
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
        setOpen(false)
    }

    return (
    <>
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
            rules={[{
                required: true,
                message: "Title is required"
            }]}
           >
                <Input placeholder="Title" />
           </Form.Item>
           <Form.Item
            name="description"
            label="Description"
            requiredMark
            rules={[{
                required: true,
                message: "Description is required",
            }, {
                min: 10,
                message: "Description should have a min of 10 characters"
            }]}
           >
                <Input placeholder="Title" />
           </Form.Item>
           <Form.Item
            name="location"
            label="Location"
            rules={[{
                required: true,
                message: "Location is required",
            }]}
           >
                <Input placeholder="location"/>
           </Form.Item>
            <Row gutter={[16, 16]}>
                <Col md={12}>
                   <Form.Item
                    name="startDate"
                    label="Start date"
                    rules={[{
                        required: true,
                        message: "Start date is required",
                    }]}
                   >
                        <DatePicker style={{width: '100%'}} showTime/>
                   </Form.Item>
                </Col>
                <Col md={12}>
                   <Form.Item
                    name="endDate"
                    label="Start date"
                    rules={[{
                        required: true,
                        message: "End date is required",
                    }]}
                   >
                        <DatePicker style={{width: '100%'}} showTime/>
                   </Form.Item>
                </Col>
                <Space size="small">
                    <Button type="primary" htmlType="submit" loading={loading}>Save</Button>
                </Space>
            </Row>
        </Form>
        </>
    )
}

export default AgendaForm
