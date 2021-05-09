import { System, Not } from "ecsy";
import { Engine, Sprite, SpriteState, Transform } from "../components";
import { Sprite as PIXISprite } from "pixi.js";

class SpriteSystem extends System {
  execute(delta: number, time: number): void {
    let app = this.queries.engine.results[0].getComponent(Engine)?.app;
    this.queries.creates.results.forEach((entity) => {
      let spriteInfo = entity.getComponent(Sprite);
      let transform = entity.getComponent(Transform);
      let sheet = app?.loader.resources[spriteInfo?.name || ""];
      let texture = (() => {
        if (spriteInfo?.textureName && sheet?.textures) {
          return sheet?.textures[spriteInfo.textureName || ""];
        }
        return sheet?.texture;
      })();
      // debugger;
      let sprite = new PIXISprite(texture);
      sprite.name = spriteInfo?.name;
      if (sprite && transform) {
        sprite.x = transform?.x;
        sprite.y = transform?.y;
      }
      app?.stage.addChild(sprite);
      entity.addComponent(SpriteState, { ref: sprite });
    });

    this.queries.updates.results.forEach((entity) => {
      let spriteInfo = entity.getComponent(Sprite);
      let transform = entity.getComponent(Transform);
      let spriteState = entity.getMutableComponent(SpriteState);
      let sprite = spriteState?.ref;
      if (spriteState && sprite && transform) {
        let sheet = app?.loader.resources[spriteInfo?.name || ""];
        let texture = (() => {
          if (spriteInfo?.textureName && sheet?.textures) {
            return sheet?.textures[spriteInfo.textureName || ""];
          }
          return sheet?.texture;
        })();
        if (texture) sprite.texture = texture;
        sprite.x = transform?.x;
        sprite.y = transform?.y;
        spriteState.ref = sprite;
      }
    });
  }
}

SpriteSystem.queries = {
  creates: {
    components: [Sprite, Not(SpriteState), Transform],
  },
  deletes: {
    components: [Not(Sprite), SpriteState],
  },
  updates: {
    components: [Sprite, SpriteState, Transform],
  },
  engine: { components: [Engine] },
};

export { SpriteSystem };
