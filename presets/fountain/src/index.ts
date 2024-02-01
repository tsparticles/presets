import type { Engine } from "@tsparticles/engine";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadFountainPreset(engine: Engine, refresh = true): Promise<void> {
    const { loadBasic } = await import("@tsparticles/basic"),
        { loadDestroyUpdater } = await import("@tsparticles/updater-destroy"),
        { loadEmittersPlugin } = await import("@tsparticles/plugin-emitters"),
        { options } = await import("./options.js");

    await loadBasic(engine, false);
    await loadDestroyUpdater(engine, false);
    await loadEmittersPlugin(engine, false);

    await engine.addPreset("fountain", options, false);

    await engine.refresh(refresh);
}
