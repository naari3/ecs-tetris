import { Component, Types } from "ecsy";

export class Piece extends Component<{}> {
  name!: string;
}
Piece.schema = {
  name: { type: Types.String },
};
