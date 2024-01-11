import { Component, inject } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../task/task.service';
import { Status, Task, Person, Level } from '../types';
import { AppService } from '../app.service';
import { PersonComponent } from '../person/person.component';



@Component({
  selector: 'app-affect',
  standalone: true,
  imports: [TaskComponent, CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule,PersonComponent],
  templateUrl: './affect.component.html',
  styleUrl: './affect.component.scss'
})
export class AffectComponent {
  mytaskservice = inject(TaskService)
  personservice = inject(AppService)
  

  pniv! : string;
  //afts = Status.AFAIRE
  sameniv!: boolean;
  sub! : boolean;

  //nomm! : string;
  //prenomm! : string;
  //taskk! : string;
   task! : Task;


   filterservice = inject(AppService)
   persNivTask : Person[] = [] 
  ngOnInit(){

   
 
this.persNivTask=this.filterservice.filterPersonByNiv(this.task.nivtask)
  }
  affect():void {
    this.sameniv = true;
    //this.pniv = task.nivtask;
  }

  

  Compatible(personNiv: string, commonNiv: string): boolean {
    return personNiv === commonNiv;
  }
  submit() {
  this.sub = true;
  //this.nomm = pers.nom;
  //this.prenomm = pers.prenom;
  //this.taskk = task.task;
  }
  
}
