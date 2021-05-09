import { World } from "ecsy";
import { Color, Grid, Piece, IsPiece, Engine, Resource, Cell, Bag } from "./components";
import { Board, BoardMatrix, IsBoard } from "./components/Board";
import { ColorType } from "./components/Color";
import { PieceType } from "./components/Piece";

const minos: { name: PieceType; matrix: number[][]; color: ColorType }[] = [
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
  const config = {
    width: window.innerWidth,
    height: window.innerHeight,
    resolution: window.devicePixelRatio,
    backgroundColor: 0xffffff,
  };
  let elem = document.body;
  world.createEntity("Engine").addComponent(Engine, {
    elem,
    config,
  });

  world.createEntity().addComponent(Resource, { name: "cells", url: "cells.json" });

  minos.forEach(({ name, matrix, color }) => {
    world
      .createEntity(`Mino${name}`)
      .addComponent(IsPiece)
      .addComponent(Piece, { name })
      .addComponent(Grid, { matrix })
      .addComponent(Color, { color });
  });

  const board: BoardMatrix = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 25
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 21
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 20
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
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 3], // 1
  ];
  world.createEntity("Board").addComponent(IsBoard).addComponent(Board, {
    board,
  });
  board.forEach((row, y) => {
    row.forEach((c, x) => {
      world.createEntity().addComponent(Cell, { x, y });
    });
  });

  world.createEntity("Bag").addComponent(Bag, { bag: [] });
}
