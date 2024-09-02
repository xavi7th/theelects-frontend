<script>

  import TopBrands from './TopBrands.svelte';
	import Article from '../../lib/components/Article.svelte';
	import Features from './partials/Features.svelte';
	import LongCard from './partials/PopularCategories.svelte';
	import Slideshow from './partials/Slideshow.svelte';
	import PageInit from '$lib/components/PageInit.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import Bestseller from '$lib/components/Bestseller.svelte';
	import MultipleBanner from './partials/MultipleBanner.svelte';
	import SingleBanner from '$lib/components/SingleBanner.svelte';
	import SpecialProducts from './partials/SpecialProducts.svelte';
	import PopularCategories from './partials/PopularCategories.svelte';

	export let data;

	const { features, featured_products, featured_bestseller, bestsellers, filters, categories, brand_logos, articles } = data;
</script>

<PageInit />

<!-- <Slideshow /> -->
<!-- <Features {features} /> -->
<!-- <Carousel sectionName="Featured Products" items={featured_products} {filters}/> -->
<!-- <SingleBanner imgUrl='/src/lib/images/banners/mrwhostheboss.jpg' mobileImgUrl='/src/lib/images/banners/mrwhostheboss.jpg' /> -->
<!-- <Bestseller {bestsellers} {featured_bestseller}/> -->
<!-- <SingleBanner imgUrl='/src/lib/images/banners/samsung-fold-5.jpg' mobileImgUrl='/src/lib/images/banners/samsung-fold-5.jpg' /> -->
<!-- <Bestseller {bestsellers} {featured_bestseller}/> -->

<!-- <SingleBanner imgUrl='/src/lib/images/banners/other-banner.jpg' mobileImgUrl='/src/lib/images/banners/banner-1-mobile.jpg'>
  <svelte:fragment slot="title">
    Hundreds <br class="block-banner__mobile-br" /> Hand Tools From Slot
  </svelte:fragment>

  <svelte:fragment slot="text">
    Hammers, Chisels, Universal Pliers, Nippers, Jigsaws, Saws
  </svelte:fragment>
</SingleBanner> -->

<!-- <PopularCategories {categories}/> -->

<!-- <TopBrands {brand_logos}/> -->

<!-- <MultipleBanner imgUrl='/src/lib/images/banners/small-banner2.jpg' mobileImgUrl='/src/lib/images/banners/small-banner2.jpg' url="/"
          imgUrl2='/src/lib/images/banners/small-banner1.jpg' mobileImgUrl2='/src/lib/images/banners/small-banner1.jpg' url2="/shop"/> -->

<!-- <Carousel sectionName="New Arrivals" items={featured_products} {filters} layout="horizontal" mobileGridColumns=2 component='ProductCard'/> -->


<!-- <MultipleBanner imgUrl='/src/lib/images/banners/small-banner3.jpg' mobileImgUrl='/src/lib/images/banners/small-banner3.jpg'
          imgUrl2='/src/lib/images/banners/small-banner4.jpg' mobileImgUrl2='/src/lib/images/banners/small-banner4.jpg'/> -->



<!-- .block-posts -->
<!-- <div class="block block-posts block-posts--layout--grid-nl" data-layout="grid-nl">
  <div class="container">
    <div class="block-header">
      <h3 class="block-header__title">Latest News</h3>
      <div class="block-header__divider"></div>
      <div class="block-header__arrows-list">
        <button class="block-header__arrow block-header__arrow--left" type="button">
          <svg width="7px" height="11px">
            <use xlink:href="/img/sprite.svg#arrow-rounded-left-7x11"></use>
          </svg>
        </button>
        <button class="block-header__arrow block-header__arrow--right" type="button">
          <svg width="7px" height="11px">
            <use xlink:href="/img/sprite.svg#arrow-rounded-right-7x11"></use>
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

<!-- <Carousel sectionName="Latest News" items={articles} layout="grid-nl" component='Article' carouselClass="block-posts block-posts--layout--grid-nl" mobileGridColumns=2/> -->

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
          <a href=""><img src="/src/lib/images/logos/logo-1.png" alt="" /></a>
        </div>
        <div class="block-brands__item">
          <a href=""><img src="/src/lib/images/logos/logo-2.png" alt="" /></a>
        </div>
        <div class="block-brands__item">
          <a href=""><img src="/src/lib/images/logos/logo-3.png" alt="" /></a>
        </div>
        <div class="block-brands__item">
          <a href=""><img src="/src/lib/images/logos/logo-4.png" alt="" /></a>
        </div>
        <div class="block-brands__item">
          <a href=""><img src="/src/lib/images/logos/logo-5.png" alt="" /></a>
        </div>
        <div class="block-brands__item">
          <a href=""><img src="/src/lib/images/logos/logo-6.png" alt="" /></a>
        </div>
        <div class="block-brands__item">
          <a href=""><img src="/src/lib/images/logos/logo-7.png" alt="" /></a>
        </div>
      </div>
    </div>
  </div>
</div> -->
<!-- .block-brands / end -->

<!-- .block-product-columns -->
<!-- <SpecialProducts /> -->
<!-- .block-product-columns / end -->
