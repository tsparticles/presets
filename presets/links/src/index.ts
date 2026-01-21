import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export async function loadLinksPreset(engine: Engine): Promise<void> {
    await engine.register(async e => {
        const { loadBasic } = await import("@tsparticles/basic"),
            { loadParticlesLinksInteraction } = await import("@tsparticles/interaction-particles-links"),
            { options, presetName } = await import("./options.js");

        await loadBasic(e);
        await loadParticlesLinksInteraction(e);

        e.addPreset(presetName, options);
    });
}
