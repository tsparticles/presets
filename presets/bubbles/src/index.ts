import type { Engine } from "@tsparticles/engine";
import { loadBasic } from "@tsparticles/basic";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";
import { options } from "./options.js";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadBubblesPreset(engine: Engine, refresh = true): Promise<void> {
    await loadBasic(engine, false);
    await loadEmittersPlugin(engine, false);

    await engine.addPreset("bubbles", options, false);

    await engine.refresh(refresh);
}
