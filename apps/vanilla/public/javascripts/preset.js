function loadPreset(options) {
    (async () => {
        await options.initializer(tsParticles);

        await tsParticles.load({
            id: "tsparticles",
            options: {
                preset: options.name
            }
        });
    })();

    const stats = new Stats();

    stats.showPanel(0);
    stats.dom.style.position = "absolute";
    stats.dom.style.left = "3px";
    stats.dom.style.top = "3px";
    stats.dom.id = "stats-graph";

    const initStats = function () {
        const update = function () {
            stats.begin();
            stats.end();

            requestAnimationFrame(update);
        };

        requestAnimationFrame(update);
    };

    document.body.querySelector('#stats').appendChild(stats.dom);

    initStats();
}
