import { World } from "ecsy";
import {
  Engine,
  Resource,
  ResourceState,
  Sprite,
  SpriteState,
  Transform,
  Piece,
  Grid,
  Color,
  Board,
  IsBoard,
  IsPiece,
  Bag,
  CellSprites,
  CurrentPiece,
  InitialPosition,
} from "./components";
import {
  BagSystem,
  BoardRenderSystem,
  CurrentPieceRenderSystem,
  EngineSystem,
  PopSystem,
  ResourceLoaderSystem,
  SpriteSystem,
} from "./systems";
import { registerInitialEntities } from "./entities";

const world = new World();
world
  .registerComponent(Engine)
  .registerComponent(Transform)
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
  .registerComponent(CurrentPiece)
  .registerComponent(InitialPosition)
  .registerSystem(EngineSystem)
  .registerSystem(BagSystem)
  .registerSystem(PopSystem)
  .registerSystem(CurrentPieceRenderSystem)
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
