import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/workflow/workflow.module').then(m => m.WorkflowModule)
  }
]
