import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { Agenda, emptyAgenda } from "../models/agenda.model";


type Props = {
    children: React.ReactNode
}

type AgendaContextType = {
    agendaList: Agenda[],
    setAgendaList: Dispatch<SetStateAction<Agenda[]>>,
    activeAgenda: Agenda,
    setActiveAgenda: Dispatch<SetStateAction<Agenda>>
}

const AgendaContext = createContext<AgendaContextType>({
    agendaList: [], 
    setAgendaList: () => emptyAgenda, 
    activeAgenda: emptyAgenda, 
    setActiveAgenda: () => emptyAgenda
});

export const AgendaContextProvider: React.FC<Props> = ({children}) => {
    const [agendaList, setAgendaList] = useState<Agenda[]>([])
    const [activeAgenda, setActiveAgenda] = useState<Agenda>(emptyAgenda)
    
    useEffect(() => {
        console.log('agenda list: ', agendaList)
    }, [agendaList,activeAgenda])
    return (
        <AgendaContext.Provider value={{agendaList, setAgendaList, activeAgenda, setActiveAgenda}}>
            {children}
        </AgendaContext.Provider>
    )
}

export const useAgenda = () => useContext<AgendaContextType>(AgendaContext)
