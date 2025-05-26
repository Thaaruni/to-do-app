import {Component} from '@angular/core';


@Component({
  selector: 'app-form',
  standalone: false,
  template: `
    <form action="" class="flex p-2 gap-1 border-b border-gray-700 sticky top-0 bg-[#1E1F22]">
        <input #txt type="text"
               placeholder="Eg. Finish To-do App Design"
            class="border flex-grow p-1 px-2 outline-0
            selection:bg-slate-700
                bg-transparent border-gray-600 caret-sky-500 text-white
                rounded focus:ring-1 hover:border-sky-300 focus:ring-sky-400">
        <button class="border px-2 border-gray-700 font-bold
            hover:shadow-lg hover:shadow-cyan-900 outline-0 focus:ring-1 ring-emerald-600
            bg-gradient-to-r from-indigo-500 to-sky-500 text-slate-100 rounded hover:from-green-600 hover:to-sky-500">
            ADD
        </button>
    </form>
  `,
  styleUrl: './form.component.scss'
})
export class FormComponent{

}
