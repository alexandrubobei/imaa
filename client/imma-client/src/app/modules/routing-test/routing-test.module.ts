import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RoutingTestRoutingModule } from "./routing-test-routing.module";
import { RoutingTestService } from "./services/routing-test.service";
import { RoutingTestComponent } from "./pages/routing-test/routing-test.component";

@NgModule({
  declarations: [],
  imports: [CommonModule, RoutingTestRoutingModule, RoutingTestComponent],
  providers: [RoutingTestService],
})
export class RoutingTestModule {}
