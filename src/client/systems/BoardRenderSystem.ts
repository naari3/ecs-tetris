import { System } from "ecsy";
import type { World, Attributes } from "ecsy";
import { Sprite as PIXISprite } from "pixi.js";
import { Engine, Board, IsBoard, CellSprites } from "../components";
import { ColorNumToType } from "../components/Color";

export class BoardRenderSystem extends System {
  constructor(world: World, attributes: Attributes) {
    super(world, attributes);
    console.log("Creation of EngineSystem");
  }

  execute(delta: number, time: number) {
    let app = this.queries.engine.results[0].getComponent(Engine)?.app;
    this.queries.board.results.forEach((entity) => {
      let board = entity.getComponent(Board);
      if (app === undefined || board === undefined) {
        return;
      }

      let cs = entity.getMutableComponent(CellSprites);
      board.board.forEach((row, y) => {
        if (cs && cs.colors[y] === undefined) {
          cs.colors[y] = [];
          cs.refs[y] = [];
        }
        row.forEach((c, x) => {
          if (cs === undefined) return;
          if (cs.colors[y][x] != ColorNumToType[c]) {
            let sheet = app?.loader.resources["cells"];
            if (sheet?.textures === undefined) {
              return;
            }
            let texture = sheet?.textures[ColorNumToType[c]];
            let sprite = new PIXISprite(texture);
            sprite.x = x * 32;
            sprite.y = y * 32;
            app?.stage.addChild(sprite);
            cs.colors[y][x] = ColorNumToType[c];
            cs.refs[y][x] = sprite;
          }
        });
      });
    });
  }
}

BoardRenderSystem.queries = {
  engine: {
    components: [Engine],
  },
  board: {
    components: [Board, IsBoard, CellSprites],
  },
};
