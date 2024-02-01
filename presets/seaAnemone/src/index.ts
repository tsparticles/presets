import type { Engine } from "@tsparticles/engine";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadSeaAnemonePreset(engine: Engine, refresh = true): Promise<void> {
    const { loadBasic } = await import("@tsparticles/basic"),
        { loadCurvesPath } = await import("@tsparticles/path-curves"),
        { loadEmittersPlugin } = await import("@tsparticles/plugin-emitters"),
        { options, presetName } = await import("./options.js");

    await loadBasic(engine, false);
    await loadEmittersPlugin(engine, false);
    await loadCurvesPath(engine, false);

    await engine.addPreset(presetName, options, false);

    await engine.refresh(refresh);
}
