import { World } from "ecsy";
import {
  Color,
  Grid,
  Piece,
  IsPiece,
  Engine,
  Resource,
  Bag,
  CellSprites,
  CurrentPiece,
  InitialPosition,
  Input,
} from "./components";
import { Board, BoardMatrix, IsBoard } from "./components/Board";
import { ColorType } from "./components/Color";
import { PieceType } from "./components/Piece";

const minos: { name: PieceType; matrix: number[][]; color: ColorType; initialPosition: { x: number; y: number } }[] = [
  {
    name: "I",
    matrix: [
      [-1, 1],
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    color: "cyan",
    initialPosition: { x: 4, y: 1 },
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
    initialPosition: { x: 4, y: 2 },
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
    initialPosition: { x: 4, y: 3 },
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
    initialPosition: { x: 4, y: 3 },
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
    initialPosition: { x: 4, y: 3 },
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
    initialPosition: { x: 4, y: 3 },
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
    initialPosition: { x: 4, y: 3 },
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

  minos.forEach(({ name, matrix, color, initialPosition }) => {
    world
      .createEntity(`Mino${name}`)
      .addComponent(IsPiece)
      .addComponent(Piece, { name })
      .addComponent(Grid, { matrix })
      .addComponent(Color, { color })
      .addComponent(InitialPosition, initialPosition);
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
  world
    .createEntity("Board")
    .addComponent(IsBoard)
    .addComponent(Board, { board })
    .addComponent(Bag, { bag: [] })
    .addComponent(CellSprites)
    .addComponent(CurrentPiece)
    .addComponent(Input);
}
