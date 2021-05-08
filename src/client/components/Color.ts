import { Component, Types } from "ecsy";

export type ColorType = "cyan" | "yellow" | "purple" | "orange" | "blue" | "green" | "red";

export class Color extends Component<{}> {
  color!: ColorType;
}
Color.schema = {
  matrix: { type: Types.String },
};
