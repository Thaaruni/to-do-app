import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  template: `
    <app-header />
    <app-form />
    <app-task/>
  `,
  styles: ``
})
export class MainComponent {

}
