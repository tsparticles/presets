import type { Engine } from "@tsparticles/engine";
import { loadBasic } from "@tsparticles/basic";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";
import { loadEmittersShapeSquare } from "@tsparticles/plugin-emitters-shape-square";
import { loadLifeUpdater } from "@tsparticles/updater-life";
import { options } from "./options";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadHyperspacePreset(engine: Engine, refresh = true): Promise<void> {
    await loadBasic(engine, false);
    await loadEmittersShapeSquare(engine, false);
    await loadEmittersPlugin(engine, false);
    await loadLifeUpdater(engine, false);

    await engine.addPreset("hyperspace", options, refresh);
}
