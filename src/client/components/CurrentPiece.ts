import { Component, TagComponent, Types } from "ecsy";
import { PieceType } from "./Piece";

export class CurrentPiece extends Component<{}> {
  name?: PieceType;
  x?: number;
  y?: number;
  rotate?: number;
}
CurrentPiece.schema = {
  name: { type: Types.String },
  x: { type: Types.Number },
  y: { type: Types.Number },
  rotate: { type: Types.Number },
};
