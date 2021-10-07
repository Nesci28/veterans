import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { SidebarModes } from "../enums/sidebar-modes.enum";

@Injectable({
  providedIn: "root",
})
export class SidebarService {
  private openedBhv = new BehaviorSubject<boolean>(true);

  public opened$ = this.openedBhv.asObservable();

  private modeBhv = new BehaviorSubject<SidebarModes | undefined>(undefined);

  public mode$ = this.modeBhv.asObservable();

  public toggleSidebar(): void {
    this.openedBhv.next(!this.openedBhv.value);
  }

  public setMode(mode: SidebarModes): void {
    this.modeBhv.next(mode);
  }
}
