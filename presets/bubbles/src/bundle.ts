import { loadBubblesPreset } from ".";
import { tsParticles } from "@tsparticles/engine";

(async (): Promise<void> => {
    await loadBubblesPreset(tsParticles);
})();

export { loadBubblesPreset, tsParticles };
