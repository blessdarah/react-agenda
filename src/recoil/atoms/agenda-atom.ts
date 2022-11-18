import { atom } from "recoil";
import { Agenda, emptyAgenda } from "../../models/agenda.model";

const agendaState = atom({
  key: 'agenda', 
  default: emptyAgenda
});

const agendaListState = atom({
  key: 'agenda-list', 
  default: [] as Agenda[]
});

export {agendaState, agendaListState}
