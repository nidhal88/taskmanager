import { Injectable } from '@angular/core';
import { Level, Task, Status } from '../types';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  taskObject: Task[] = [
    {
      id: 1,
      task: 'tache 1',
      nivtask: Level.NIVEAU_1,
      date: '06/01/2024',
      status: Status.ENCOURS,
    },
    {
      id: 2,
      task: 'tache 2',
      nivtask: Level.NIVEAU_3,
      date: '03/01/2024',
      status: Status.EFFECTUEE,
    },
    {
      id: 3,
      task: 'tache 3',
      nivtask: Level.NIVEAU_2,
      date: '02/01/2024',
      status: Status.AFAIRE,
    },
  ];


  constructor() {}

  ajouterTask(newtask: Task){
    this.taskObject.push(newtask);
  }

  supprimerTask(i:number){
    this.taskObject.splice(i, 1);
  }
}
