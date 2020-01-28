import * as THREE from "three";
import colors from "../Libraries/ColorMapper";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial";

function createMaterials() {
  var basic = new THREE.MeshPhongMaterial({
    color: colors.planetMiddleTone,
    flatShading: true
  });

  basic.color.convertSRGBToLinear();

  const outlineMaterial = new THREE.MeshLambertMaterial({
    color: colors.planetOutline,
    side: THREE.BackSide
  });

  outlineMaterial.color.convertSRGBToLinear();

  outlineMaterial.onBeforeCompile = shader => {
    const token = `#include <begin_vertex>`;
    const customTransform = `
      vec3 transformed = position + objectNormal * 0.001;
    `;
    shader.vertexShader.replace(token, customTransform);
  };

  const geomGrid = new THREE.LineBasicMaterial({
    color: colors.hightContrastLight,
    linewidth: 1
  });

  geomGrid.color.convertSRGBToLinear();

  return {
    basic,
    outlineMaterial,
    geomGrid
  };
}

function createGeometries() {
  const planetBody = new THREE.IcosahedronGeometry(250, 2);

  const planetOutline = planetBody.clone();
  const outlineFactor = 1.02;
  planetOutline.scale(outlineFactor, outlineFactor, outlineFactor);

  var edges = new THREE.EdgesGeometry(planetBody);

  return {
    planetBody,
    planetOutline,
    edges
  };
}

function createMeshes() {
  const planet = new THREE.Group();

  const materials = createMaterials();
  const geometries = createGeometries();

  const planetMesh = new THREE.Mesh(geometries.planetBody, materials.basic);
  const outlineMesh = new THREE.Mesh(
    geometries.planetOutline,
    materials.outlineMaterial
  );

  const edgeLines = new THREE.LineSegments(
    geometries.edges,
    materials.geomGrid
  );

  planet.add(planetMesh);
  planet.add(outlineMesh);
  planet.add(edgeLines);

  return planet;
}

export default createMeshes;
