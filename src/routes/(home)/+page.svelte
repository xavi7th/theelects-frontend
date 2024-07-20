<script>
	import Card from '$lib/components/Card.svelte';
	import Article from './partials/Article.svelte';
	import Features from './partials/Features.svelte';
	import LongCard from './partials/LongCard.svelte';
	import Slideshow from './partials/Slideshow.svelte';
	import PageInit from '$lib/components/PageInit.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import SmallCard from '$lib/components/SmallCard.svelte';
	import Bestseller from '$lib/components/Bestseller.svelte';
	import MultipleBanner from './partials/MultipleBanner.svelte';
	import SingleBanner from '$lib/components/SingleBanner.svelte';
	import SpecialProducts from './partials/SpecialProducts.svelte';

	export let data;

	const { features, featured_products, imgUrls, imgObjs, filters } = data;

	$: console.log({ imgObjs });
</script>

<PageInit />

<Slideshow {imgUrls} />

<Features {features} />

<!-- <Carousel sectionName="Feature Product" items={featured_products} {filters}/> -->

<!-- <SingleBanner imgUrl={imgUrls['/src/lib/images/banners/banner-1.jpg']} mobileImgUrl={imgUrls['/src/lib/images/banners/banner-1-mobile.jpg']}>
  <svelte:fragment slot="title">
    Hundreds <br class="block-banner__mobile-br" /> Hand Tools From Slot
  </svelte:fragment>

  <svelte:fragment slot="text">
    Hammers, Chisels, Universal Pliers, Nippers, Jigsaws, Saws
  </svelte:fragment>
</SingleBanner> -->

<!-- .block-products -->
<Bestseller />
<!-- .block-products / end -->

<!-- .block-banner -->
<!-- <SingleBanner /> -->
<!-- .block-banner / end -->

<!-- .block-categories -->
<!-- <div class="block block--highlighted block-categories block-categories--layout--compact">
  <div class="container">
    <div class="block-header">
      <h3 class="block-header__title">Popular Categories</h3>
      <div class="block-header__divider"></div>
    </div>
    <div class="block-categories__list">
      <LongCard />
    </div>
  </div>
</div> -->
<!-- .block-categories / end -->

<!-- .block-brands -->
<!-- <div class="block block-brands">
  <div class="container">
    <div class="block-header">
      <h3 class="block-header__title">Popular Categories</h3>
      <div class="block-header__divider"></div>
    </div>
    <div class="block-brands__slider">
      <div class="owl-carousel">
        <div class="block-brands__item">
          <a href=""><img src="images/logos/logo-1.png" alt="" /></a>
        </div>
        <div class="block-brands__item">
          <a href=""><img src="images/logos/logo-2.png" alt="" /></a>
        </div>
        <div class="block-brands__item">
          <a href=""><img src="images/logos/logo-3.png" alt="" /></a>
        </div>
        <div class="block-brands__item">
          <a href=""><img src="images/logos/logo-4.png" alt="" /></a>
        </div>
        <div class="block-brands__item">
          <a href=""><img src="images/logos/logo-5.png" alt="" /></a>
        </div>
        <div class="block-brands__item">
          <a href=""><img src="images/logos/logo-6.png" alt="" /></a>
        </div>
        <div class="block-brands__item">
          <a href=""><img src="images/logos/logo-7.png" alt="" /></a>
        </div>
      </div>
      <div class="owl-carousel">
        <div class="block-brands__item">
          <a href=""><img src="images/logos/logo-1.png" alt="" /></a>
        </div>
        <div class="block-brands__item">
          <a href=""><img src="images/logos/logo-2.png" alt="" /></a>
        </div>
        <div class="block-brands__item">
          <a href=""><img src="images/logos/logo-3.png" alt="" /></a>
        </div>
        <div class="block-brands__item">
          <a href=""><img src="images/logos/logo-4.png" alt="" /></a>
        </div>
        <div class="block-brands__item">
          <a href=""><img src="images/logos/logo-5.png" alt="" /></a>
        </div>
        <div class="block-brands__item">
          <a href=""><img src="images/logos/logo-6.png" alt="" /></a>
        </div>
        <div class="block-brands__item">
          <a href=""><img src="images/logos/logo-7.png" alt="" /></a>
        </div>
      </div>
    </div>
  </div>
</div> -->
<!-- .block-brands / end -->

<!-- .block-banner -->
<!-- <MultipleBanner /> -->
<!-- .block-banner / end -->

<!-- .block-products-carousel -->
<!-- <Carousel sectionName="New Arrival">
  <Card />
</Carousel> -->
<!-- .block-products-carousel / end -->

<!-- .block-banner -->
<!-- <MultipleBanner /> -->
<!-- .block-banner / end -->

<!-- .block-posts -->
<!-- <div class="block block-posts block-posts--layout--grid-nl" data-layout="grid-nl">
  <div class="container">
    <div class="block-header">
      <h3 class="block-header__title">Latest News</h3>
      <div class="block-header__divider"></div>
      <div class="block-header__arrows-list">
        <button class="block-header__arrow block-header__arrow--left" type="button">
          <svg width="7px" height="11px">
            <use xlink:href="images/sprite.svg#arrow-rounded-left-7x11"></use>
          </svg>
        </button>
        <button class="block-header__arrow block-header__arrow--right" type="button">
          <svg width="7px" height="11px">
            <use xlink:href="images/sprite.svg#arrow-rounded-right-7x11"></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="block-posts__slider">
      <div class="owl-carousel">
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  </div>
</div> -->
<!-- .block-posts / end -->

<!-- .block-brands -->
<!-- <div class="block block-brands">
  <div class="container">
    <div class="block-header">
      <h3 class="block-header__title">Popular Categories</h3>
      <div class="block-header__divider"></div>
    </div>
    <div class="block-brands__slider">
      <div class="owl-carousel">
        <div class="block-brands__item">
          <a href=""><img src="images/logos/logo-1.png" alt="" /></a>
        </div>
        <div class="block-brands__item">
          <a href=""><img src="images/logos/logo-2.png" alt="" /></a>
        </div>
        <div class="block-brands__item">
          <a href=""><img src="images/logos/logo-3.png" alt="" /></a>
        </div>
        <div class="block-brands__item">
          <a href=""><img src="images/logos/logo-4.png" alt="" /></a>
        </div>
        <div class="block-brands__item">
          <a href=""><img src="images/logos/logo-5.png" alt="" /></a>
        </div>
        <div class="block-brands__item">
          <a href=""><img src="images/logos/logo-6.png" alt="" /></a>
        </div>
        <div class="block-brands__item">
          <a href=""><img src="images/logos/logo-7.png" alt="" /></a>
        </div>
      </div>
    </div>
  </div>
</div> -->
<!-- .block-brands / end -->

<!-- .block-product-columns -->
<!-- <SpecialProducts /> -->
<!-- .block-product-columns / end -->
