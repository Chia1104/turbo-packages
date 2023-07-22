import { type ClassValue } from "@chiastack/ui-utils";

export type Color =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "light"
  | "dark";

export type DefaultProps = {
  noneStyle?: boolean;
  className?: ClassValue;
};
