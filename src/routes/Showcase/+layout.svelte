
<script lang="ts">
  import { createEventDispatcher} from 'svelte';
  import { volumeStore } from './volumeStore.ts';
  const dispatch = createEventDispatcher();
  
  function handleVolumeChange(event) {
    const newVolume = parseFloat(event.target.value);
    volumeStore.set(newVolume);
    dispatch('volumeChange', { volume: newVolume });
  }
</script>

<div class="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
  <h1 class="font-pixelify-sans text-9xl">SOULY</h1>
  <input 
    type="range" 
    min="0" 
    max="1" 
    step="0.01" 
    bind:value={$volumeStore}
    on:input={handleVolumeChange} 
    class="mt-4 pointer-events-auto"
  />
</div>

<slot/>
