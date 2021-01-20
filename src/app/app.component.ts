import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Lista zadań';

// Metoda Angulara
  getFooter(): string {
    return '2020 © Lista zadań.';
  }

// Metoda Typescript
  get footer2(): string {
    return 'All rights reserved';
  }
}
