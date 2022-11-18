import { Button, Segmented, Space, Typography, Upload, UploadProps } from 'antd';
import React, { useState } from 'react';
import {PlusOutlined, UploadOutlined, CalendarOutlined, BarsOutlined} from '@ant-design/icons'
import AgendaTable from './components/agenda/agenda-table';
import AgendaForm from './components/agenda/agenda.form';
import { useSetRecoilState } from 'recoil';
import { agendaState } from './recoil/atoms/agenda-atom';
import { emptyAgenda } from './models/agenda.model';
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
             // TODO: Convert each row to agenda obj
             // TODO: Register each agenda object
             console.log(rows.slice(1))
             setLoading(false)
         })
    }

  return (
    <div className="container">
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
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
            </div>
        
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
