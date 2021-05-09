import { System } from "ecsy";
import type { World, Attributes } from "ecsy";
import { Engine, Board, IsBoard } from "../components";

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
    app;
    board.board.forEach((row) => {
      console.log(row);
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
};
