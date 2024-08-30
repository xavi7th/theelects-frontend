<script>
  import { getImgUrl } from "$lib/helpers";

  /** @type string */
  export let imgUrl = '/src/lib/images/banners/banner-1.jpg';
  /** @type string */
	export let mobileImgUrl = '/src/lib/images/banners/banner-1-mobile.jpg';
  export let style = ''
</script>

<!-- EXAMPLE USAGE -->
<!--
  import SingleBanner from '$lib/components/SingleBanner.svelte';

  <SingleBanner imgUrl='/src/lib/images/banners/other-banner.jpg' mobileImgUrl='/src/lib/images/banners/banner-1-mobile.jpg' style="--bannerTitleTextColor: green">
    <svelte:fragment slot="title">
      Hundreds <br class="block-banner__mobile-br" /> Hand Tools From Slot
    </svelte:fragment>

    <svelte:fragment slot="text">
      Hammers, Chisels, Universal Pliers, Nippers, Jigsaws, Saws
    </svelte:fragment>
  </SingleBanner>
-->

<div class="block block-banner" {style}>
	<div class="container">
		<a href="" class="block-banner__body border border-gray-300 rounded-lg overflow-hidden" class:has-contents={$$slots.title || $$slots.text}>
			<div class="block-banner__image block-banner__image--desktop" style="background-image: url('{ getImgUrl(imgUrl) }')"></div>
			<div class="block-banner__image block-banner__image--mobile" style="background-image: url('{ getImgUrl(mobileImgUrl) }')"></div>

			<div class="block-banner__title">
				<slot name="title"><!--Hundreds<br class="block-banner__mobile-br" />Hand Tools--></slot>
			</div>
			<div class="block-banner__text">
				<slot name="text"><!--Hammers, Chisels, Universal Pliers, Nippers, Jigsaws, Saws--></slot>
			</div>
			<div class="block-banner__button"><span class="btn btn-sm btn-primary">Shop Now</span></div>
		</a>
	</div>
</div>


<style lang="scss">
  .block-banner__body{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    &.has-contents::before{
      content: "";
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.5);
      // z-index: -1;
    }
  }

  .block-banner__button{
    position: absolute;
    bottom: 10px;
  }

  .block-banner__image{
    background-size: cover;
    // z-index: -2;
  }

  .block-banner__title{
    color: var(--bannerTitleTextColor, #fff);
  }

  .block-banner__text{
    color: var(--bannerContentTextColor, #fff);
    margin-bottom: 35px;
  }
</style>
