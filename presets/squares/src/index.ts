import type { Engine } from "@tsparticles/engine";

/**
 * @param engine - the engine instance to load the preset into
 */
export function loadSquaresPreset(engine: Engine): void {
    engine.register(async e => {
        const { loadHexColorPlugin } = await import("@tsparticles/plugin-hex-color"),
            { loadEmittersPlugin } = await import("@tsparticles/plugin-emitters"),
            { loadSquareShape } = await import("@tsparticles/shape-square"),
            { loadRotateUpdater } = await import("@tsparticles/updater-rotate"),
            { loadSizeUpdater } = await import("@tsparticles/updater-size"),
            { loadStrokeColorUpdater } = await import("@tsparticles/updater-stroke-color"),
            { options, presetName } = await import("./options.js");

        loadHexColorPlugin(e);
        loadEmittersPlugin(e);
        loadSquareShape(e);
        loadRotateUpdater(e);
        loadSizeUpdater(e);
        loadStrokeColorUpdater(e);

        e.addPreset(presetName, options);
    });
}
