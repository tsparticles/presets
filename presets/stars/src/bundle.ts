import { loadStarsPreset } from ".";
import { tsParticles } from "@tsparticles/engine";

(async (): Promise<void> => {
    await loadStarsPreset(tsParticles);
})();

export { loadStarsPreset, tsParticles };
