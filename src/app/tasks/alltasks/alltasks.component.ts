import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TaskService } from '../../task/task.service';

@Component({
  selector: 'app-alltasks',
  standalone: true,
  imports: [RouterOutlet, CommonModule,RouterLink],
  templateUrl: './alltasks.component.html',
  styleUrl: './alltasks.component.scss'
})
export class AlltasksComponent {


  mytaskservice = inject(TaskService);

}
