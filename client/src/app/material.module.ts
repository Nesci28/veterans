import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MAT_DATE_LOCALE, MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from "@angular/material/snack-bar";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { IconModule } from "@visurel/iconify-angular";

const material = [
  MatAutocompleteModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatStepperModule,
  MatSelectModule,
  MatMenuModule,
  MatTableModule,
  MatIconModule,
  IconModule,
  MatCardModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatRippleModule,
  MatTabsModule,
  MatTooltipModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatToolbarModule,
  MatSnackBarModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...material],
  exports: material,
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "Fr" },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
  ],
})
export class MaterialModule {}
