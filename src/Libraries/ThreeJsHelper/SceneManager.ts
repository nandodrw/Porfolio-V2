import * as THREE from "three";

export default class SceneManager {
  _scene: THREE.Scene;

  constructor() {
    this._scene = new THREE.Scene();
    // this._scene.background = new THREE.Color("white");
  }

  AddGroup(group: THREE.Group) {
    this._scene.add(group);
  }

  get Scene() {
    return this._scene;
  }
}
