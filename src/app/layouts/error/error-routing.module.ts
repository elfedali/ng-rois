import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ErrorComponent } from "./error.component";

const routes: Routes = [
  {
    path: "",
    component: ErrorComponent,

    children: [
      {
        path: "",
        redirectTo: "err-404",
        pathMatch: "full",
      },
      {
        path: "err-404",
        loadChildren: () =>
          import("../../pages/error/not-found/not-found.module").then(
            (m) => m.NotFoundModule
          ),
      },
      {
        path: "err-500",
        loadChildren: () =>
          import("../../pages/error/server-error/server-error.module").then(
            (m) => m.ServerErrorModule
          ),
      },
      {
        path: "err-403",
        loadChildren: () =>
          import("../../pages/error/forbidden/forbidden.module").then(
            (m) => m.ForbiddenModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
