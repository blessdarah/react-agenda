import { Empty, Table } from 'antd';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { Agenda } from '../../models/agenda.model';
import { agendaListState } from '../../recoil/atoms/agenda-atom';
import ExcelExportWrapper from '../common/excel-export-wrapper';
import { agendaColumns, exportColumns } from './agenda-table.columns';

const AgendaTable: React.FC = () => {
    const agendaList = useRecoilValue(agendaListState) 
    
    return (
       <>
        {
            agendaList.length > 0 ?
                <ExcelExportWrapper columns={exportColumns} data={agendaList}>
                    <Table<Agenda>
                        dataSource={agendaList}
                        columns={agendaColumns}
                        rowKey={'id'}
                        size="small"
                        scroll={{x: '1000'}}
                    /> 
                </ExcelExportWrapper>
            : <Empty description="No agenda records at the moment. Click the add record to add a new agenda item" />
        }
       </>
    )
}

export default AgendaTable
