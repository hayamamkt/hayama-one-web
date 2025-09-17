import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">

        <main>
          <router-outlet  />
        </main>
      </div>
      <div class="drawer-side z-50">
        <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>

        <nav class="menu bg-base-100 min-h-full w-80 p-4">
          <h2 class="text-2xl text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent my-4">hayama:one</h2>
          <!-- Sidebar content here -->
          <ul class="flex flex-col gap-1">
            <li><a routerLink="/" class="btn btn-ghost btn-secondary">Home</a></li>
            <li><a routerLink="works" class="btn btn-ghost btn-secondary">Works</a></li>
            <li><a routerLink="todos" class="btn btn-ghost btn-secondary">Todos</a></li>
          </ul>
        </nav>
      </div>
    </div>
  `
})
export class App {
}
