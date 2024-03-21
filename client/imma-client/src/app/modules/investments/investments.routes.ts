import { Routes } from '@angular/router';
import { InvestmentListviewComponent } from './pages/investment-listview/investment-listview.component';

export const INVESTMENT_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listview',
        component: InvestmentListviewComponent,
      },
    ],
  },
];
