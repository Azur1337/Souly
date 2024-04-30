<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';
	import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

	let scene: any, camera: any, renderer: any, heartObject: any;

	onMount(() => {
		const width = window.innerWidth;
		const height = window.innerHeight;

		scene = new THREE.Scene();

		const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
		directionalLight.position.set(10, 20, 20);
		scene.add(directionalLight);

		const loader = new OBJLoader();
		loader.load(
			'src/public/heart.obj',
			function (object) {
				heartObject = object;
				heartObject.position.set(0, 0, 0);
				heartObject.rotation.x = Math.PI;

				heartObject.traverse((child) => {
					if (child instanceof THREE.Mesh) {
						child.material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
					}
				});

				camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
				camera.position.z = 5;
				scene.add(heartObject);

				renderer = new THREE.WebGLRenderer({ antialias: true });
				renderer.setSize(width, height);
				document.body.appendChild(renderer.domElement);

				renderer.domElement.addEventListener('mouseenter', onMouseEnter);
				renderer.domElement.addEventListener('mouseleave', onMouseLeave);

				animate();
			},
			undefined,
			function (error) {
				console.error(error);
			}
		);

		function animate() {
			requestAnimationFrame(animate);

			if (heartObject) {
				heartObject.rotation.y += 0.05;
			}

			renderer.render(scene, camera);
		}

		function onMouseEnter(event) {
			heartObject.scale.set(1.2, 1.2, 1.2);
		}

		function onMouseLeave(event) {
			heartObject.scale.set(1, 1, 1);
		}
	});

	onDestroy(() => {
		if (renderer) {
			renderer.dispose();
			document.body.removeChild(renderer.domElement);
		}
	});
</script>
