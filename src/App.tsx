import { Button, Typography, Upload, UploadProps } from 'antd';
import React, { useState } from 'react';
import {PlusOutlined} from '@ant-design/icons'
import AgendaTable from './components/agenda/agenda-table';
import AgendaForm from './components/agenda/agenda.form';
import { useSetRecoilState } from 'recoil';
import { agendaState } from './recoil/atoms/agenda-atom';
import { emptyAgenda } from './models/agenda.model';
import { useAppModal } from './components/common/app-modal';
import 'antd/dist/reset.css';
import './App.css';
import {LoadingOutlined} from "@ant-design/icons"
import { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload';
import readXlsxFile from 'read-excel-file'


const App:React.FC = () => {
    const {setOpen, setTitle, setContent} = useAppModal()
    const [loading, setLoading] = useState(false)
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

 const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div className="container">
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Typography.Title>Agenda</Typography.Title>
                <Button onClick={handleClick} icon={<PlusOutlined />} type="primary">Create record</Button>
                
                <Upload
                      name="file"
                      listType="picture-card"
                      className="avatar-uploader"
                      showUploadList={false}
                      beforeUpload={beforeUpload}
                      onChange={handleChange}
                    >
                      {uploadButton}
                </Upload>
            </div>
        
            <AgendaTable />
    </div>
  );
}

export default App;
