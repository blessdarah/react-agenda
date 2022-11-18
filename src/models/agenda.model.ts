export type Agenda = {
    id: number;
    title: string;
    description: string;
    location: string;
    startDate: string;
    endDate: string;
    isAllDay: boolean;
}

export const emptyAgenda: Agenda = {
    id: new Date().getTime(),
    title: "",
    description: "",
    location: "",
    startDate: "",
    endDate: "",
    isAllDay: false
}
