import { Routes } from "@angular/router";
import { AcquisitionsComponent } from "./pages/acquisitions/acquisitions.component";

export const ACQUISITIONS_ROUTES: Routes = [
  {
    path: "",
    component: AcquisitionsComponent,
    children: [
      {
        path: "acquisitions",
        component: AcquisitionsComponent,
      },
    ],
  },
];
