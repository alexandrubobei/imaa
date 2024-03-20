import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoutingTestComponent } from "./pages/routing-test/routing-test.component";

const routes: Routes = [{ path: "routerTest", component: RoutingTestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingTestRoutingModule {}
