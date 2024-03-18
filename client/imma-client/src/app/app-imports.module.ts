import { NgModule } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

const modules = [MatIcon, MatSidenavModule];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class AppImportsModule {}
