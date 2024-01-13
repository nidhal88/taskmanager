import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TaskService } from '../../task/task.service';

@Component({
  selector: 'app-tasksafaire',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './tasksafaire.component.html',
  styleUrl: './tasksafaire.component.scss'
})
export class TasksafaireComponent {
mytaskservice = inject(TaskService)
}
