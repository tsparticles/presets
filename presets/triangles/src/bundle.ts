import { loadTrianglesPreset } from ".";
import { tsParticles } from "@tsparticles/engine";

(async (): Promise<void> => {
    await loadTrianglesPreset(tsParticles);
})();

export { loadTrianglesPreset, tsParticles };
