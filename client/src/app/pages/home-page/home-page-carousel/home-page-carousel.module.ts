import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgxTypedJsModule } from "@nesci/ngx-typed-js";
import { IvyCarouselModule } from "angular-responsive-carousel";

import { HomePageCarouselComponent } from "./home-page-carousel.component";

@NgModule({
  declarations: [HomePageCarouselComponent],
  imports: [CommonModule, IvyCarouselModule, NgxTypedJsModule],
  exports: [HomePageCarouselComponent],
})
export class HomePageCarouselModule {}
