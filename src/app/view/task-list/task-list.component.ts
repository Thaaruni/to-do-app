import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: false,
  template: `
    <main class="p-2 flex flex-col gap-2">
      @for(task of [1,2,3,4]; track $index){
        <app-task/>
      }
    </main>
  `,
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

}
