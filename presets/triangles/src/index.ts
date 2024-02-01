import type { Engine } from "@tsparticles/engine";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadTrianglesPreset(engine: Engine, refresh = true): Promise<void> {
    const { loadBasic } = await import("@tsparticles/basic"),
        { loadParticlesLinksInteraction } = await import("@tsparticles/interaction-particles-links"),
        { options } = await import("./options");

    await loadBasic(engine, false);
    await loadParticlesLinksInteraction(engine, false);

    await engine.addPreset("triangles", options, false);

    await engine.refresh(refresh);
}
