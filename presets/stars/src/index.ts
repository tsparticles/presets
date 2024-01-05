import type { Engine } from "@tsparticles/engine";
import { loadBasic } from "@tsparticles/basic";
import { options } from "./options.js";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadStarsPreset(engine: Engine, refresh = true): Promise<void> {
    await loadBasic(engine, false);

    await engine.addPreset("stars", options, refresh);
}
