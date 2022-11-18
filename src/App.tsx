import { Button, Typography } from 'antd';
import React from 'react';
import {PlusOutlined} from '@ant-design/icons'
import AgendaTable from './components/agenda/agenda-table';
import AgendaForm from './components/agenda/agenda.form';
import { useSetRecoilState } from 'recoil';
import { agendaState } from './recoil/atoms/agenda-atom';
import { emptyAgenda } from './models/agenda.model';
import { useAppModal } from './components/common/app-modal';
import 'antd/dist/reset.css';
import './App.css';


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
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Typography.Title>Agenda</Typography.Title>
                <Button onClick={handleClick} icon={<PlusOutlined />} type="primary">Create record</Button>
            </div>
        
            <AgendaTable />
    </div>
  );
}

export default App;
