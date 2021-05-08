import { Component, createType } from "ecsy";

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

export const TypeMatrix = createType({
  name: "Matrix",
  default: [[]],
  clone: cloneMatrix,
  copy: copyMatrix,
});

export class Grid extends Component<{}> {
  matrix!: number[][];
}
Grid.schema = {
  matrix: { type: TypeMatrix },
};
