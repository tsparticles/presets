import type { Engine } from "@tsparticles/engine";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadStarsPreset(engine: Engine, refresh = true): Promise<void> {
    const { loadBasic } = await import("@tsparticles/basic"),
        { options } = await import("./options.js");

    await loadBasic(engine, false);

    await engine.addPreset("stars", options, false);

    await engine.refresh(refresh);
}
