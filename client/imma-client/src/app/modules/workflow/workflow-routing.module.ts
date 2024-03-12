import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WorkflowPageComponent } from "./pages/workflow-page/workflow-page.component";


const routes: Routes = [
  { path: "", component: WorkflowPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class WorkflowRoutingModule {}
