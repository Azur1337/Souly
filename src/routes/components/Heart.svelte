<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

	let scene: any, camera: any, renderer: any, heartObject: any;

	onMount(() => {
		const width = window.innerWidth;
		const height = window.innerHeight;

		scene = new THREE.Scene();

		const loader = new GLTFLoader();
		loader.load(
			'src/public/heart.glb',
			function (gltf) {
				heartObject = gltf.scene;
				heartObject.position.set(0, 0, 0);

				heartObject.traverse((child) => {
					if (child instanceof THREE.Mesh) {
						child.material.color.set(0xff0000);
					}
				});

				scene.add(heartObject);

				renderer = new THREE.WebGLRenderer({ antialias: true });
				renderer.setSize(width, height);
				document.body.appendChild(renderer.domElement);

				if (renderer) {
					console.log('Renderer is ready');
					animate();
				}
			},
			undefined,
			function (error) {
				console.error(error);
			}
		);

		camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
		camera.position.z = 20;

		function animate() {
			requestAnimationFrame(animate);

			heartObject.rotation.x += 0.01;
			renderer.render(scene, camera);
		}
	});

	onDestroy(() => {
		if (renderer) {
			renderer.dispose();
			document.body.removeChild(renderer.domElement);
		}
	});
</script>
