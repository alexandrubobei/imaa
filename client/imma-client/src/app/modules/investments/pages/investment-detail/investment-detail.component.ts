import { Component } from '@angular/core';
import { AppImportsModule } from '../../../../app-imports.module';

@Component({
  selector: 'app-investment-detail',
  standalone: true,
  imports: [AppImportsModule],
  templateUrl: './investment-detail.component.html',
  styleUrl: './investment-detail.component.scss',
})
export class InvestmentDetailComponent {
  selected = 'volvo';
}
