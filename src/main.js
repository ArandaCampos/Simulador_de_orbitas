var camera;
var scene;
var renderer;
var texture;
var material;
var mesh;
var frame = 0;
var play = true;
var velocity = 1 / 24;

const init = () => {
    set_camera( DATA["camera"] );
    set_scene( DATA["scene"] );
    set_objects( DATA["objects"] );
    set_light( DATA["light"] );
    render_scene();
}

const set_camera = ( cfg ) => {
    camera = new THREE.PerspectiveCamera( cfg["fov"], cfg["aspect"], cfg["near"], cfg["far"] );
    camera.lookAt( cfg["lookAt"]["x"] , cfg["lookAt"]["y"] , cfg["lookAt"]["z"] );
    camera.position.set( cfg["position"]["x"], cfg["position"]["y"], cfg["position"]["z"] );
    camera.rotation.set( cfg["rotation"]["x"], cfg["rotation"]["y"], cfg["rotation"]["z"] );
}

const set_scene = ( cfg ) => {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(cfg["background"]);
}

const set_objects = ( planets ) => {
    planets.forEach( planet => {
        planet["mesh"] = set_sphere( planet )
    });
}

const set_sphere = ( planet ) => {
    const SCALE = DATA["scale"];
    const sphere = new THREE.SphereGeometry( planet["radius"] * 10, DATA["segments"], DATA["segments"] );

    if ( planet["texture"] ) {
        texture = new THREE.TextureLoader().load( planet["texture"] )
        material = new THREE.MeshStandardMaterial({ map: texture });
    } else {
        material = new THREE.MeshPhongMaterial({ color: planet[ "color" ], emissive: planet[ "emissive" ]});
    }

    mesh = new THREE.Mesh( sphere, material );
    scene.add( mesh );

    return mesh;
}

const set_light = ( cfg ) => {
    const light = new THREE.PointLight(cfg["color"], cfg["intensity"]);
    light.position.set(cfg["x"], cfg["y"], cfg["z"]);

    scene.add( light );
}

const render_scene = () => {
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( WIDTH, HEIGHT );
    renderer.setAnimationLoop( animation );
    document.body.appendChild( renderer.domElement );
}

const set_velocity = ( value ) => {
    frame = frame * velocity;
    velocity = 1 / 24 * value / 50;
    frame = frame / velocity;
}

const toggle_planet = ( id ) => {
    scene.children[id].visible = !scene.children[id].visible;
}

const toggle_play = () => {
    play = !play;
}

const update_position = ( planet ) => {
    const scale = DATA["scale"];
    planet["mesh"].position.x = planet["d"] * Math.cos(planet["a"]) * scale;
    planet["mesh"].position.z = planet["d"] * Math.sin(planet["a"]) * scale;
}

const update_rotation = ( planet, t ) => {
    if ( planet["r"] == 0 ) return;
    planet["mesh"].rotation.y = t / planet["r"];
    //planet["mesh"].rotation.z = planet["axial"] / 180 * Math.PI;//* Math.cos(planet["a"]);
    planet["mesh"].rotation.x = planet["axial"] / 180 * Math.PI * Math.cos(planet["a"]);
}

const calculate_orbit = ( planet, t ) => {
    planet["a"] = 2 * Math.PI * t * planet["T"];
}

const animation = () => {
    if (play){
        DATA["objects"].forEach( planet => {
            frame += 1;
            calculate_orbit( planet, frame * velocity );
            update_position( planet );
            update_rotation( planet, frame * velocity );
            //update_trail( planet, frame );
            document.getElementById("days").innerHTML = Math.floor(velocity * frame, 1 ) + " dia";
        });
    }

	renderer.render( scene, camera );
}

window.addEventListener("keypress", function (event) {
    switch (event.key) {
        case CONTROLS["RIGHT"]:
            camera.position.x += 50;
            break;
        case CONTROLS["LEFT"]:
            camera.position.x -= 50;
            break;
        case CONTROLS["UP"]:
            camera.position.y += 50;
            break;
        case CONTROLS["DOWN"]:
            camera.position.y -= 50;
            break;
        case CONTROLS["ZOOM_IN"]:
            camera.position.z -= 50;
            break;
        case CONTROLS["ZOOM_OUT"]:
            camera.position.z += 50;
            break;
        case CONTROLS["PAUSE"]:
            play = ! play;
            break;
        case CONTROLS["ROT_X_POS"]:
            camera.rotation.x += 0.1;
            break;
        case CONTROLS["ROT_X_NEG"]:
            camera.rotation.x -= 0.1;
            break;
        case CONTROLS["ROT_Y_POS"]:
            camera.rotation.y += 0.1;
            break;
        case CONTROLS["ROT_Y_NEG"]:
            camera.rotation.y -= 0.1;
            break;
        case CONTROLS["ROT_Z_POS"]:
            camera.rotation.z += 0.1;
            break;
        case CONTROLS["ROT_Z_NEG"]:
            camera.rotation.z -= 0.1;
            break;
        default:
            console.log("Comando desconhecido " + event.key);
    }
	renderer.render( scene, camera );
});

init();
