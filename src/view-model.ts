import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Initialize Three.js
const container = document.getElementById('model-container') as HTMLElement;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Set alpha to true
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setClearColor(0x000000, 0); // Set background color to transparent
container.appendChild(renderer.domElement);

// Add lights
const ambientLight = new THREE.AmbientLight(0x404040, 10); // Softer ambient light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
directionalLight.position.set(0, 1, 1).normalize();
scene.add(directionalLight);

// Variable to store the loaded model
let model: THREE.Group | null = null;

// Load the GLB model
const loader = new GLTFLoader();
loader.load('../assets/3D/jacket.glb', function (gltf) {
  model = gltf.scene;
  scene.add(model);
  model.position.set(0, 0, 0);
  camera.position.z = 1.7;

  // Animation loop
  const animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  animate();
}, undefined, function (error) {
  console.error(error);
});

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
});

// Variables for mouse interaction
let isMouseDown = false;
let mouseX = 0, mouseY = 0;

container.addEventListener('mousedown', (event) => {
  isMouseDown = true;
  mouseX = event.clientX;
  mouseY = event.clientY;
  console.log('Mouse down at:', mouseX, mouseY);
});

container.addEventListener('mousemove', (event) => {
  if (isMouseDown && model) {
    const deltaX = event.clientX - mouseX;
    const deltaY = event.clientY - mouseY;
    mouseX = event.clientX;
    mouseY = event.clientY;

    model.rotation.y += deltaX * 0.01;
    model.rotation.x += deltaY * 0.01;

    console.log('Rotating model:', deltaX, deltaY);
  }
});

container.addEventListener('mouseup', () => {
  isMouseDown = false;
  console.log('Mouse up');
});

container.addEventListener('mouseleave', () => {
  isMouseDown = false;
  console.log('Mouse left the container');
});
