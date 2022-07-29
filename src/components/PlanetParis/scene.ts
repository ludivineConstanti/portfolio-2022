import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// imports for postprocessing
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js"
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js"

import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader.js"
import { DotScreenShader } from "three/examples/jsm/shaders/DotScreenShader.js"
import { BleachBypassShader } from "three/examples/jsm/shaders/BleachBypassShader.js"
import { ColorifyShader } from "three/examples/jsm/shaders/ColorifyShader.js"
import { HorizontalBlurShader } from "three/examples/jsm/shaders/HorizontalBlurShader.js"
import { VerticalBlurShader } from "three/examples/jsm/shaders/VerticalBlurShader.js"
import { SepiaShader } from "three/examples/jsm/shaders/SepiaShader.js"
import { VignetteShader } from "three/examples/jsm/shaders/VignetteShader.js"
import { GammaCorrectionShader } from "three/examples/jsm/shaders/GammaCorrectionShader.js"
import { PixelShader } from "three/examples/jsm/shaders/PixelShader.js"

let scene: THREE.Scene
export let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let composer: EffectComposer
let group: THREE.Object3D
let HEIGHT: number
let WIDTH: number
let aspectRatio: number
// let controls;
let requestId = 0
export const settings = {
  camera: {
    position: {
      x: 0,
      y: 0,
      z: 70,
    },
  },
  speed: 1,
}
// postprocessing effects
export let effectUnrealBloom: UnrealBloomPass
export let effectDot: ShaderPass
export let effectRGBShift: ShaderPass
export let effectBleach: ShaderPass
export let effectSepia: ShaderPass
export let effectVignette: ShaderPass
export let effectHorizontalBlur: ShaderPass
export let effectVerticalBlur: ShaderPass
export let effectPixel: ShaderPass

export const init = (container: HTMLElement) => {
  // set up the scene, the camera and the renderer
  createScene(container)

  // add the objects
  createModel()

  // add the postprocessing effects
  addPostProcessing()

  // start a loop that will update the objects' positions
  // and render the scene on each frame
  loop()

  // controls = new OrbitControls(camera, renderer.domElement);
  // controls.noPan = true;
  // controls.noZoom = true;
}

// postprocessing
const addPostProcessing = () => {
  composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))

  effectUnrealBloom = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.5,
    0.4,
    0.85
  )
  composer.addPass(effectUnrealBloom)

  /* effectDot = new ShaderPass(DotScreenShader)
  composer.addPass(effectDot) */

  effectRGBShift = new ShaderPass(RGBShiftShader)
  effectRGBShift.uniforms["amount"].value = 0
  composer.addPass(effectRGBShift)

  const shaderBleach = BleachBypassShader
  effectBleach = new ShaderPass(shaderBleach)
  effectBleach.uniforms["opacity"].value = 0
  composer.addPass(effectBleach)

  const shaderSepia = SepiaShader
  effectSepia = new ShaderPass(shaderSepia)
  effectSepia.uniforms["amount"].value = 0
  composer.addPass(effectSepia)

  const shaderVignette = VignetteShader
  effectVignette = new ShaderPass(shaderVignette)
  effectVignette.uniforms["offset"].value = 0
  effectVignette.uniforms["darkness"].value = 0
  composer.addPass(effectVignette)

  effectHorizontalBlur = new ShaderPass(HorizontalBlurShader)
  effectHorizontalBlur.uniforms["h"].value = 0
  composer.addPass(effectHorizontalBlur)

  effectVerticalBlur = new ShaderPass(VerticalBlurShader)
  effectVerticalBlur.uniforms["v"].value = 0
  composer.addPass(effectVerticalBlur)

  effectPixel = new ShaderPass(PixelShader)
  effectPixel.uniforms["resolution"].value = new THREE.Vector2(
    window.innerWidth,
    window.innerHeight
  )
  effectPixel.uniforms["resolution"].value.multiplyScalar(
    window.devicePixelRatio
  )
  composer.addPass(effectPixel)
}

