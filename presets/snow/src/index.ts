import type { Engine } from "@tsparticles/engine";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadSnowPreset(engine: Engine, refresh = true): Promise<void> {
    const { loadBasic } = await import("@tsparticles/basic"),
        { loadWobbleUpdater } = await import("@tsparticles/updater-wobble"),
        { options } = await import("./options.js");

    await loadBasic(engine, false);
    await loadWobbleUpdater(engine, false);

    await engine.addPreset("snow", options, false);

    await engine.refresh(refresh);
}
