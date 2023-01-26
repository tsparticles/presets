import { loadFountainPreset } from ".";
import { tsParticles } from "@tsparticles/engine";

(async (): Promise<void> => {
    await loadFountainPreset(tsParticles);
})();

export { loadFountainPreset, tsParticles };
