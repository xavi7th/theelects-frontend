<script>
	import { writable } from 'svelte/store';
	import { onMount, setContext } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MobileHeader from '$lib/components/MobileHeader.svelte';
	import QuickViewModal from '$lib/components/QuickViewModal.svelte';
	import PhotoSwipeDialog from '$lib/components/PhotoSwipeDialog.svelte';

	import '$vendor/main.scss';

	export let data;

	const isMounted = writable(false);
	const { header } = data;

	setContext('isMounted', isMounted);

	onMount(() => ($isMounted = true));
</script>

<main>
	<div class="site bg-gray-50">
		<Header data={header} />
		<MobileHeader {header} />
		<div class="site__body">
			<slot />
		</div>
	</div>
	<Footer />

	<QuickViewModal />

	<PhotoSwipeDialog />
</main>
