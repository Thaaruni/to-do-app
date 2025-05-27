import {Component, Inject, Input} from '@angular/core';


@Component({
  selector: 'app-task',
  standalone: false,
  template: `
      <div class=" flex flex-row-reverse justify-end gap-2  hover:bg-gradient-to-r from-transparent via-sky-900 to-transparent p-2">
              <label class="text-slate-300 cursor-pointer">Task 1</label>

        <input class="accent-lime-500 w-5 ml-2 bg-slate-700" type="checkbox">
      </div>
  `,
  styleUrl: './task.component.scss'
})
export class TaskComponent {

}
