<script>
  import { getImgObj } from "$lib/helpers";

  /** @type {{ name: string, product_count: number, imgUrl: string }[]} */
  export let categories = []
</script>

{#if categories.length}
  <div class="block block--highlighted block-categories block-categories--layout--compact !mb-0">
    <div class="container">
      <div class="block-header">
        <h3 class="block-header__title">Popular Categories</h3>
        <div class="block-header__divider"></div>
      </div>
      <div class="block-categories__list">
        {#each categories as cat}
          <div class="block-categories__item category-card category-card--layout--compact">
            <div class="category-card__body flex-col lg:flex-row !p-[10px] lg:!px-[30px] lg:!py-[16px]">
              <div class="category-card__image mr-0 lg:mr-8">
                {#await getImgObj(cat.imgUrl)}
                  <p>loading...</p>
                {:then src}
                  <a href=""><enhanced:img src="{ src.default }" alt="" class="category-card__image-img"/></a>
                {/await}
              </div>
              <div class="category-card__content text-center lg:text-left">
                <div class="category-card__name"><a href="">{cat.name}</a></div>
                <div class="category-card__products">{cat.product_count} Products</div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .block-categories__item {
    width: calc(25% - 12px);

    @media (max-width: 991px) {
      width: calc(50% - 12px);
    }
  }

  .category-card__image-img {
    width: 60px;
    height: 60px;
  }
</style>
