import { ColumnsType } from "antd/es/table"
import dayjs from "dayjs"
import { Agenda } from "../../models/agenda.model"
import AgendaTableOptions from "./agenda-table-options"

export const commonFields: ColumnsType<Agenda> = [
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
]

export const exportColumns: ColumnsType<Agenda> = [
    ...commonFields,
    {
        title: 'Start date',
        dataIndex: 'startDate',
        key: 'startDate',
        filtered: true,
    },
    {
        title: 'End date',
        dataIndex: 'endDate',
        key: 'endDate',
        filtered: true,
    },
]

export const agendaColumns: ColumnsType<Agenda> = [
    ...commonFields,
    {
        title: 'Start date',
        dataIndex: 'startDate',
        key: 'startDate',
        filtered: true,
        render: (_, record) => dayjs(record.startDate).format('MMM DD, YYYY | hh:mm')
    },
    {
        title: 'End date',
        dataIndex: 'endDate',
        key: 'endDate',
        filtered: true,
        render: (_, record) => dayjs(record.endDate).format('MMM DD, YYYY | hh:mm')
    },
    {
        title: 'Options',
        dataIndex: 'endDate',
        key: 'endDate',
        render: (_, record) => <AgendaTableOptions agenda={record} />
    },
]
