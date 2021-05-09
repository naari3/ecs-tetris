import { System } from "ecsy";
import type { World, Attributes } from "ecsy";
import { Bag } from "../components/Bag";
import { PieceType } from "../components/Piece";

function shuffle<T>(array: T[]) {
  const out = Array.from(array);
  for (let i = out.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    const tmp = out[i];
    out[i] = out[r];
    out[r] = tmp;
  }
  return out;
}

const newBag: PieceType[] = ["I", "O", "T", "L", "J", "S", "Z"];

export class BagSystem extends System {
  constructor(world: World, attributes: Attributes) {
    super(world, attributes);
    console.log("Creation of EngineSystem");
  }

  execute(delta: number, time: number) {
    let bag = this.queries.bag.results[0].getMutableComponent(Bag);
    if (bag === undefined) {
      return;
    }
    if (bag.nextBag.length <= 0) bag.nextBag = shuffle(newBag);

    if (bag.bag.length <= 0) bag.bag = shuffle(newBag);

    console.log(bag);

    if (bag.bag.length < 7) {
      // fill a bag up to 7
      let remain = 7 - bag.bag.length;
      for (let i = 0; i < remain; i++) {
        let newPiece = bag.nextBag.pop();
        if (newPiece) bag.bag.push(newPiece);
      }
    }
  }
}

BagSystem.queries = {
  bag: {
    components: [Bag],
  },
};
