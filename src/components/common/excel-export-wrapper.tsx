import React, { ReactElement } from 'react'
import { Button, Card } from 'antd'
import { Excel } from 'antd-table-saveas-excel'

type Props = {
    fileName?: string
    children: React.ReactNode
    sheetName?: string
    columns: any
    data: any
}

const ExcelExportWrapper: React.FC<Props> = ({
    children,
    fileName = 'Agenda',
    sheetName = 'Sheet 1',
    columns,
    data,
}) => {
    const excelExport = () => {
        const excel = new Excel()
        excel
            .addSheet(sheetName)
            .addColumns(columns)
            .addDataSource(data, {
                str2Percent: true,
            })
            .saveAs(`${fileName}.xlsx`)
    }
    return (
        <Card
            size="small"
            extra={<Button onClick={excelExport}>Export to excel</Button>}
        >
            {children}
        </Card>
    )
}

export default ExcelExportWrapper

