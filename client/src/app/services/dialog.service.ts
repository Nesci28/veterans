import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

export interface DialogOption<D> {
  component: any;
  data?: D;
  width?: string;
}

@Injectable({
  providedIn: "root",
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  public open<D, R = boolean>(options: DialogOption<D>): Promise<R> {
    // eslint-disable-next-line no-param-reassign
    options.width = options.width || "600px";
    return this.dialog
      .open(options.component, {
        width: options.width,
        data: options.data,
        disableClose: false,
        hasBackdrop: true,
        autoFocus: false,
      })
      .afterClosed()
      .toPromise();
  }
}
