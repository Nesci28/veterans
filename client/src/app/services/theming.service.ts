import { ApplicationRef, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { AppThemes } from "../enums/app-themes.enum";

@Injectable({
  providedIn: "root",
})
export class ThemingService {
  public defaultTheme = (localStorage.getItem("defaultTheme") as AppThemes) || AppThemes.light;

  private themeBhv = new BehaviorSubject<AppThemes>(this.defaultTheme);

  public theme$ = this.themeBhv.asObservable();

  constructor(private ref: ApplicationRef) {
    const defaultTheme = localStorage.getItem("defaultTheme");
    const darkModeOn = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (darkModeOn && !defaultTheme) {
      this.themeBhv.next(AppThemes.dark);
    }

    window.matchMedia("(prefers-color-scheme: dark)").addListener((e) => {
      const turnOn = e.matches && !defaultTheme;
      this.themeBhv.next(turnOn ? AppThemes.dark : AppThemes.light);
      this.ref.tick();
    });
  }

  public change(theme: AppThemes): void {
    this.themeBhv.next(theme);
  }
}
