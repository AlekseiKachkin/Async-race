export type Car = {
    id: number;
    color: string;
    name: string;
};

export type Garage = Car[];

export type Winner = {
    id: number;
    wins: number;
    time: number;
};

export type Winners = Winner[];
export interface carContainer extends HTMLDivElement {
    id: string;
}
