import { System } from "ecsy";
import { Sprite as PIXISprite } from "pixi.js";
import { Engine, CellSprites, CurrentPiece, Piece, Grid } from "../components";
import { Color } from "../components/Color";

export class CurrentPieceRenderSystem extends System {
  execute(delta: number, time: number) {
    let app = this.queries.engine.results[0].getComponent(Engine)?.app;
    this.queries.board.results.forEach((entity) => {
      if (app === undefined) {
        return;
      }

      let cp = entity.getComponent(CurrentPiece);
      let cs = entity.getMutableComponent(CellSprites);
      let pentity = this.queries.pieceKinds.results.find((pe) => {
        let piece = pe.getComponent(Piece);
        return piece?.name === cp?.name;
      });
      let matrix = pentity?.getComponent(Grid)?.matrix;
      let color = pentity?.getComponent(Color)?.color;
      matrix?.forEach(([xdif, ydif]) => {
        if (cp && cp.x !== undefined && cp.y !== undefined && color && cs) {
          let x = cp.x + xdif;
          let y = cp.y + ydif;
          if (cs && cs.colors[y + ydif] === undefined) {
            cs.colors[y] = [];
            cs.refs[y] = [];
          }
          let sheet = app?.loader.resources["cells"];
          if (sheet?.textures === undefined) {
            return;
          }
          let texture = sheet?.textures[color];
          let sprite = new PIXISprite(texture);
          sprite.x = x * 32;
          sprite.y = y * 32;
          app?.stage.addChild(sprite);
          cs.colors[y][x] = color;
          cs.refs[y][x] = sprite;
        }
      });
    });
  }
}

CurrentPieceRenderSystem.queries = {
  engine: {
    components: [Engine],
  },
  board: {
    components: [CurrentPiece, CellSprites],
  },
  pieceKinds: {
    components: [Piece],
  },
};
