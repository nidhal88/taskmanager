import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TaskService } from '../../task/task.service';

@Component({
  selector: 'app-taskseffect',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './taskseffect.component.html',
  styleUrl: './taskseffect.component.scss'
})
export class TaskseffectComponent {
  mytaskservice = inject(TaskService) 

}
