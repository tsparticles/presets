import { loadBigCirclesPreset } from ".";
import { tsParticles } from "@tsparticles/engine";

(async (): Promise<void> => {
    await loadBigCirclesPreset(tsParticles);
})();

export { loadBigCirclesPreset, tsParticles };
