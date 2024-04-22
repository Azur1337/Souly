<script lang="ts">
	import { onMount } from 'svelte';
	export let video: string;
	let videoSrc = `src/public/${video}`;
	let isHovered = false;
	let videoElement: HTMLVideoElement;

	function handleMouseEnter() {
		isHovered = true;
		if (!videoElement.paused && videoElement.readyState > 2) {
			videoElement.muted = false; // Unmute the video
			videoElement.play().catch(error => console.error("Failed to play video:", error));
		}
	}

	function handleMouseLeave() {
		isHovered = false;
	}
</script>

<div class="flex justify-center items-center">
	<div class="relative overflow-hidden size-full transition-transform transform hover:scale-125"
		on:mouseenter={handleMouseEnter}
		on:mouseleave={handleMouseLeave}>
		<video
			id="videoPlayer"
			disablePictureInPicture
			autoplay
			loop
			class="w-full h-full object-cover"
			muted
			bind:this={videoElement}
			style={`z-index: ${isHovered ? 1 : 0};`}
		>
			<source src={videoSrc} type="video/webm" />
			Your browser does not support the video tag.
		</video>
	</div>
</div>
