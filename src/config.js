const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight;

const COLOR = {
    'white' : 0xFFFDF5,
    'yellow': 0xFAE73B,
    'orange': 0xDB8102
}

const DATA = {
    "caption": "Sistema solar",
    "background": 'assets/stars.jpg',
    "play": true,
    "scale": 1 / (0.5 * 10 ** 8),
    "segments": 20,
    "scene": {
        "background": 0x00010F,
    },
    "camera": {
        "fov": 75,
        "aspect": WIDTH / HEIGHT,
        "near": 0.1,
        "far": 10 ** 5,
        "lookAt": {
            "x": 0,
            "y": 0,
            "z": 0,
        },
        "position": {
            "x": 50,
            "y": 0,
            "z": 4000,
        },
        "rotation": {
            "x": 0,
            "y": 0,
            "z": 0,
        },
    },
    "light": {
        "color": 0xFFFDF5,
        "intensity": 10 ** 7,
        "x": 0,
        "y": 0,
        "z": 0
    },
    "objects": [
        {
            "name": "Sol",
            "mesh": null,
            "radius": 50,
            "d": 0,
            "a": 0,
            "T": 0,
            "r": 0,
            "axial": 0,
            "color": COLOR["yellow"],
            "emissive": COLOR["yellow"],
        },
        {
            "name": "Mercúrio",
            "mesh": null,
            "radius": 6,
            "d": 5.79 * 10 ** 10,
            "a": 0,
            "T": 1 / 85,
            "r": 58.6,
            "axial": 0.01,
            "texture": 'assets/mercury.jpg'
        },
        {
            "name": "Venus",
            "mesh": null,
            "radius": 11,
            "d": 1.08 * 10 ** 11,
            "a": 0,
            "T": 1 / 255,
            "r": 224,
            "axial": 177.3,
            "texture": 'assets/venus.jpg'
        },
        {
            "name": "Terra",
            "mesh": null,
            "radius": 11.5,
            "d": 1.49 * 10 ** 11,
            "a": 0,
            "T": 1 / 365,
            "r": 1,
            "axial": 23.26,
            "texture": 'assets/earth.jpg'
        },
        {
            "name": "Marte",
            "mesh": null,
            "radius": 6.5,
            "d": 2.27 * 10 ** 11,
            "a": 0,
            "T": 1 / 687,
            "r": 1.04,
            "axial": 25.19,
            "texture": 'assets/mars.jpg'
        },
        {
            "name": "Jupiter",
            "mesh": null,
            "radius": 30,
            "d": 7.78 * 10 ** 11,
            "a": 0,
            "T": 1 / 4329,
            "r": 0.37,
            "axial": 3.13,
            "texture": 'assets/jupiter.jpg'
        },
        {
            "name": "Saturno",
            "mesh": null,
            "radius": 25,
            "d": 1.429 * 10 ** 12,
            "a": 0,
            "T": 1 / 10753,
            "r": 0.41,
            "axial": 26.73,
            "texture": 'assets/saturn.jpg'
        },
        {
            "name": "Urano",
            "mesh": null,
            "radius": 18,
            "d": 2.870 * 10 ** 12,
            "a": 0,
            "T": 1 / 30663,
            "r": 0.7,
            "axial": 97.77,
            "texture": 'assets/uranus.jpg'
        },
        {
            "name": "Netuno",
            "mesh": null,
            "radius": 19,
            "d": 4.5 * 10 ** 12,
            "a": 0,
            "T": 1 / 60148,
            "r": 0.79,
            "axial": 28.32,
            "texture": 'assets/neptune.jpg'
        }
    ]
}

const CONTROLS = {
    "PAUSE": ' ',
    "REVERSE": 'ArrowLeft',
    "ADVANCE" : 'ArrowRight',
    "RIGHT": 'd',
    "LEFT": 'a',
    "UP": 'w',
    "DOWN": 's',
    "ZOOM_IN": '+',
    "ZOOM_OUT": '-',
    "ROT_X_POS": 'i',
    "ROT_X_NEG": 'k',
    "ROT_Y_POS": 'l',
    "ROT_Y_NEG": 'j',
    "ROT_Z_POS": 'o',
    "ROT_Z_NEG": 'u',
}
