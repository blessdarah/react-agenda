import React, { useState } from 'react'
import { Agenda } from '../../models/agenda.model'
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
import { Button, message, Modal, Popconfirm, Space, Tooltip } from 'antd'
import AgendaForm from './agenda.form'
import { useRecoilState } from 'recoil'
import { agendaListState } from '../../recoil/atoms/agenda-atom'

type Props = {
    agenda: Agenda
}

const AgendaTableOptions: React.FC<Props> = ({agenda}) => {
    const [agendaList, setAngendaList] = useRecoilState(agendaListState)
    const [openModal, setOpenModal] = useState(false)

    const handleDelete = () => {
        const others = agendaList.filter(item => item.id !== agenda.id);
        setAngendaList(others)
        message.success("Item deleted successfully")
    }

    return (
    <>
        <Modal open={openModal} onCancel={() => setOpenModal(false)} footer={false} title="Edit agenda" style={{width: '30rem', padding: '1rem'}}>
            <AgendaForm mode="edit" agenda={agenda} />
        </Modal>
        <Space size="small">
            <Tooltip title="Edit">
                <Button onClick={() => setOpenModal(true)} icon={<EditOutlined />}></Button>
            </Tooltip>
            <Popconfirm
                placement="topLeft"
                title="Are you sure you want to delete?"
                onConfirm={handleDelete}
                okText="Yes"
                cancelText="No"
            >
                <Tooltip title="Delete">
                    <Button icon={<DeleteOutlined />} danger></Button>
                </Tooltip>
            </Popconfirm>
        </Space>
        </>
    )
}

export default AgendaTableOptions
