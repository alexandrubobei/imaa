import { Component } from '@angular/core';
import { ExpansionPanelComponent } from "../../../../shared/components/expansion-panel/expansion-panel.component";

@Component({
  selector: "app-acquisitions",
  standalone: true,
  templateUrl: "./acquisitions.component.html",
  styleUrl: "./acquisitions.component.scss",
  imports: [ExpansionPanelComponent],
})
export class AcquisitionsComponent {
  panelContent = [
    { header: "Panel 1", content: "Content for Panel 1" },
    { header: "Panel 2", content: "Content for Panel 2" },
    { header: "Panel 3", content: "Content for Panel 3" },
  ];
}
