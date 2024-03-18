import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'workflow',
    loadComponent: () =>
      import(
        '../app/modules/workflow/pages/workflow-page/workflow-page.component'
      ).then((m) => m.WorkflowPageComponent),
  },
];
