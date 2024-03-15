import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowService } from './services/workflow.service';
import { WorkflowRoutingModule } from './workflow-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, WorkflowRoutingModule],
  providers: [WorkflowService],
})
export class WorkflowModule {}
