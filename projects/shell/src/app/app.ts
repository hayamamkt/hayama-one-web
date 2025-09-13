import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
@Component({
  selector: 'app-shell-root',
  imports: [RouterOutlet, RouterLink, HeaderComponent],
  template: `
    <app-shell-header />
    <router-outlet />
  `
})
export class App {
  protected readonly title = signal('shell');
}
