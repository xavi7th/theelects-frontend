<script>
	import ProductCard from '$lib/components/ProductCard.svelte';

	export let minicard_items;
</script>

<div class="block-product-columns d-lg-block d-none block">
	<div class="container">
		<div class="row">
			{#each Object.entries(minicard_items) as [title, products]}
				<div class="col-4">
					<div class="block-header">
						<h3 class="block-header__title capitalize">{title.replace(/[^A-Za-z0-0]/gi, ' ')}</h3>
						<div class="block-header__divider"></div>
					</div>
					<div class="block-product-columns__column">
						{#each products as item}
							<ProductCard {item} isMini />
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
