import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { AppImportsModule } from '../../app-imports.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet, AppImportsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {}
