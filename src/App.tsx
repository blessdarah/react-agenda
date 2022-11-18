import { Button, Modal, PageHeader } from 'antd';
import React, { useState } from 'react';
import './App.css';
import {PlusOutlined} from '@ant-design/icons'
import AgendaTable from './components/agenda/agenda-table';
import AgendaForm from './components/agenda/agenda.form';
import { useSetRecoilState } from 'recoil';
import { agendaState } from './recoil/atoms/agenda-atom';
import { emptyAgenda } from './models/agenda.model';
import { useAppModal } from './components/common/app-modal';

const App:React.FC = () => {
    const {setOpen, setTitle, setContent} = useAppModal()
    const setAgenda = useSetRecoilState(agendaState)

    const handleClick = () => {
       setAgenda(emptyAgenda)
       setTitle("Create agenda")
       setContent(<AgendaForm mode="create" />)
       setOpen(true)
    }
  return (
    <div className="container">
        <PageHeader
            backIcon={false}
             style={{paddingLeft: 0, paddingRight: 0}}
              ghost={false}
              onBack={() => window.history.back()}
              title="Agenda"
              subTitle="Manage your agenda"
              extra={[
                <Button onClick={handleClick} icon={<PlusOutlined />}>Create record</Button>,
              ]}
            />
        
            <AgendaTable />
    </div>
  );
}

export default App;
