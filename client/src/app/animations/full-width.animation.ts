import { animate, AnimationTriggerMetadata, style, transition, trigger } from "@angular/animations";

export function fullWidthAnimation(duration: number): AnimationTriggerMetadata {
  return trigger("fullWidth", [
    transition(":enter", [
      style({
        maxWidth: "0%",
      }),
      animate(
        `${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`,
        style({
          maxWidth: "100%",
        }),
      ),
    ]),
  ]);
}

export const fullWidth750ms = fullWidthAnimation(750);
