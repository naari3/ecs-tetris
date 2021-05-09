import { Not, System } from "ecsy";
import type { World, Attributes } from "ecsy";
import { Engine, Board, IsBoard, Cell, Color, Sprite, Position } from "../components";
import { ColorNumToType } from "../components/Color";

export class BoardRenderSystem extends System {
  constructor(world: World, attributes: Attributes) {
    super(world, attributes);
    console.log("Creation of EngineSystem");
  }

  execute(delta: number, time: number) {
    let app = this.queries.engine.results[0].getComponent(Engine)?.app;
    let board = this.queries.board.results[0].getComponent(Board);
    if (app === undefined || board === undefined) {
      return;
    }
    this.queries.cells_create.results.forEach((entity) => {
      let cell = entity.getComponent(Cell);
      if (cell && board) {
        let x = cell.x;
        let y = cell.y;
        let c = board.board[y][x];
        entity
          .addComponent(Color, { color: ColorNumToType[c] })
          .addComponent(Sprite, { name: "cells", textureName: ColorNumToType[c] })
          .addComponent(Position, { x: x * 32, y: y * 32 });
      }
    });

    this.queries.cells_update.results.forEach((entity) => {
      let cell = entity.getComponent(Cell);
      let color = entity.getMutableComponent(Color);
      let sprite = entity.getMutableComponent(Sprite);
      if (cell && color && sprite && board) {
        let x = cell.x;
        let y = cell.y;
        let c = board.board[y][x];
        color.color = ColorNumToType[c];
        sprite.textureName = ColorNumToType[c];
      }
    });
  }
}

BoardRenderSystem.queries = {
  engine: {
    components: [Engine],
  },
  board: {
    components: [Board, IsBoard],
  },
  cells_create: {
    components: [Cell, Not(Sprite)],
  },
  cells_update: {
    components: [Cell, Color, Sprite],
  },
};
