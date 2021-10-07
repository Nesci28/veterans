import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HomePageCarouselModule } from "./home-page-carousel/home-page-carousel.module";
import { HomePageRoutingModule } from "./home-page-routing.module";
import { HomePageComponent } from "./home-page.component";

@NgModule({
  imports: [CommonModule, HomePageCarouselModule, HomePageRoutingModule],
  declarations: [HomePageComponent],
})
export class HomeModule {}
