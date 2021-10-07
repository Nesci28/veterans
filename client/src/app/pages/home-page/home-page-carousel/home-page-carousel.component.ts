import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-page-carousel",
  templateUrl: "./home-page-carousel.component.html",
  styleUrls: ["./home-page-carousel.component.scss"],
})
export class HomePageCarouselComponent implements OnInit {
  public imagesForSlider = [
    { path: "../../../../assets/1_tiny.webp" },
    { path: "../../../../assets/2_tiny.webp" },
    { path: "../../../../assets/3_tiny.webp" },
    { path: "../../../../assets/4_tiny.webp" },
  ];

  public height?: number;

  public ngOnInit(): void {
    this.height = window.innerHeight;
  }
}
