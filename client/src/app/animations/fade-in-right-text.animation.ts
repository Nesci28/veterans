import { animate, AnimationTriggerMetadata, style, transition, trigger } from "@angular/animations";

export function fadeInRightTextAnimation(duration: number): AnimationTriggerMetadata {
  return trigger("fadeInRightText", [
    transition(":enter", [
      style({
        transform: "translateX(-60%)",
        opacity: 0,
        maxWidth: "0%",
        overflow: "hidden",
        position: "relative",
        whiteSpace: "nowrap",
      }),
      animate(
        `${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`,
        style({
          transform: "translateX(0%)",
          opacity: 1,
          maxWidth: "100%",
          overflow: "hidden",
          position: "relative",
          whiteSpace: "nowrap",
        }),
      ),
    ]),
  ]);
}

export const fadeInRightText400ms = fadeInRightTextAnimation(400);
