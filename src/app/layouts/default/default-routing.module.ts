import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DefaultComponent } from "./default.component";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        redirectTo: "chat",
        pathMatch: "full",
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("../../pages/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: "chat",
        loadChildren: () =>
          import("../../pages/chat/chat.module").then((m) => m.ChatModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultRoutingModule {}
