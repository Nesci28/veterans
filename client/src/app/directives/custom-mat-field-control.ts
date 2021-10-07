/* eslint-disable no-underscore-dangle */
import { FocusMonitor } from "@angular/cdk/a11y";
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { Directive, ElementRef, HostBinding, Input, OnDestroy, OnInit, Optional, Self } from "@angular/core";
import { ControlValueAccessor, FormControl, NgControl } from "@angular/forms";
import { MatFormFieldControl } from "@angular/material/form-field";
import { Subject } from "rxjs";

// MatFormFieldControl values
// https://material.angular.io/guide/creating-a-custom-form-field-control#implementing-the-methods-and-properties-of-matformfieldcontrol
@Directive()
export class CustomMatFieldControlDirective<T>
implements ControlValueAccessor, OnInit, OnDestroy, MatFormFieldControl<T> {
  public static nextId = 0;

  public controlType = "custom-input-container";

  // eslint-disable-next-line no-plusplus
  @HostBinding() public id = `${this.controlType}-${CustomMatFieldControlDirective.nextId++}`;

  public customControl = new FormControl("", []);

  public stateChanges = new Subject<void>();

  public touched = false;

  public isDisabled = false;

  public focused = false;

  public errorState = false;

  @Input("aria-describedby") public userAriaDescribedBy: string | undefined;

  @Input()
  public get value(): T {
    return this.value;
  }

  public set value(text: T) {
    this.value = text;
    this.stateChanges.next();
  }

  @Input()
  public get placeholder(): string {
    return this._placeholder;
  }

  public set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }

  private _placeholder = "";

  public get empty(): boolean {
    return !(this.customControl.value || undefined);
  }

  @HostBinding("class.floating")
  public get shouldLabelFloat(): boolean {
    return this.focused || !this.empty;
  }

  @Input()
  public get required(): boolean {
    return this._required;
  }

  public set required(req) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }

  private _required = false;

  @Input()
  public get disabled(): boolean {
    return this._disabled;
  }

  public set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this._disabled ? this.customControl.disable() : this.customControl.enable();
    this.stateChanges.next();
  }

  private _disabled = false;

  protected destroy$ = new Subject();

  // These exceptions must be implemented that way because of the value accessor.
  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  public onChange = (text: any): void => {};

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public onTouched = (): void => {};

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    protected fm: FocusMonitor,
    protected elRef: ElementRef<HTMLElement>,
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }

    fm.monitor(elRef, true).subscribe((origin) => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  public ngOnInit(): void {
    this.customControl.valueChanges.subscribe((value) => this.inputChange(value));
  }

  public ngOnDestroy(): void {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef);
    this.destroy$.next();
  }

  public setDescribedByIds(ids: string[]): void {
    // tslint:disable-next-line: no-non-null-assertion
    const controlElement = this.elRef.nativeElement.querySelector(`.${this.controlType}`)!;
    controlElement.setAttribute("aria-describedby", ids.join(" "));
  }

  public onContainerClick(event: MouseEvent): void {
    if ((event.target as Element).tagName.toLowerCase() !== "input") {
      this.elRef.nativeElement.querySelector("input")?.focus();
    }
  }

  public writeValue(text: T | T[]): void {
    this.customControl.setValue(text);
  }

  public registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    isDisabled ? this.customControl.disable() : this.customControl.enable();
  }

  protected inputChange(text: string): void {
    this.markAsTouched();
    this.onChange(text);
  }

  protected markAsTouched(): void {
    if (this.touched) {
      return;
    }
    this.onTouched();
    this.touched = true;
  }
}
