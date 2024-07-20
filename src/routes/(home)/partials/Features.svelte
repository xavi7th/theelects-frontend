<script>
  export let features = []
</script>

<div class="block block-features block-features--layout--boxed">
  <div class="container">
    <div class="block-features__list">
      {#each features as item, index}
      <div class="block-features__item">
        <div class="block-features__icon">
          <svg width="48px" height="48px"><use xlink:href="{ item.svg_url }"></use></svg>
        </div>
        <div class="block-features__content">
          <div class="block-features__title">{ item.title }</div>
          <div class="block-features__subtitle">{ item.description }</div>
        </div>
      </div>
      {#if index != features.length - 1}
      <div class="block-features__divider"></div>
      {/if} {/each}
    </div>
  </div>
</div>
