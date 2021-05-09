import { Component, createType, TagComponent } from "ecsy";
import { ColorNumber, ColorType } from "./Color";

const copyMatrix = (src: number[][], dest: number[][]): number[][] => {
  if (!src) {
    return src;
  }

  if (!dest) {
    return src.slice();
  }

  dest.length = 0;

  for (let i = 0; i < src.length; i++) {
    dest.push(src[i]);
  }

  return dest;
};

const cloneMatrix = (src: number[][]): number[][] => {
  return JSON.parse(JSON.stringify(src));
};

const TypeMatrix = createType({
  name: "Matrix",
  default: [[]],
  clone: cloneMatrix,
  copy: copyMatrix,
});

type Row = ColorNumber[];
export type BoardMatrix = Row[];

export class IsBoard extends TagComponent {}
export class Board extends Component<{}> {
  board!: BoardMatrix;
}
Board.schema = {
  board: { type: TypeMatrix },
};
