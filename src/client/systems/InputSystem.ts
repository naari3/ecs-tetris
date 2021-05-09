import { Attributes, System, World } from "ecsy";
import { Input } from "../components";
import { Application } from "pixi.js";

export class InputSystem extends System {
  keys!: string[];

  constructor(world: World, attributes: Attributes) {
    super(world, attributes);
    let sys = this;
    sys.keys = [];

    window.addEventListener(
      "keydown",
      (e) => {
        if (sys.keys.includes(e.key)) return;
        sys.keys.push(e.key.toLowerCase());
      },
      false
    );

    window.addEventListener(
      "keyup",
      (e) => {
        let index = sys.keys.indexOf(e.key.toLowerCase());
        if (index !== -1) {
          sys.keys.splice(index, 1);
        }
      },
      false
    );
  }

  execute(delta: number, time: number) {
    this.queries.inputs.results.forEach((entity) => {
      let input = entity.getMutableComponent(Input);
      if (input) input.keys = this.keys;
      console.log(input);
    });
  }
}

InputSystem.queries = {
  inputs: {
    components: [Input],
  },
};
