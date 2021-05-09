import { Component, Types } from "ecsy";

export class Cell extends Component<{}> {
  x!: number;
  y!: number;
}
Cell.schema = {
  x: { type: Types.Number },
  y: { type: Types.Number },
};
