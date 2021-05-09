import { Component, Types } from "ecsy";
import { PieceType } from "./Piece";

export class Bag extends Component<{}> {
  bag!: PieceType[];
  nextBag!: PieceType[];
}
Bag.schema = {
  bag: { type: Types.Array },
  nextBag: { type: Types.Array },
};
