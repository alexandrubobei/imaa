import { Routes } from '@angular/router';
import { WorkflowPageComponent } from './pages/workflow-page/workflow-page.component';

export const WORKFLOW_ROUTES: Routes = [
  {
    path: '',
    component: WorkflowPageComponent,
    children: [
      {
        path: 'workflow',
        component: WorkflowPageComponent,
      },
    ],
  },
];
