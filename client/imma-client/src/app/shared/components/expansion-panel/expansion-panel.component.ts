import { Component, Input } from "@angular/core";
import { AppImportsModule } from "../../../app-imports.module";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-expansion-panel",
  standalone: true,
  imports: [AppImportsModule, CommonModule],
  templateUrl: "./expansion-panel.component.html",
  styleUrl: "./expansion-panel.component.scss",
})
export class ExpansionPanelComponent {
  panelOpenState = false;
  @Input() customText: string = "test"; 
  @Input() panelContent: any[] = [];
}
