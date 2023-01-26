import { loadFireflyPreset } from ".";
import { tsParticles } from "@tsparticles/engine";

(async (): Promise<void> => {
    await loadFireflyPreset(tsParticles);
})();

export { loadFireflyPreset, tsParticles };
