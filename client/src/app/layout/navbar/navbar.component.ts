import { Component } from "@angular/core";
import icClear from "@iconify/icons-ic/clear";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  public icons = {
    icClear,
  };

  public active = [true, false, false, false, false, false, false];

  public navigate(index: number): void {
    this.active = this.active.map(() => false);
    this.active[index] = true;
  }

  public askToJoin(): void {
    console.log("Ask to Join");
  }
}
