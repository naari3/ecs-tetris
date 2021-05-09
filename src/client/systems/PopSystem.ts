import { System } from "ecsy";
import { Bag } from "../components/Bag";
import { CurrentPiece, InitialPosition, Piece } from "../components";

export class PopSystem extends System {
  execute(delta: number, time: number) {
    let cp = this.queries.currentPiece.results[0].getMutableComponent(CurrentPiece);
    let bag = this.queries.currentPiece.results[0].getMutableComponent(Bag);
    if (bag === undefined || cp === undefined) {
      return;
    }
    if (!!cp.name) {
      return;
    }
    let pieceName = bag.bag.shift();
    if (pieceName) {
      let pentity = this.queries.pieceKinds.results.find((pe) => {
        let piece = pe.getComponent(Piece);
        return piece?.name === pieceName;
      });
      let pos = pentity?.getComponent(InitialPosition);
      cp.name = pieceName;
      cp.x = pos?.x;
      cp.y = pos?.y;
    }
  }
}

PopSystem.queries = {
  currentPiece: {
    components: [CurrentPiece],
  },

  bag: {
    components: [Bag],
  },
  pieceKinds: {
    components: [Piece],
  },
};
