<script lang="ts">
	import { onMount } from 'svelte';
	export let video: string;
	let videoSrc = `src/public/${video}`;
	let isHovered = false;
</script>

<div class="flex justify-center items-center">
	<div class="relative overflow-hidden size-full transition-transform transform hover:scale-125">
		<video
			id="videoPlayer"
			disablePictureInPicture
			autoplay
			muted
			loop
			class="w-full h-full object-cover"
			on:mouseenter={() => (isHovered = true)}
			on:mouseleave={() => (isHovered = false)}
			style={`z-index: ${isHovered ? 1 : 0};`}
		>
			<source src={videoSrc} type="video/webm" />
			Your browser does not support the video tag.
		</video>
	</div>
</div>
