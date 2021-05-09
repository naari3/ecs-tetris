import { Component, Types } from "ecsy";

export class Input extends Component<{}> {
  keys!: string[];
}
Input.schema = {
  keys: { type: Types.Array },
};
