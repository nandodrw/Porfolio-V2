import * as THREE from "three";
import colors from "../Libraries/ColorMapper";

function createMaterials() {
  const particleMat = new THREE.MeshPhongMaterial({
    color: colors.particlesBody
  });

  const outlineMaterial = new THREE.MeshLambertMaterial({
    color: colors.planetOutline,
    side: THREE.BackSide
  });

  particleMat.color.convertSRGBToLinear();

  return {
    particleMat,
    outlineMaterial
  };
}

function createGeometries() {
  return {
    geom: new THREE.TetrahedronBufferGeometry(8, 0)
  };
}

function createMeshes() {
  const geoms = createGeometries();
  const mats = createMaterials();

  const outlineFactor = 1.02;
  const particles = new THREE.Group();

  for (var i = 0; i < 1000; i++) {
    const mesh = new THREE.Mesh(geoms.geom, mats.particleMat);
    mesh.position
      .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
      .normalize();
    mesh.position.multiplyScalar(400 + Math.random() * 1000);
    mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);

    const meshOutline = mesh.clone();
    meshOutline.scale.set(outlineFactor, outlineFactor, outlineFactor);
    meshOutline.material = mats.outlineMaterial;

    particles.add(mesh);
    particles.add(meshOutline);
  }

  return particles;
}

export default createMeshes;
