import { Modal } from "antd";
import { createContext, useContext, useState } from "react";

const AppModalContext = createContext<any>({});

type Props = {
    children: React.ReactNode
}
export const AppModalProvider: React.FC<Props> = ({children}) => {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState();
    const [title, setTitle] = useState("Modal Title");
    const [width, setWidth] = useState('30rem');

    const values = { setOpen, setContent, setWidth, setTitle }

    return (
    <AppModalContext.Provider  value={values}>
        <>
            <Modal open={open} closable footer={false} title={title} onCancel={() => setOpen(false)} style={{width: width, padding: '1rem'}}>
                {content}
            </Modal>
            {children}
        </>
    </AppModalContext.Provider>
    )

}

export const useAppModal = () => useContext(AppModalContext)

