<script lang="ts">
	import VideoContainer from './components/VideoContainer.svelte';
	let videos = ['BossbabyIntro.webm', 'Bundeswehr.webm', 'Chrysanthemen.webm', 'DeineFreundinnen.webm', 'Diamantstein.webm', 'FuerImmer.webm', 'HartGehenOhneGrund.webm', 'Herbst.webm', 'IchWuenschteEsWuerdMichKuemmern.webm', 'LieferandoFuer2.webm', 'LoserABC.webm', 'NowitzkiFlow.webm', 'Shotta2.webm', 'SterneNehmen.webm', 'TheorieUndPraxis.webm', 'Woah.webm'];
</script>

<div class="grid grid-cols-4 grid-rows-4 bg-white w-screen h-screen">
	{#each videos as video}
		<VideoContainer video={video} />
	{/each}
</div>
