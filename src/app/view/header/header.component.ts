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
        <div  (click)="userMenu.classList.toggle('hidden'); userMenu.classList.toggle('flex')"
             class="bg-contain relative w-9 border bg-sky-500 border-gray-700 cursor-pointer rounded-full hover:shadow-lg hover:shadow-cyan-900 flex justify-center items-center text-white font-bold">U

          <div #userMenu
               class="hidden cursor-auto flex-col gap-2 font-normal text-center bg-[#1E1F22] absolute border top-full mt-2 rounded-md right-0 p-2 shadow-lg shadow-gray-700 z-10">
            <div class="px-2 font-bold">someone&#64;123</div>
            <div class="whitespace-nowrap px-2">Hi, Thaaruni Dissanayake</div>
            <div class="cursor-pointer group flex flex-row rounded justify-center items-center
                        bg-slate-600 p-2 hover:bg-slate-700">
                    <span class="material-symbols-outlined group-hover:text-lime-500 pr-1">
                        logout
                    </span>
              Sign out
            </div>
          </div>
        </div>
    </header>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
