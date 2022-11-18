import moment from "moment";

export type Agenda = {
    title: string;
    description: string;
    location: string;
    startDate: string;
    endDate: string;
    isAllDay: boolean;
}

export const emptyAgenda: Agenda = {
    title: "test",
    description: "description",
    location: "Bamenda",
    startDate: "",
    endDate: "",
    isAllDay: false
}
