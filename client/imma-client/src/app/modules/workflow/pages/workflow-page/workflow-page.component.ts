import { Component } from '@angular/core';
import { ExpansionPanelComponent } from '../../../../shared/components/expansion-panel/expansion-panel.component';

@Component({
  selector: "app-workflow-page",
  standalone: true,
  imports: [ExpansionPanelComponent],
  templateUrl: "./workflow-page.component.html",
  styleUrl: "./workflow-page.component.scss",
})
export class WorkflowPageComponent {
  panelContent = [
    { header: "Panel 1", content: "Content for Panel 1" },
    { header: "Panel 2", content: "Content for Panel 2" },
  ];
}
