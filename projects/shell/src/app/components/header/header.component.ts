import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeCtrlComponent } from "../theme-ctrl/theme-ctrl.component";

@Component({
  selector: 'app-shell-header',
  imports: [RouterLink, ThemeCtrlComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

}
