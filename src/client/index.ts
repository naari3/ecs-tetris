import { World } from "ecsy";
import { Engine, Resource, ResourceState, Sprite, SpriteState, Position } from "./components";
import { EngineSystem, ResourceLoaderSystem, SpriteSystem } from "./systems";

const world = new World();
world
  .registerComponent(Engine)
  .registerComponent(Position)
  .registerComponent(Resource)
  .registerComponent(ResourceState)
  .registerComponent(Sprite)
  .registerComponent(SpriteState)
  .registerSystem(EngineSystem)
  .registerSystem(ResourceLoaderSystem)
  .registerSystem(SpriteSystem);

const config = {
  width: window.innerWidth,
  height: window.innerHeight,
  resolution: window.devicePixelRatio,
  backgroundColor: 0xffffff,
};
let elem = document.body;
world.createEntity().addComponent(Engine, {
  elem,
  config,
});
console.log("world created");

let prevTime = performance.now();

function update(time: number) {
  const dt = time - prevTime;
  prevTime = time;

  world.execute(dt, time);

  requestAnimationFrame(update);
}

requestAnimationFrame(update);
