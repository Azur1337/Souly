<script lang="ts">
	import { goto } from '$app/navigation';
	export let navigateTo: string;
</script>

<div class="">
	<button on:click={() => goto(`/${navigateTo}`)}>Meow</button>
</div>
