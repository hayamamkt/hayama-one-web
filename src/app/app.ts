import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <main>
      <router-outlet />
    </main>
  `
})
export class App {
  protected readonly title = signal('hayama-one-web');
}
