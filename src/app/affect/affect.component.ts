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
  imports: [
    TaskComponent,
    CommonModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    PersonComponent,
  ],
  templateUrl: './affect.component.html',
  styleUrl: './affect.component.scss',
})
export class AffectComponent {
  mytaskservice = inject(TaskService);
  personservice = inject(AppService);

    sub!: boolean;
  persNivTask: Person[] = [];
  lastperson!: Person;
  lasttask!: Task;
  person:any;
  tas! : any;

  ngOnInit() {}
  affect(nivtask: Level): void {
    this.persNivTask = this.personservice.filterPersonByNiv(nivtask);
  }

  Compatible(personNiv: string, commonNiv: string): boolean {
    return personNiv === commonNiv;
  }
 
  submit(taskk: Task, pers: Person) {
    this.sub = true;
    this.person = this.personservice.personObject;
    this.tas = this.mytaskservice.taskObject;
    this.lastperson = pers;
    this.lasttask = taskk;
  }
}
