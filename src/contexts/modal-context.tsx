import { Modal } from 'antd'
import { useEffect, createContext, FC, useState, useContext } from 'react'

export const AppModalContext = createContext({})

type Props = {
    children: React.ReactNode
}

export const AppModalProvider: FC<Props> = ({ children }) => {
    const [showModal, setShowModal] = useState(false)
    const [content, setContent] = useState("")
    const [width, setWidth] = useState('30rem')
    const [title, setTitle] = useState('Modal title')
    const [handleSave, setHandleSave] = useState()

    useEffect(() => {}, [content, title])
    return (
        <>
            <AppModalContext.Provider
                value={{
                    showModal,
                    setShowModal,
                    title,
                    setTitle,
                    content,
                    setContent,
                    width,
                    setWidth,
                    handleSave,
                    setHandleSave,
                }}
            >
                <Modal
                    title={title}
                    open={showModal}
                    width={width}
                    onOk={handleSave}
                    onCancel={() => setShowModal(false)}
                    footer={null}
                    bodyStyle={{ padding: '1rem' }}
                    maskClosable={false}
                >
                    {content}
                </Modal>
                {children}
            </AppModalContext.Provider>
        </>
    )
}

export const useModalContext = () => useContext<any>(AppModalContext)

