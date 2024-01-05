import type { Engine } from "@tsparticles/engine";
import { loadBasic } from "@tsparticles/basic";
import { loadParticlesLinksInteraction } from "@tsparticles/interaction-particles-links";
import { options } from "./options.js";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadTrianglesPreset(engine: Engine, refresh = true): Promise<void> {
    await loadBasic(engine, false);
    await loadParticlesLinksInteraction(engine, false);

    await engine.addPreset("triangles", options, refresh);
}
