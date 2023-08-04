import type { Engine } from "tsparticles-engine";
import { loadBasic } from "tsparticles-basic";
import { loadEmittersPlugin } from "tsparticles-plugin-emitters";
import { options } from "./options";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadBigCirclesPreset(engine: Engine, refresh = true): Promise<void> {
    await loadBasic(engine, false);
    await loadEmittersPlugin(engine, false);

    await engine.addPreset("bigCircles", options, false);
    await engine.addPreset("big-circles", options, refresh);
}
