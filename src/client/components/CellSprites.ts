import { Component, createType, copyValue, cloneValue, Types, SystemStateComponent } from "ecsy";
import { Sprite as PIXISprite } from "pixi.js";
import { ColorType } from "./Color";

export const PixiRefs = createType<PIXISprite[][], undefined>({
  name: "PixiRef",
  default: undefined,
  copy: copyValue,
  clone: cloneValue,
});

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

// for Pixi Sprite referencing
export class CellSprites extends SystemStateComponent<{}> {
  refs!: PIXISprite[][];
  colors!: ColorType[][];
}
CellSprites.schema = {
  refs: { type: PixiRefs, default: [[]] },
  colors: { type: TypeMatrix, default: [[]] },
};
