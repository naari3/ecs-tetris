import { Component, TagComponent, Types } from "ecsy";

export class InitialPosition extends Component<{}> {
  x?: number;
  y?: number;
}
InitialPosition.schema = {
  x: { type: Types.Number },
  y: { type: Types.Number },
};
