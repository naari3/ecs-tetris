import { World } from "ecsy";
import { Color, Grid, Piece, IsPiece } from "./components";
import { Board, IsBoard } from "./components/Board";
import { ColorType } from "./components/Color";

const minos: { name: string; matrix: number[][]; color: ColorType }[] = [
  {
    name: "I",
    matrix: [
      [-1, 1],
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    color: "cyan",
  },
  {
    name: "O",
    matrix: [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    color: "yellow",
  },
  {
    name: "T",
    matrix: [
      [0, -1],
      [-1, 0],
      [0, 0],
      [1, 0],
    ],
    color: "purple",
  },
  {
    name: "L",
    matrix: [
      [1, -1],
      [-1, 0],
      [0, 0],
      [1, 0],
    ],
    color: "orange",
  },
  {
    name: "J",
    matrix: [
      [-1, -1],
      [-1, 0],
      [0, 0],
      [1, 0],
    ],
    color: "blue",
  },
  {
    name: "S",
    matrix: [
      [0, -1],
      [1, -1],
      [-1, 0],
      [0, 0],
    ],
    color: "green",
  },
  {
    name: "Z",
    matrix: [
      [-1, -1],
      [0, -1],
      [0, 0],
      [1, 0],
    ],
    color: "red",
  },
];

export function registerInitialEntities(world: World) {
  minos.forEach(({ name, matrix, color }) => {
    world
      .createEntity()
      .addComponent(IsPiece)
      .addComponent(Piece, { name })
      .addComponent(Grid, { matrix })
      .addComponent(Color, { color });
  });
  world
    .createEntity()
    .addComponent(IsBoard)
    .addComponent(Board, {
      board: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 20
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 21
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 25
      ],
    });
}
