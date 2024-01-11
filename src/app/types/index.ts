export type Person={
    nom:string;
    prenom:string;
    niv:string;
}
export type Task={
    id?:number;
    task:string;
    nivtask:Level;
    date:string;
    status:string;
}

export enum Level{
    NIVEAU_1 = "Niveau 1",
    NIVEAU_2 = "Niveau 2",
    NIVEAU_3 = "Niveau 3"
 }

export enum Status{
    AFAIRE = "A faire",
    ENCOURS = "Encours",
    EFFECTUEE = "Effectue"
}