import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TaskService } from '../../task/task.service';

@Component({
  selector: 'app-tasksencours',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './tasksencours.component.html',
  styleUrl: './tasksencours.component.scss'
})
export class TasksencoursComponent {
  mytaskservice = inject(TaskService)
}
