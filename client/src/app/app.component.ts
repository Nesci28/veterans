import { Component } from "@angular/core";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { AppThemes } from "./enums/app-themes.enum";
import { ThemingService } from "./services/theming.service";

@UntilDestroy()
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public theme = this.themingService.defaultTheme;

  constructor(private themingService: ThemingService) {
    this.applyTheme(this.theme);
    this.watchTheme();
  }

  private watchTheme(): void {
    this.themingService.theme$.pipe(untilDestroyed(this)).subscribe((t) => this.applyTheme(t));
  }

  private applyTheme(theme: AppThemes): void {
    document.body.classList.remove(this.theme);
    this.theme = theme;
    document.body.classList.add(theme);
  }
}
