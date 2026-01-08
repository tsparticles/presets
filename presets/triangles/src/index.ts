import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadTrianglesPreset(engine: Engine): void {
    engine.register(async e => {
        const { loadBasic } = await import("@tsparticles/basic"),
            { loadParticlesLinksInteraction } = await import("@tsparticles/interaction-particles-links"),
            { options, presetName } = await import("./options.js");

        loadBasic(e);
        loadParticlesLinksInteraction(e);

        e.addPreset(presetName, options);
    });
}
