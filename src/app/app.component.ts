import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MyPlanner';

// Metoda Angulara
  getFooter(): string {
    return '© MyPlanner application.';
  }

// Metoda Typescript
  get footer2(): string {
    return 'Created by Patryk Pesta. All rights reserved';
  }

  // Metoda + pipe z parametrem modyfikujacym wyświetlanie daty
  getDate(): Date{
    return new Date();
  }

  

}

