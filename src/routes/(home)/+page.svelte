<script>
	import { shuffle } from '$lib/helpers';
  import TopBrands from './TopBrands.svelte';
	import Features from './partials/Features.svelte';
	import MiniCards from './partials/MiniCards.svelte';
	import Slideshow from './partials/Slideshow.svelte';
	import PageInit from '$lib/components/PageInit.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import Bestsellers from '$lib/components/Bestsellers.svelte';
	import MultipleBanner from './partials/MultipleBanner.svelte';
	import SingleBanner from '$lib/components/SingleBanner.svelte';
	import VideoReviews from '$lib/components/VideoReviews.svelte';
	import PopularCategories from './partials/PopularCategories.svelte';

	export let data;

  /** @type {import('./$types').PageData} */
	const { features, featured_products, featured_bestseller, bestsellers, filters, video_reviews, featured_review, brand_logos, categories, new_arrivals, news_articles, minicard_items } = data;
</script>

<PageInit />

<Slideshow />
<Features {features} />
<Carousel sectionName="Featured Products" items={featured_products} {filters}/>
<SingleBanner imgUrl='/src/lib/images/banners/mrwhostheboss.jpg' mobileImgUrl='/src/lib/images/banners/mrwhostheboss.jpg' />
<Bestsellers {bestsellers} {featured_bestseller}/>
<SingleBanner imgUrl='/src/lib/images/banners/samsung-fold-5.jpg' mobileImgUrl='/src/lib/images/banners/samsung-fold-5.jpg' />
<VideoReviews {video_reviews} {featured_review}/>

<MultipleBanner imgUrl='/src/lib/images/banners/small-banner2.jpg' mobileImgUrl='/src/lib/images/banners/small-banner2.jpg' url="/"
          imgUrl2='/src/lib/images/banners/small-banner1.jpg' mobileImgUrl2='/src/lib/images/banners/small-banner1.jpg' url2="/shop"/>

<PopularCategories {categories}/>
<TopBrands {brand_logos}/>

<SingleBanner imgUrl='/src/lib/images/banners/samsung-s24-ultra.jpg' mobileImgUrl='/src/lib/images/banners/samsung-s24-ultra.jpg'>
  <svelte:fragment slot="title">
    Hundreds of <br class="block-banner__mobile-br" /> UK Used Devices Available
  </svelte:fragment>

  <svelte:fragment slot="text">
    IPhones, Samsungs, Nothing Phone, One Plus, Techno, Redmi
  </svelte:fragment>
</SingleBanner>

<Carousel sectionName="New Arrivals" items={new_arrivals} layout="horizontal" mobileGridColumns=2 component='DoubledProductCard'/>

<MultipleBanner imgUrl='/src/lib/images/banners/small-banner3.jpg' mobileImgUrl='/src/lib/images/banners/small-banner3.jpg'
          imgUrl2='/src/lib/images/banners/small-banner4.jpg' mobileImgUrl2='/src/lib/images/banners/small-banner4.jpg'/>

{#if shuffle([0,1]).pop()}
  <Carousel sectionName="Latest Articles" items={news_articles} carouselClass="block-posts" layout="list" component='NewsArticle' mobileGridColumns=1/>
{:else}
  <Carousel sectionName="Latest Articles" items={news_articles} carouselClass="block-posts block-posts--layout--grid-nl" layout="grid-nl" component='NewsArticle'/>
{/if}

<MiniCards {minicard_items}/>
