import { Button, Segmented, Space, Typography, Upload, UploadProps } from 'antd';
import React, { useState } from 'react';
import {PlusOutlined, UploadOutlined, CalendarOutlined, BarsOutlined} from '@ant-design/icons'
import AgendaTable from './components/agenda/agenda-table';
import AgendaForm from './components/agenda/agenda.form';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { agendaListState, agendaState } from './recoil/atoms/agenda-atom';
import { Agenda, emptyAgenda } from './models/agenda.model';
import { useAppModal } from './components/common/app-modal';
import 'antd/dist/reset.css';
import './App.css';
import { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload';
import readXlsxFile from 'read-excel-file'
import AgendaCalendar from './components/agenda/agenda-calenda';


const App:React.FC = () => {
    const {setOpen, setTitle, setContent} = useAppModal()
    const [loading, setLoading] = useState(false)
    const [view, setView] = useState('table-view')
    const setAgenda = useSetRecoilState(agendaState)
    const [agendaList, setAgendaList] = useRecoilState(agendaListState)

    const handleClick = () => {
       setAgenda(emptyAgenda)
       setTitle("Create agenda")
       setContent(<AgendaForm mode="create" />)
       setOpen(true)
    }
    
    const handleChange: UploadProps['onChange'] = (_: UploadChangeParam<UploadFile>) => {
          setLoading(true);
    }

    const beforeUpload = (file: RcFile) => {
       readXlsxFile(file)
          .then((rows) => {
            const agendaKeys = Object.keys(emptyAgenda)
             // TODO: Convert each row to agenda obj
             // TODO: Register each agenda object
             rows.slice(1).map(row => {
                const entries: any = []
                let obj: any;
                row.map((cell, index) => {
                    const agendaKey = agendaKeys[index] as keyof Agenda
                    entries.push([agendaKey, cell.toString()]);
                    obj = Object.fromEntries(entries);
                    obj.id = new Date().getTime()
                })
                console.log('obj: ', obj)
                setAgendaList([...agendaList, obj])
             })
             console.log(rows.slice(1))
             setLoading(false)
         })
    }

  return (
    <div className="container">
            <header className="app-header">
                <Typography.Title>Agenda</Typography.Title>
                <Space>
                    <Button onClick={handleClick} icon={<PlusOutlined />} type="primary">Create record</Button>
                    <Upload
                          name="file"
                          showUploadList
                          beforeUpload={beforeUpload}
                          onChange={handleChange}
                        >
                          <Button loading={loading} icon={<UploadOutlined />}>Upload from file</Button>
                    </Upload>
                </Space>
            </header>
        
            <Segmented 
                options={[{
                    value: 'table-view',
                    icon: <BarsOutlined />
                },
                {
                    value: 'calendar-view',
                    icon: <CalendarOutlined />
                }]} 
                onChange={(value) => setView(value as string)} 
                style={{marginBottom: '1rem'}}
            />

            
            { view === 'calendar-view' ? <AgendaCalendar /> : <AgendaTable /> }
            
            
    </div>
  );
}

export default App;
