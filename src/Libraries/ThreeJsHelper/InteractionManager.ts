import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class InteractionManager {
  _orbitCtr!: OrbitControls;

  AddOrbitControls(camera: THREE.Camera, container: HTMLElement) {
    this._orbitCtr = new OrbitControls(camera, container);
  }
}
