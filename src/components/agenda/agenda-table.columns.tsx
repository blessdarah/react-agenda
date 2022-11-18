import { ColumnsType } from "antd/es/table"
import moment from "moment"
import { Agenda } from "../../models/agenda.model"
import AgendaTableOptions from "./agenda-table-options"

export const agendaColumns: ColumnsType<Agenda> = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        filtered: true,
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        filtered: true,
    },
    {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
        filtered: true,
    },
    {
        title: 'Start date',
        dataIndex: 'startDate',
        key: 'startDate',
        filtered: true,
        render: (_, record) => moment(record.startDate).utc().format('D MMM, Y').toString()
    },
    {
        title: 'End date',
        dataIndex: 'endDate',
        key: 'endDate',
        filtered: true,
        render: (_, record) => moment(record.endDate).utc().format('D MMM, Y').toString()
    },
    {
        title: 'Options',
        dataIndex: 'endDate',
        key: 'endDate',
        render: (_, record) => <AgendaTableOptions agenda={record} />
    },
]
