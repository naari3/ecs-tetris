import { Component, Types } from "ecsy";

export type ColorType = "empty" | "cyan" | "yellow" | "purple" | "orange" | "blue" | "green" | "red";
export type ColorNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export const ColorNumToType: { [key in ColorNumber]: ColorType } = {
  0: "empty",
  1: "cyan",
  2: "yellow",
  3: "purple",
  4: "orange",
  5: "blue",
  6: "green",
  7: "red",
};

export class Color extends Component<{}> {
  color!: ColorType;
}
Color.schema = {
  color: { type: Types.String },
};
