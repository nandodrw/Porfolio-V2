import * as THREE from "three";

export default class CameraManager {
  _camera: THREE.PerspectiveCamera;
  _fov: number;
  _aspect: number;
  _near: number;
  _far: number;

  _lastContainerWidth: number;
  _lastContainerHeight: number;

  _baseFovValue = 85;

  constructor(container: HTMLElement) {
    this._fov = 85;
    this._aspect = container.clientWidth / container.clientHeight;
    this._lastContainerWidth = container.clientWidth;
    this._lastContainerHeight = container.clientHeight;
    this._near = 0.1;
    this._far = 1500;
    this._camera = new THREE.PerspectiveCamera(
      this._fov,
      this._aspect,
      this._near,
      this._far
    );
    this._camera.position.set(0, 0, 10);
  }

  get Camera() {
    return this._camera;
  }

  set Aspect(aspect: number) {
    this._aspect = aspect;
  }

  setAspect(container: HTMLElement) {
    this._aspect = container.clientWidth / container.clientHeight;
    this._camera.aspect = this._aspect;
    this._camera.updateProjectionMatrix();
    this._lastContainerWidth = container.clientWidth;
    this._lastContainerHeight = container.clientHeight;
  }

  checkForNeedOnUpdate(container: HTMLElement) {
    if (
      container.clientWidth != this._lastContainerWidth ||
      container.clientHeight != this._lastContainerHeight
    ) {
      this.setAspect(container);
      return true;
    }
    return false;
  }

  animateCameraFov(finalValue: number, percentage: number) {
    if (percentage > 1) {
      this._baseFovValue = this._fov;
      return;
    }

    const diff = this._baseFovValue - finalValue;
    this._fov = this._baseFovValue - diff * percentage;
    this.Camera.fov = this._fov;
    this._camera.updateProjectionMatrix();
  }
}
