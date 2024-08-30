<script>
	import { onMount } from 'svelte';
  import { getImgObj } from "$lib/helpers";

  /** @type {import('$lib/types').BrandLogo[]} */
	export let brand_logos;

  /** @type HTMLElement */
  let brandContainer;

  onMount(() => {
    jQuery( brandContainer ).owlCarousel( {
        nav: false,
        dots: false,
        loop: true,
        rtl: false,
        responsive: {
          1200: {
            items: 6
          },
          992: {
            items: 5
          },
          768: {
            items: 4
          },
          576: {
            items: 3
          },
          0: {
            items: 2
          }
        }
      } );
  })
</script>

{#if brand_logos.length}
  <div class="block block-brands mb-2">
    <div class="container">
      <div class="block-header">
        <h3 class="block-header__title">Top Brands</h3>
        <div class="block-header__divider"></div>
      </div>
      <div class="block-brands__slider">
        <div class="owl-carousel" bind:this={brandContainer}>
          {#each brand_logos as brand}
            <div class="block-brands__item">
              <a href={brand.url}>
                {#await getImgObj(brand.logoUrl)}
                  <span>loading...</span>
                {:then src}
                  <enhanced:img src="{ src.default }" alt="brand-logo" class="category-card__image-img"/>
                {/await}
              </a>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>

  <div class="container mb-2">
    <div class="brands-seperator"></div>
  </div>
{/if}


<style lang="scss">
  .block-brands__slider{
    border: none;
  }

  .block-brands__item{
    margin: 2px;
    border-radius: 5px;
    position: relative;

    &:after{
      content: "";
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.342);
      border-radius: 5px;
    }

    a{
      position: relative;
      z-index: 1;
    }
  }

  .category-card__image-img{
    height: auto;
  }

  .brands-seperator{
    height: 15px;
    background-color: whitesmoke;
    border: 1px solid darken(whitesmoke, 3%);
  }
</style>
