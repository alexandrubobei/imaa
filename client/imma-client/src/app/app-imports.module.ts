import { NgModule } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';

const modules = [
  CommonModule,
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  MatIcon,
  MatIconModule,
  MatSidenavModule,
  MatTableModule,
  MatTableModule,
  MatCheckboxModule,
  MatPaginator,
  MatPaginatorModule,
  MatButtonModule,
  MatTooltip,
  MatTooltipModule,
  MatToolbarModule,
  MatSelectModule,
  MatFormFieldModule,
  MatGridListModule,
  MatFormFieldModule,
  MatSelectModule,
  FormsModule,
  ReactiveFormsModule,
  MatMenuModule,
  MatExpansionModule,
  MatFormField,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class AppImportsModule {}
