var camera;
var scene;
var renderer;
var texture;
var material;
var mesh;
var frame = 0;
var play = true;

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

const set_sphere = ( obj ) => {
    const SCALE = DATA["scale"];
    const sphere = new THREE.SphereGeometry( obj["radius"] * 10, DATA["segments"], DATA["segments"] );

    if ( obj["texture"] ) {
        texture = new THREE.TextureLoader().load(obj["texture"])
        material = new THREE.MeshStandardMaterial({
            map: texture,
            emissiveMap: texture
        });
    } else {
        material = new THREE.MeshPhongMaterial({color: obj[ "color" ], emissive: obj[ "emissive" ]});
    }

    mesh = new THREE.Mesh( sphere, material );
    mesh.position.set( 0, 0, 0 );
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

const update_position = ( planet ) => {
    const scale = DATA["scale"];
    planet["mesh"].position.x = planet["d"] * Math.cos(planet["a"]) * scale;
    planet["mesh"].position.y = planet["d"] * Math.sin(planet["a"]) * scale;
}


const calculate_orbit = ( planet, t ) =>{
    planet["a"] = 2 * Math.PI * t * planet["T"];

    update_position( planet )
}

// animation
const animation = (time) => {
    time = 1 / 24;
    if (play){
        DATA["objects"].forEach( planet => {
            calculate_orbit( planet, frame * time );
            frame += 1;
            console.log("DIA : " + Math.floor(time * frame, 1 ));
        });
    }

	renderer.render( scene, camera );
}

window.addEventListener("keypress", function (event) {
    console.log(event.key);
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
