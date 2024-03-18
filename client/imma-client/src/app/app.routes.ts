import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'workflow',
    loadChildren: () =>
      import('../app/modules/workflow/workflow.routes').then(
        (m) => m.WORKFLOW_ROUTES
      ),
  },
];
