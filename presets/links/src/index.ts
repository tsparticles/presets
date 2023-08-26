import type { Engine } from "@tsparticles/engine";
import { loadBasic } from "@tsparticles/basic";
import { loadParticlesLinksInteraction } from "@tsparticles/interaction-particles-links";
import { options } from "./options";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadLinksPreset(engine: Engine, refresh = true): Promise<void> {
    await loadBasic(engine, false);
    await loadParticlesLinksInteraction(engine, false);

    await engine.addPreset("links", options, refresh);
}
