import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkflowPageComponent } from './pages/workflow-page/workflow-page.component';
import { HeaderComponent } from '../../shared/header/header.component';

const routes: Routes = [{ path: 'workflow', component: WorkflowPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class WorkflowRoutingModule {}
