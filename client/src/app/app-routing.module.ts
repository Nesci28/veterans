import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeModule } from "./pages/home-page/home-page.module";

const routes: Routes = [
  {
    path: "",
    loadChildren: async (): Promise<HomeModule> => (await import("./pages/home-page/home-page.module")).HomeModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
