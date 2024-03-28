import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthComponent } from "./auth.component";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full",
      },
      {
        path: "login",
        loadChildren: () =>
          import("../../pages/security/login/login.module").then(
            (m) => m.LoginModule
          ),
      },
      {
        path: "register",
        loadChildren: () =>
          import("../../pages/security/register/register.module").then(
            (m) => m.RegisterModule
          ),
      },
      {
        path: "reset-password",
        loadChildren: () =>
          import(
            "../../pages/security/reset-password/reset-password.module"
          ).then((m) => m.ResetPasswordModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
