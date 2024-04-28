<script lang="ts">
	import Heart from './components/Heart.svelte';
	import { goto } from '$app/navigation';
	import Button from './components/Button.svelte';
</script>

<div class="relative h-screen">
	<div class="flex justify-center items-center size-inherit">
		<Button navigateTo={'Showcase'} />
		<Heart />
		<!--<video
			id="videoPlayer"
			disablePictureInPicture
			autoplay
			loop
			class="absolute inset-0 w-full h-full object-cover"
			muted
		>
			<source src={'src/public/SoulyAnimation.webm'} type="video/webm" />
		</video>

		<button
			on:click={handleButtonClick}
			class="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white py-2 px-4 rounded font-pixelify-sans"
		>
			Click to Load Videos
		</button>-->
	</div>
</div>
