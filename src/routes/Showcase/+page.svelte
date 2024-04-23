<script lang="ts">
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import VideoContainer from '../components/VideoContainer.svelte';
	import { volumeStore } from './volumeStore.ts';
	
	let videos = [
	  'BossbabyIntro.webm', 
	  'Bundeswehr.webm', 
	  'Chrysanthemen.webm', 
	  'DeineFreundinnen.webm', 
	  'Diamantstein.webm', 
	  'FuerImmer.webm', 
	  'HartGehenOhneGrund.webm', 
	  'Herbst.webm', 
	  'IchWuenschteEsWuerdMichKuemmern.webm', 
	  'LieferandoFuer2.webm', 
	  'LoserABC.webm', 
	  'NowitzkiFlow.webm', 
	  'Shotta2.webm', 
	  'SterneNehmen.webm', 
	  'TheorieUndPraxis.webm', 
	  'Woah.webm'
	];
	
	let volume = 0.05;
	
	function handleVolumeChange(event) {
	  volume = event.detail.volume;
	}
	$: volume = $volumeStore;
  </script>
	
  <div class="relative w-screen h-screen" transition:fade>
	<button 
	  class="absolute top-5 left-5 size-12 text-white flex items-center justify-center z-30 backdrop-blur-lg rounded-lg"
	  on:click={() => goto('/')}
	>
	  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" {...$$props}><path fill="white" d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"/></svg>
	</button>
	
	<div class="grid grid-cols-4 grid-rows-4 bg-white w-screen h-screen">
	  {#each videos as video}
		<VideoContainer video={video} volume={volume} on:volumeChange={handleVolumeChange} />
	  {/each}
	</div>
  </div>
  