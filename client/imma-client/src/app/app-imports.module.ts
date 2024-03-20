import { NgModule } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from "@angular/material/expansion";


const modules = [MatIcon, MatSidenavModule, MatExpansionModule];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class AppImportsModule {}
