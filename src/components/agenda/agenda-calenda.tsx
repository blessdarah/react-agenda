import { Calendar } from 'antd'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { agendaListState } from '../../recoil/atoms/agenda-atom'

const AgendaCalendar: React.FC = () => {
    const agendaList = useRecoilValue(agendaListState)

    const dateCellRender = () => {
        return (
            agendaList.map((item, index) => <div key={index}>{item.title}</div>)
        )
    }

    const monthCellRender = () => {
        return (
            agendaList.map((item, index) => <div key={index}>{item.title}</div>)
        )
    }
    return (
        <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
    )
}

export default AgendaCalendar

