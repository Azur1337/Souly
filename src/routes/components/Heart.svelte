<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';

	let scene: any, camera: any, renderer: any, heart: any;

	function init() {
		// Scene
		scene = new THREE.Scene();

		// Camera
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		camera.position.z = 10;

		// Render
		renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(renderer.domElement);

		// geometry
		const heartShape = new THREE.Shape();
		heartShape.moveTo(0, 0);
		heartShape.bezierCurveTo(0, 0, -5, -5, -25, -5);
		heartShape.bezierCurveTo(-55, -5, -55, 15, -55, 15);
		heartShape.bezierCurveTo(-55, 35, -35, 55, 0, 75);
		heartShape.bezierCurveTo(35, 55, 55, 35, 55, 15);
		heartShape.bezierCurveTo(55, 15, 55, -5, 25, -5);
		heartShape.bezierCurveTo(10, -5, 0, 0, 0, 0);

		const extrudeSettings = {
			bevelEnabled: true,
			bevelSegments: 10,
			steps: 12,
			bevelSize: 3,
			bevelThickness: 3
		};
		const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);

		// Material
		const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

		// mesh
		heart = new THREE.Mesh(geometry, material);
		heart.scale.set(0.025, 0.025, 0.025);
		scene.add(heart);

		// Animation
		function animate() {
			requestAnimationFrame(animate);

			heart.rotation.y += 0.05;
			renderer.render(scene, camera);
		}

		animate();
	}

	onMount(() => {
		init();
	});

	onDestroy(() => {
		if (renderer) {
			renderer.dispose();
		}
	});
</script>

<canvas />

<style>
	canvas {
		display: block;
	}
</style>
