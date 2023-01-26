import type { ISourceOptions } from "@tsparticles/engine";

export const options: ISourceOptions = {
    background: {
        color: "#000000",
    },
    particles: {
        links: {
            distance: 150,
            enable: true,
        },
        move: {
            enable: true,
        },
        size: {
            value: 1,
        },
        shape: {
            type: "circle",
        },
    },
};
