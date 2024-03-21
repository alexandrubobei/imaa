import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppImportsModule } from '../../../app-imports.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppImportsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
