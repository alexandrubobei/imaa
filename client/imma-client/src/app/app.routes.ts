import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'workflow',
    loadChildren: () =>
      import('../app/modules/workflow/workflow.routes').then(
        (m) => m.WORKFLOW_ROUTES
      ),
  },
  {
    path: 'investment',
    loadChildren: () =>
      import('../app/modules/investments/investments.routes').then(
        (m) => m.INVESTMENT_ROUTES
      ),
  },
];
