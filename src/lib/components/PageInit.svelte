<script>
	import { getContext } from 'svelte';
  import { navigating } from '$app/stores';

	const isMounted = getContext('isMounted');
</script>

<svelte:head>
	{#if !$navigating && $isMounted}
		<script src="/js/app-init-{appInitHex}.js"></script>
	{/if}
</svelte:head>
