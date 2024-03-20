import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "workflow",
    loadChildren: () => import("../app/modules/workflow/workflow.routes").then((m) => m.WORKFLOW_ROUTES),
  },
  {
    path: "acquisitions",
    loadChildren: () => import("../app/modules/acquisitions/acquisitions.routes").then((m) => m.ACQUISITIONS_ROUTES),
  },
  {
    path: "routerTest",
    loadChildren: () => import("./modules/routing-test/routing-test.module").then((m) => m.RoutingTestModule),
  },
];
