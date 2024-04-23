<!-- VideoContainer.svelte -->
<script lang="ts">
	export let video: string;
	export let volume: number; // Accept volume as a prop
	let videoSrc = `src/public/${video}`;
	let isHovered = false;
	let videoElement: HTMLVideoElement;
	
	function handleMouseEnter() {
	  isHovered = true;
	  videoElement.muted = false;
	  videoElement.volume = volume; // Set volume
	  videoElement.play().catch(error => console.error("Failed to play video:", error));
	}
	
	function handleMouseLeave() {
	  isHovered = false;
	  videoElement.muted = true;
	}
  </script>
  
  <div class="flex justify-center items-center">
	<div class="relative z-0 overflow-hidden size-full transition-all transform hover:scale-125 hover:z-10"
	  on:mouseenter={handleMouseEnter}
	  on:mouseleave={handleMouseLeave}>
	  <video
		id="videoPlayer"
		disablePictureInPicture
		autoplay
		loop
		muted
		class="w-full h-full object-cover"
		bind:this={videoElement}
	  >
		<source src={videoSrc} type="video/webm" />
		Your browser does not support the video tag.
	  </video>
	</div>
  </div>
  