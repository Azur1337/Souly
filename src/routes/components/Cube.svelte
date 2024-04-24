<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import * as THREE from 'three';
  
    let scene:any, camera:any, renderer:any, heart:any;
  
    function init() {
      // Scene
      scene = new THREE.Scene();
  
      // Camera
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 10;
  
      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
  
      // Heart geometry
      const heartShape = new THREE.Shape();
      heartShape.moveTo(25, 25);
      heartShape.bezierCurveTo(25, 25, 20, 0, 0, 0);
      heartShape.bezierCurveTo(-30, 0, -30, 35, -30, 35);
      heartShape.bezierCurveTo(-30, 55, -10, 77, 25, 95);
      heartShape.bezierCurveTo(60, 77, 80, 55, 80, 35);
      heartShape.bezierCurveTo(80, 35, 80, 0, 50, 0);
      heartShape.bezierCurveTo(35, 0, 25, 25, 25, 25);
      
      const extrudeSettings = { depth: 15, bevelEnabled: true, bevelSegments: 10, steps: 12, bevelSize: 3, bevelThickness: 3 };
      const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
  
      // Material
      const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      
      // Heart mesh
      heart = new THREE.Mesh(geometry, material);
      heart.scale.set(0.025, 0.025, 0.025); // Scale down the heart
      scene.add(heart);
  
      // Animation loop
      function animate() {
        requestAnimationFrame(animate);

        heart.rotation.y += 0.01;
        renderer.render(scene, camera);
      }
  
      animate();
    }
  
    // Initialize Three.js when the component is mounted
    onMount(() => {
      init();
    });
  
    // Clean up Three.js resources when the component is destroyed
    onDestroy(() => {
      if (renderer) {
        renderer.dispose();
      }
    });
  </script>
  
  <style>
    canvas {
      display: block;
    }
  </style>
  
  <canvas />
