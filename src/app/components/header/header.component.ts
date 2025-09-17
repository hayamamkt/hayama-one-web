import { Component } from '@angular/core';
import { ThemeCtrlComponent } from "../theme-ctrl/theme-ctrl.component";
import { SearchBtnComponent } from "../search-btn/search-btn.component";

@Component({
  selector: 'app-header',
  imports: [ThemeCtrlComponent, SearchBtnComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

}
