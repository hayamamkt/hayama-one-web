import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomePage } from "./pages/home/home.page";

@Component({
  selector: 'app-shell-root',
  imports: [RouterOutlet, RouterLink, HomePage],
  template: `
    <h1>{{ title() }}</h1>
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/works">Works</a></li>
    </ul>
    <app-shell-home />
    <router-outlet></router-outlet>
  `,
})
export class App {
  protected readonly title = signal('shell');
}
