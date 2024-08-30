<script>

	import ProductCard from './ProductCard.svelte';

  /** @type {import('$lib/types').Product[]} */
  export let bestsellers = [];

  /** @type {import('$lib/types').Product} */
  export let featured_bestseller = {};
</script>

<div class="block block-products block-products--layout--large-first">
  <div class="container">
    <div class="block-header">
      <h3 class="block-header__title">Product Reviews and Comparisons</h3>
      <div class="block-header__divider"></div>
    </div>
    <div class="block-products__body">
      <div class="block-products__featured">
        <div class="block-products__featured-item">
          <ProductCard item={featured_bestseller} />
        </div>
      </div>
      <div class="block-products__list">
        {#each bestsellers as product}
          <div class="block-products__list-item">
            <ProductCard item={product} />
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
