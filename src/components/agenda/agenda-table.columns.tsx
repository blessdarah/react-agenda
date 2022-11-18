import { ColumnsType } from "antd/lib/table"
import { Agenda } from "../../models/agenda.model"

export const agendaColumns: ColumnsType<Agenda> = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        filtered: true,
    },
]
