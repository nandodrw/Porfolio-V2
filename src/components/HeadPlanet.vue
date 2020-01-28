<script lang="ts">
import Vue, { VNode } from "vue";
import * as THREE from "three";
import CameraManager from "../Libraries/ThreeJsHelper/CameraManager";
import RendererManager from "../Libraries/ThreeJsHelper/RenderManager";
import SceneManager from "../Libraries/ThreeJsHelper/SceneManager";
import LightManager from "../Libraries/ThreeJsHelper/LightManager";
import InteractionManager from "../Libraries/ThreeJsHelper/InteractionManager";
import { mapState } from "vuex";
import InteractionState from "@/Globals/InteractionState";

// Models
import trainGenerator from "../GraphicModels/LegoTrain";
import planetGenerator from "../GraphicModels/HeadPlanet";
import particlesGenerator from "../GraphicModels/UniverseParticles";

// Animation Variables
let animationStart = false;
let animating = false;
let animationDirection = "zoom-in"; // zoom-in  zoom-out
let targetPosition: THREE.Vector3;
let initialPosition: THREE.Vector3;
let animationTimer: THREE.Clock;
let cameraAnimationTimer: THREE.Clock;
const animationDuration = 2;
let animationProgress = 0;
let cameraAnimationProgress = 0;
let planetRotationFactor = 1;

enum WorldStates {
  ZoomIn,
  ZoomOut,
  Iddle,
  Zoomed
}

let currentState = WorldStates.Iddle;

let timePerStep: number;
let currentPointIndex: number;

let curvePathZoomIn = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(-150, 100, -400),
  new THREE.Vector3(-160, 250, -450),
  new THREE.Vector3(-175, 350, -500),
  new THREE.Vector3(0, -100, 50),
  new THREE.Vector3(0, -260, 200)
]).getPoints(100);

let curvePathZoomOut = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, -260, 200),
  new THREE.Vector3(0, -200, 150),
  new THREE.Vector3(0, -150, 50),
  new THREE.Vector3(0, -100, 0),
  new THREE.Vector3(0, -50, 0),
  new THREE.Vector3(0, 0, 0)
]).getPoints(50);

function WorldOutAnimation() {
  // Lerp World
  if (!animating) {
    animationTimer = new THREE.Clock();
    animationTimer.start();
    cameraAnimationTimer = new THREE.Clock();
    cameraAnimationTimer.start();
    animating = true;
    planetRotationFactor = 50;
    initialPosition = planetContainer.position;
    timePerStep = animationDuration / curvePathZoomOut.length;
    currentPointIndex = 0;
  } else if (animating) {
    const elap = animationTimer.getElapsedTime();
    animationProgress = elap / timePerStep;
    const cameraElap = cameraAnimationTimer.getElapsedTime();
    cameraAnimationProgress = cameraElap / animationDuration;

    if (cameraAnimationProgress > 0.9) {
      planetRotationFactor = 20;
    } else if (cameraAnimationProgress > 0.6) {
      planetRotationFactor = 30;
    } else if (cameraAnimationProgress > 0.4) {
      planetRotationFactor = 40;
    }

    const stepVector = initialPosition.lerp(
      curvePathZoomOut[currentPointIndex],
      animationProgress
    );
    planetContainer.position.set(stepVector.x, stepVector.y, stepVector.z);
    cameraMg.animateCameraFov(85, cameraAnimationProgress);

    if (animationProgress >= 0.8) {
      if (currentPointIndex < curvePathZoomOut.length - 1) {
        currentPointIndex++;
        animationTimer = new THREE.Clock();
      } else {
        animating = false;
        currentState = WorldStates.Iddle;
      }
    }
  }
}

