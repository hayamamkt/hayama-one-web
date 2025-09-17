import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, HeaderComponent],
  template: `
    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        <app-header />
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
    <dialog id="search_modal" class="modal">
      <div class="modal-box">
        <h3 class="text-lg font-bold">algolia.com</h3>
        <p class="py-4">Press ESC key or click the button below to close</p>
        <p>Use algolia.com to search</p>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <a class="btn btn-primary" title="close">Close</a>
          </form>
        </div>
      </div>
    </dialog>

  `
})
export class App {
}
