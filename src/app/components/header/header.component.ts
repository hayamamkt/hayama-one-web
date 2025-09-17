import { Component } from '@angular/core';
import { ThemeCtrlComponent } from "../theme-ctrl/theme-ctrl.component";

@Component({
  selector: 'app-header',
  imports: [ThemeCtrlComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

}