function WorldInAnimation() {
  // Lerp World
  if (!animating) {
    animationTimer = new THREE.Clock();
    animationTimer.start();
    cameraAnimationTimer = new THREE.Clock();
    cameraAnimationTimer.start();
    animating = true;
    animationStart = false;
    planetRotationFactor = 20;
    initialPosition = planetContainer.position;
    timePerStep = animationDuration / curvePathZoomIn.length;
    currentPointIndex = 0;
  } else if (animating) {
    const elap = animationTimer.getElapsedTime();
    animationProgress = elap / timePerStep;
    const cameraElap = cameraAnimationTimer.getElapsedTime();
    cameraAnimationProgress = cameraElap / animationDuration;

    if (cameraAnimationProgress > 0.9) {
      planetRotationFactor = 80;
    }

    const stepVector = initialPosition.lerp(
      curvePathZoomIn[currentPointIndex],
      animationProgress
    );

    planetContainer.position.set(stepVector.x, stepVector.y, stepVector.z);
    cameraMg.animateCameraFov(35, cameraAnimationProgress);

    if (animationProgress >= 0.8) {
      if (currentPointIndex < curvePathZoomIn.length - 1) {
        currentPointIndex++;
        animationTimer = new THREE.Clock();
      } else {
        animating = false;
        currentState = WorldStates.Zoomed;
      }
    }
  }
}

function update(container: HTMLElement) {
  particles.rotation.y += 0.0015;
  planet.rotation.y -= 0.003 * planetRotationFactor;

  switch (currentState) {
    case WorldStates.Iddle:
      planetRotationFactor = 1;
      planetContainer.position.set(0, 0, 0);
      break;

    case WorldStates.Zoomed:
      planetRotationFactor = 0;
      planetContainer.position.set(0, -260, 200);
      break;

    case WorldStates.ZoomIn:
      WorldInAnimation();
      break;

    case WorldStates.ZoomOut:
      WorldOutAnimation();
      break;

    default:
      break;
  }

  if (cameraMg.checkForNeedOnUpdate(container)) {
    rendererMg.setSize(container);
  }
}

let cameraMg: CameraManager;
let rendererMg: RendererManager;
let sceneMg: SceneManager;
let lightMg: LightManager;
let interactionMg: InteractionManager;
let planet: THREE.Group;
let planetContainer: THREE.Group;
let particles: THREE.Group;

export default Vue.extend({
  props: ["container"],
  data() {
    return {
      rendered: false
    };
  },
  render(ce): VNode {
    return ce();
  },
  mounted() {
    setTimeout(() => {
      animationStart = true;
      setTimeout(() => {
        animationDirection = "zoom-out";
        animationStart = true;
      }, 8000);
    }, 1000);
  },
  methods: {
    reactToResize() {
      cameraMg.setAspect(this.$props.container);
      rendererMg.setSize(this.$props.container);
    }
  },
  computed: mapState(["currentState"]),
  watch: {
    container(newVal, oldVal) {
      if (oldVal == null && newVal != null && !this.rendered) {
        cameraMg = new CameraManager(this.$props.container);
        rendererMg = new RendererManager(this.$props.container);
        sceneMg = new SceneManager();
        lightMg = new LightManager();
        interactionMg = new InteractionManager();

        cameraMg.Camera.position.set(0, 0, 500);

        lightMg.AddAmbientLight(sceneMg.Scene);
        lightMg.DirectionalLight(sceneMg.Scene);

        planet = planetGenerator();

        planetContainer = new THREE.Group();

        planetContainer.add(planet);

        planet.position.set(0, 0, 0);

        planetContainer.position.set(0, 0, 0);

        // planetContainer.position.set(0, -180, 200);

        let rot = Math.PI / 7.3;
        planetContainer.rotation.z = rot;
        planetContainer.rotation.x = rot * 2;

        particles = particlesGenerator();

        sceneMg.AddGroup(planetContainer);
        sceneMg.AddGroup(particles);

        rendererMg.setAnimationLoop(() => {
          update(this.$props.container);
          rendererMg.Render(sceneMg.Scene, cameraMg.Camera);
        });

        this.rendered = true;
      }
    },
    currentState(newVal, oldVal) {
      if (oldVal === InteractionState.Root && newVal != InteractionState.Root) {
        currentState = WorldStates.ZoomIn;
      } else if (
        newVal === InteractionState.Root &&
        oldVal != InteractionState.Root
      ) {
        currentState = WorldStates.ZoomOut;
      }
    }
  }
});
</script>
