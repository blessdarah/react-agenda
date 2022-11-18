import { Button, PageHeader } from 'antd';
import React from 'react';
import './App.css';
import {PlusOutlined} from '@ant-design/icons'
import AgendaTable from './components/agenda/agenda-table';
import AgendaForm from './components/agenda/agenda.form';
import { useModalContext } from './contexts/modal-context';

const App:React.FC = () => {
    const {setShowModal, setContent, setTitle} = useModalContext()

    const handleClick = () => {
       setTitle("Create new record")
       setContent(<AgendaForm />)
       setShowModal(true)
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
