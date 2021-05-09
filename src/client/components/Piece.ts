import { Component, TagComponent, Types } from "ecsy";

export type PieceType = "I" | "O" | "T" | "L" | "J" | "S" | "Z";

export class Piece extends Component<{}> {
  name!: PieceType;
}
Piece.schema = {
  name: { type: Types.String },
};

export class IsPiece extends TagComponent {}
