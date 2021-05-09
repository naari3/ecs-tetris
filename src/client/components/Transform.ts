import { Component, Types } from "ecsy";

class Transform extends Component<{}> {
  x!: number;
  y!: number;
}
Transform.schema = {
  x: { type: Types.Number },
  y: { type: Types.Number },
};

export { Transform };
