import { Routes } from '@angular/router';
import { InvestmentListviewComponent } from './pages/investment-listview/investment-listview.component';
import { InvestmentDetailComponent } from './pages/investment-detail/investment-detail.component';

export const INVESTMENT_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listview',
        component: InvestmentListviewComponent,
      },
      {
        path: 'detail',
        component: InvestmentDetailComponent,
      },
    ],
  },
];
