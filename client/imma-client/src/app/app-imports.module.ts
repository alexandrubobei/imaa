import { NgModule } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

const modules = [
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  MatIcon,
  MatSidenavModule,
];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class AppImportsModule {}
