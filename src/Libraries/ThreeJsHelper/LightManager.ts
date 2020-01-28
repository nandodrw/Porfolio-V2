import * as THREE from "three";
import colors from "../ColorMapper";

export default class LightManager {
  AddAmbientLight(scene: THREE.Scene) {
    const hemisphereAmbientLight = new THREE.HemisphereLight(
      colors.ambient3,
      colors.ambient4,
      5
    );
    scene.add(hemisphereAmbientLight);
  }

  DirectionalLight(scene: THREE.Scene) {
    var lights = [];
    lights[0] = new THREE.DirectionalLight(colors.ambient3, 1);
    lights[0].position.set(1, 0, 0);
    lights[1] = new THREE.DirectionalLight(colors.ambient1, 10);
    lights[1].position.set(0.75, 1, 0.5);
    lights[2] = new THREE.DirectionalLight(colors.ambient2, 1);
    lights[2].position.set(-0.75, -1, 0.5);
    scene.add(lights[0]);
    scene.add(lights[1]);
    scene.add(lights[2]);
  }
}
