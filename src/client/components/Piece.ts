import { Component, TagComponent, Types } from "ecsy";

export class Piece extends Component<{}> {
  name!: string;
}
Piece.schema = {
  name: { type: Types.String },
};

export class IsPiece extends TagComponent {}
