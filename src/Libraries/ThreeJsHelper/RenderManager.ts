import * as THREE from "three";

export default class RendererManager {
  _renderer: THREE.WebGLRenderer;

  constructor(container: HTMLElement) {
    this._renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this._renderer.gammaFactor = 2.2;
    this._renderer.physicallyCorrectLights = true;
    this._renderer.setSize(container.clientWidth, container.clientHeight);
    this._renderer.setPixelRatio(window.devicePixelRatio);
    this._renderer.setClearColor(0x000000, 0.0);
    this._renderer.autoClear = false;
    container.appendChild(this._renderer.domElement);
  }

  setAnimationLoop(callback: Function) {
    this._renderer.setAnimationLoop(callback);
  }

  setSize(container: HTMLElement) {
    this._renderer.setSize(container.clientWidth, container.clientHeight);
  }

  Render(scene: THREE.Scene, camera: THREE.Camera) {
    this._renderer.render(scene, camera);
  }
}
