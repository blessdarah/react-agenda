import { Modal } from 'antd'
import React from 'react'
import AgendaForm from './agenda.form'

const EditAgendaModal: React.FC = () => {
    
    return (
        <Modal
            title="Edit agenda"
            footer={false}
        >
           <AgendaForm mode="edit"/> 
        </Modal>

    )
}

export default EditAgendaModal