const createScene = (container: HTMLElement) => {
  // Get the width and the height of the screen,
  // use them to set up the aspect ratio of the camera
  // and the size of the renderer.
  HEIGHT = window.innerHeight
  WIDTH = window.innerWidth

  // Create the scene
  scene = new THREE.Scene()

  // Create the camera
  aspectRatio = WIDTH / HEIGHT
  const fieldOfView = 60
  const nearPlane = 10
  const farPlane = 1000
  camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane
  )

  // Set the position of the camera
  camera.position.x = settings.camera.position.x
  camera.position.y = settings.camera.position.y
  camera.position.z = settings.camera.position.z

  // Create the renderer
  renderer = new THREE.WebGLRenderer({
    canvas: container,
    // Allow transparency
    alpha: true,
    // Activate the anti-aliasing; this is less performant
    // (better to not use it for high poly complex projects)
    antialias: true,
  })

  // Define the size of the renderer; in this case,
  // it will fill the entire screen
  renderer.setSize(WIDTH, HEIGHT)

  // Listen to the screen: if the user resizes it
  // we have to update the camera and the renderer size
  window.addEventListener("resize", handleWindowResize, false)
}

export const handleWindowResize = () => {
  // update height and width of the renderer and the camera
  HEIGHT = window.innerHeight
  WIDTH = window.innerWidth
  renderer.setSize(WIDTH, HEIGHT)
  camera.aspect = WIDTH / HEIGHT
  camera.updateProjectionMatrix()
}

const handleLoad = gltf => {
  const tMRoads = new THREE.TextureLoader().load("../../paris/roads.jpg")
  const tMWater = new THREE.TextureLoader().load("../../paris/water.jpg")
  const tMRoofs = new THREE.TextureLoader().load("../../paris/roofs.jpg")
  const tMGrass = new THREE.TextureLoader().load("../../paris/grass.jpg")
  const tMWalls = new THREE.TextureLoader().load("../../paris/walls.jpg")
  const tMTreesBlue = new THREE.TextureLoader().load(
    "../../paris/treesBlue.jpg"
  )
  const tMTreesWhite = new THREE.TextureLoader().load(
    "../../paris/treesWhite.jpg"
  )
  // for some reasons, if I don't push them in an array and try to use them directly
  // it only works for half of them...
  const mesh: THREE.Mesh[] = []
  const mats = [
    // roads
    { matcap: tMRoads, color: "#FFF" },
    // water
    { matcap: tMWater, color: "#5F79A9" },
    // roofs
    { matcap: tMRoofs, color: "#6997E8" },
    // grass
    { matcap: tMGrass, color: "#E0F5EB" },
    // walls
    { matcap: tMWalls, color: "#EECCED" },
    // trees blueL1
    { matcap: tMTreesBlue, color: "#FFF" },
    // trees white
    { matcap: tMTreesWhite, color: "#FFF" },
    // trees blueD1
    { matcap: tMTreesBlue, color: "#4B73BC" },
    // trees blue
    { matcap: tMTreesBlue, color: "#538AE6" },
  ]
  gltf.scene.children[0].children.forEach((child: THREE.Mesh) => {
    mesh.push(child)
  })
  mesh.forEach((child: THREE.Mesh, i) => {
    child.material = new THREE.MeshMatcapMaterial({
      flatShading: true,
      color: mats[i].color ? mats[i].color : "",
      matcap: mats[i].matcap,
    })
    group.add(child)
  })

  group.scale.set(25, 25, 25)
}

// First let's define an object :
const createModel = () => {
  const loader = new GLTFLoader()
  group = new THREE.Object3D()
  loader.load("../../paris/planet.gltf", handleLoad)
  group.position.set(0, 0, 0)
  scene.add(group)
}

const loop = () => {
  group.rotation.y -= 0.0007 * settings.speed
  group.rotation.x -= 0.0012 * settings.speed

  // renderer.render(scene, camera)

  composer.render()
  // name it to be able to remove it on unMount, int he component
  requestId = requestAnimationFrame(loop)
}

export const cancelLoop = () => {
  cancelAnimationFrame(requestId)
}
