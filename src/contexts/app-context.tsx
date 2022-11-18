import { createContext, useContext, useState } from "react";
import { Agenda } from "../models/agenda.model";

const AgendaContext = createContext({});

export const AgendaContextProvider = () => {
    const [aganda, setAgenda] = useState<Agenda[]>([])

    return (
        <AgendaContext.Provider value={{aganda, setAgenda}}>
        </AgendaContext.Provider>
    )
}

export const useAgenda = () => useContext(AgendaContext)
