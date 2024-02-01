import type { Engine } from "@tsparticles/engine";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadBubblesPreset(engine: Engine, refresh = true): Promise<void> {
    const { loadBasic } = await import("@tsparticles/basic"),
        { loadEmittersPlugin } = await import("@tsparticles/plugin-emitters"),
        { options } = await import("./options.js");

    await loadBasic(engine, false);
    await loadEmittersPlugin(engine, false);

    await engine.addPreset("bubbles", options, false);

    await engine.refresh(refresh);
}
