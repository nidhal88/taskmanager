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
  message: string = '';
  task!: any;
  person!: any;
 

  ngOnInit() {
    
  }
  affect(nivtask: Level): void {
    this.persNivTask = this.personservice.filterPersonByNiv(nivtask);
    this.person = this.persNivTask;
    console.log(this.person);
    
  }

  Compatible(personNiv: string, commonNiv: string): boolean {
    return personNiv === commonNiv;
    
  }
 
  submit() {
    this.sub = true;
    
    //this.task=this.mytaskservice.taskObject;
  }
}
