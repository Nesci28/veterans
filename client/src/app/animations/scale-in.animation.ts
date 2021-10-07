import { animate, AnimationTriggerMetadata, style, transition, trigger } from "@angular/animations";

export function scaleInAnimation(duration: number): AnimationTriggerMetadata {
  return trigger("scaleIn", [
    transition(":enter", [
      style({
        transform: "scale(0)",
      }),
      animate(
        `${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`,
        style({
          transform: "scale(1)",
        }),
      ),
    ]),
  ]);
}

export const scaleIn400ms = scaleInAnimation(400);
