import { World } from "ecsy";
import {
  Engine,
  Resource,
  ResourceState,
  Sprite,
  SpriteState,
  Position,
  Piece,
  Grid,
  Color,
  Board,
  IsBoard,
  IsPiece,
  Bag,
  CellSprites,
} from "./components";
import { BagSystem, BoardRenderSystem, EngineSystem, ResourceLoaderSystem, SpriteSystem } from "./systems";
import { registerInitialEntities } from "./entities";

const world = new World();
world
  .registerComponent(Engine)
  .registerComponent(Position)
  .registerComponent(Resource)
  .registerComponent(ResourceState)
  .registerComponent(Piece)
  .registerComponent(IsPiece)
  .registerComponent(Grid)
  .registerComponent(Color)
  .registerComponent(Sprite)
  .registerComponent(SpriteState)
  .registerComponent(CellSprites)
  .registerComponent(Board)
  .registerComponent(IsBoard)
  .registerComponent(Bag)
  .registerSystem(EngineSystem)
  .registerSystem(BagSystem)
  .registerSystem(BoardRenderSystem)
  .registerSystem(ResourceLoaderSystem)
  .registerSystem(SpriteSystem);

registerInitialEntities(world);

let prevTime = performance.now();

function update(time: number) {
  const dt = time - prevTime;
  prevTime = time;

  world.execute(dt, time);

  requestAnimationFrame(update);
}

requestAnimationFrame(update);
