import { Table } from 'antd';
import React from 'react';
import { Agenda, emptyAgenda } from '../../models/agenda.model';
import { agendaColumns } from './agenda-table.columns';

const AgendaTable: React.FC = () => {
    

    return (
       <>
            <Table<Agenda>
                dataSource={[emptyAgenda]}
                columns={agendaColumns}
                rowKey={'title'}
                size="small"
            />
       </>
    )
}

export default AgendaTable
