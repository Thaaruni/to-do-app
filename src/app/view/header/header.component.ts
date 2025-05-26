import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  template: `
      <header class="flex justify-between border-b border-gray-700 p-2">
        <h1 class="flex items-center text-3xl select-none
        font-bold bg-gradient-to-r from-lime-600
        to-sky-500 bg-clip-text text-transparent">
            <span class="material-symbols-outlined text-3xl pr-2">
                task_alt
            </span>
          To-do App</h1>
        <div class="bg-contain relative w-9 border bg-sky-500 border-gray-700 cursor-pointer rounded-full hover:shadow-lg hover:shadow-cyan-900 flex justify-center items-center text-white font-bold ">U</div>
    </header>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
