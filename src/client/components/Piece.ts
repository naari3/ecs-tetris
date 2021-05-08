import { Component, Types } from "ecsy";

class Piece extends Component<{}> {
  name!: string;
}
Piece.schema = {
  name: { type: Types.String },
};

export { Piece };
