import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeCtrlComponent } from "../theme-ctrl/theme-ctrl.component";
import { SearchBtnComponent } from "../search-btn/search-btn.component";

@Component({
  selector: 'app-shell-header',
  imports: [RouterLink, ThemeCtrlComponent, SearchBtnComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

}
