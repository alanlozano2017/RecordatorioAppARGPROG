export interface Task{
    id?: number;    // cuando creamos una task podria no tener id hasta que no se guarde
    text: string;
    day: string;
    reminder: boolean;
}