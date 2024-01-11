import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from './task.service';
import { Task } from '../types';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterOutlet],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {


taskForm!: FormGroup;
errormsg!: boolean;



formbuilder= inject(FormBuilder);

mytaskservice= inject(TaskService);

ngOnInit(){
 
  this.taskForm= this.formbuilder.group({
    task:['', Validators.required],
    nivtask:['', Validators.required],
    date:['', Validators.required],
    status:['', Validators.required],
  })
 
}

addTask(): void {
  if(this.taskForm.invalid){
    this.errormsg=true;
    return;
    
  }
  else{
    this.errormsg=false;
  }

const newTask: Task={
   
  task: this.taskForm.value.task,
  nivtask: this.taskForm.value.nivtask,
  date: this.taskForm.value.date,
  status: this.taskForm.value.status,
}

this.mytaskservice.ajouterTask(newTask);

this.taskForm.reset();


}

removeTask(i: number): void {
  this.mytaskservice.supprimerTask(i);

}

}
