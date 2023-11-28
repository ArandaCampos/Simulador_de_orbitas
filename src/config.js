const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight;

const COLOR = {
    'white' : 0xFFFDF5,
    'yellow': 0xFAE73B,
    'orange': 0xDB8102
}

var DATA = {
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
            "z": 10000,
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
            //"radius": 4.379 * 10 ** 9,
            "radius": 50,
            "d": 0,
            "a": 0,
            "T": 0,
            "color": COLOR["yellow"],
            "emissive": COLOR["yellow"],
        },
        {
            "name": "Mercúrio",
            "mesh": null,
            //"radius": 4.87 * 10 ** 6 ,
            "radius": 6,
            "d": 5.79 * 10 ** 10,
            "a": 0,
            "T": 1 / 85,
            "texture": 'assets/mercury.jpg'
        },
        {
            "name": "Venus",
            "mesh": null,
            //"radius":  1.2 * 10 ** 7,
            "radius": 11,
            "d": 1.08 * 10 ** 11,
            "a": 0,
            "T": 1 / 255,
            "texture": 'assets/venus.jpg'
        },
        {
            "name": "Terra",
            "mesh": null,
            //"radius": 1.27 * 10 ** 7,
            "radius": 11.5,
            "d": 1.49 * 10 ** 11,
            "a": 0,
            "T": 1 / 365,
            "texture": 'assets/earth.jpg'
        },
        {
            "name": "Marte",
            "mesh": null,
            //"radius": 6.7 * 10 ** 6,
            "radius": 6.5,
            "d": 2.27 * 10 ** 11,
            "a": 0,
            "T": 1 / 687,
            "texture": 'assets/mars.jpg'
        },
        {
            "name": "Jupiter",
            "mesh": null,
            //"radius": 3,
            "radius": 30,
            "d": 7.78 * 10 ** 11,
            "a": 0,
            "T": 1 / 4329,
            "texture": 'assets/jupiter.jpg'
        },
        {
            "name": "Saturno",
            "mesh": null,
            //"radius": 1.16 * 10 ** 8,
            "radius": 25,
            "d": 1.429 * 10 ** 12,
            "a": 0,
            "T": 1 / 10753,
            "texture": 'assets/saturn.jpg'
        },
        {
            "name": "Urano",
            "mesh": null,
            //"radius": 5 * 10 ** 7,
            "radius": 18,
            "d": 2.870 * 10 ** 12,
            "a": 0,
            "T": 1 / 30663,
            "texture": 'assets/uranus.jpg'
        },
        {
            "name": "Netuno",
            "mesh": null,
            //"radius": 4.9 * 10 ** 7,
            "radius": 19,
            "d": 4.5 * 10 ** 12,
            "a": 0,
            "T": 1 / 60148,
            "texture": 'assets/neptune.jpg'
        }
    ]
}
// PARAMS
const CONTROLS = {
    //"SEGMENTS": 20,
    //"EMISSIVE_LIGHT": 0xFFFDF5;
    //"LIGHT_COLOR": 0xE6D95F;
    // CONFIGURE OF CONTROLLERS
    // animation
    "PAUSE": ' ',
    "REVERSE": 'ArrowLeft',
    "ADVANCE" : 'ArrowRight',
    // motion
    "RIGHT": 'd',
    "LEFT": 'a',
    "UP": 'w',
    "DOWN": 's',
    // Zoom
    "ZOOM_IN": '+',
    "ZOOM_OUT": '-',
    // rotation
    "ROT_X_POS": 'i',
    "ROT_X_NEG": 'k',
    "ROT_Y_POS": 'l',
    "ROT_Y_NEG": 'j',
    "ROT_Z_POS": 'o',
    "ROT_Z_NEG": 'u',
}
