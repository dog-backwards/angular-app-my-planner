import { Component } from "@angular/core";
import { Task } from "./task";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "MyPlanner";
  //taskName: string; - z eventem onKeyUp
  tasks: Task[] = [
    {
      name: "Nauka Angulara",
      deadline: "2021/05/01",
      done: false
    },
    {
      name: "Obejrzenie Wikingów do końca",
      deadline: "2021/04/10",
      done: false
    },
    {
      name: "Seans Cobra Kai",
      deadline: "2021/02/15",
      done: true
    }
  ];

  // Metoda Angulara
  getFooter(): string {
    return "© MyPlanner application.";
  }

  // Metoda Typescript
  get footer2(): string {
    return "Created by Patryk Pesta. All rights reserved";
  }

  // Metoda + pipe z parametrem modyfikujacym wyświetlanie daty
  getDate(): Date {
    return new Date();
  }

  // Metoda czyszcząca listę zadań  / można tylko tasks = [] w htmlu zamiast clearTasks
  clearTasks() {
    this.tasks = [];
  }

  // Metoda uruchamiana gdy wpisujemy coś w pole tekstowe
  /*
  onKeyUp(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement; // as HTMLInputElement - rzutowanie typu
    this.taskName = target.value; // Pobierana wartość z pola tekstowego (value) z property target jest przypisywana do pola taskName
  }

  // Metoda dodaje zadanie do listy zadań
  /* Używając eventu keyUp
  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: "2021-02-10",
      done: false
    };
    this.tasks.push(task);
  }
  */
  createTask(name: string) {
    const task: Task = {
      name, // zamiast name: name,
      deadline: "2021-02-10",
      done: false
    };
    this.tasks.push(task);
  }
}
