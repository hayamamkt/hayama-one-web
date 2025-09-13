import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
@Component({
  selector: 'app-shell-root',
  imports: [RouterOutlet, RouterLink, HeaderComponent],
  template: `
    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <app-shell-header />
        <main class="container mx-auto p-4">
          <router-outlet />
        </main>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="menu bg-base-200 min-h-full w-80 p-4">
          <!-- Sidebar content here -->
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="todos">Todos</a></li>
        </ul>
      </div>
    </div>
  `
})
export class App {
  protected readonly title = signal('shell');
}
