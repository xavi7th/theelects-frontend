<script lang="ts">
    import Slideshow from "$lib/components/partials/Slideshow.svelte";
    import { oldPage } from "../../stores/ChangeStore";
    import { store_brief_info } from "../../stores/DashboardStore";
    import Card from "../../lib/components/partials/Card.svelte";
    import Bestseller from "../../lib/components/partials/Bestseller.svelte";
    import SingleBanner from "../../lib/components/partials/SingleBanner.svelte";
    import LongCard from "../../lib/components/partials/LongCard.svelte";
    import MultipleBanner from "../../lib/components/partials/MultipleBanner.svelte";
	import Article from "$lib/components/partials/Article.svelte";
	import SpecialProducts from "$lib/components/partials/SpecialProducts.svelte";
    import SmallCard from "../../lib/components/partials/SmallCard.svelte";
    import Carousel from "$lib/components/shared/Carousel.svelte";

    $oldPage = 'home';
</script>

<!-- <svelte:head>
    <script async src="/js/main.js"></script>
</svelte:head> -->

<Slideshow />
<!-- .block-features -->
<div class="block block-features block-features--layout--boxed">
    <div class="container">
        <div class="block-features__list">
            {#each $store_brief_info as item, index}
                <div class="block-features__item">
                    <div class="block-features__icon"><svg width="48px" height="48px"><use xlink:href="{ item.svg_link }"></use></svg></div>
                    <div class="block-features__content">
                        <div class="block-features__title">{ item.title }</div>
                        <div class="block-features__subtitle">{ item.description }</div>
                    </div>
                </div>
                {#if index != $store_brief_info.length - 1}
                    <div class="block-features__divider"></div>
                {/if}
            {/each}
        </div>
    </div>
</div>
<!-- .block-features / end -->
<!-- .block-products-carousel -->
<Carousel sectionName="Feature Product">
    <SmallCard tag="new" />
    <SmallCard tag="sale" />
</Carousel>
<!-- .block-products-carousel / end -->
<!-- .block-banner -->
<div class="block block-banner">
    <div class="container">
        <a href="" class="block-banner__body">
            <div class="block-banner__image block-banner__image--desktop"
                style="background-image: url('images/banners/banner-1.jpg')"></div>
            <div class="block-banner__image block-banner__image--mobile"
                style="background-image: url('images/banners/banner-1-mobile.jpg')"></div>
            <div class="block-banner__title">Hundreds<br class="block-banner__mobile-br">Hand Tools</div>
            <div class="block-banner__text">Hammers, Chisels, Universal Pliers, Nippers, Jigsaws, Saws</div>
            <div class="block-banner__button"><span class="btn btn-sm btn-primary">Shop Now</span></div>
        </a>
    </div>
</div>
<!-- .block-banner / end -->
<!-- .block-products -->
<Bestseller />
<!-- .block-products / end -->
<!-- .block-banner -->
<SingleBanner />
<!-- .block-banner / end -->
<!-- .block-categories -->
<div class="block block--highlighted block-categories block-categories--layout--compact">
    <div class="container">
        <div class="block-header">
            <h3 class="block-header__title">Popular Categories</h3>
            <div class="block-header__divider"></div>
        </div>
        <div class="block-categories__list">
            <LongCard />
        </div>
    </div>
</div>
<!-- .block-categories / end -->
<!-- .block-brands -->
<div class="block block-brands">
    <div class="container">
        <div class="block-header">
            <h3 class="block-header__title">Popular Categories</h3>
            <div class="block-header__divider"></div>
        </div>
        <div class="block-brands__slider">
            <div class="owl-carousel">
                <div class="block-brands__item"><a href=""><img src="images/logos/logo-1.png" alt=""></a>
                </div>
                <div class="block-brands__item"><a href=""><img src="images/logos/logo-2.png" alt=""></a>
                </div>
                <div class="block-brands__item"><a href=""><img src="images/logos/logo-3.png" alt=""></a>
                </div>
                <div class="block-brands__item"><a href=""><img src="images/logos/logo-4.png" alt=""></a>
                </div>
                <div class="block-brands__item"><a href=""><img src="images/logos/logo-5.png" alt=""></a>
                </div>
                <div class="block-brands__item"><a href=""><img src="images/logos/logo-6.png" alt=""></a>
                </div>
                <div class="block-brands__item"><a href=""><img src="images/logos/logo-7.png" alt=""></a>
                </div>
            </div>
            <div class="owl-carousel">
                <div class="block-brands__item"><a href=""><img src="images/logos/logo-1.png" alt=""></a>
                </div>
                <div class="block-brands__item"><a href=""><img src="images/logos/logo-2.png" alt=""></a>
                </div>
                <div class="block-brands__item"><a href=""><img src="images/logos/logo-3.png" alt=""></a>
                </div>
                <div class="block-brands__item"><a href=""><img src="images/logos/logo-4.png" alt=""></a>
                </div>
                <div class="block-brands__item"><a href=""><img src="images/logos/logo-5.png" alt=""></a>
                </div>
                <div class="block-brands__item"><a href=""><img src="images/logos/logo-6.png" alt=""></a>
                </div>
                <div class="block-brands__item"><a href=""><img src="images/logos/logo-7.png" alt=""></a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- .block-brands / end -->
<!-- .block-banner -->
<MultipleBanner />
<!-- .block-banner / end -->
<!-- .block-products-carousel -->
<Carousel sectionName="New Arrival">
    <Card />
</Carousel>
<!-- .block-products-carousel / end -->
<!-- .block-banner -->
<MultipleBanner />
<!-- .block-banner / end -->
<!-- .block-posts -->
<div class="block block-posts block-posts--layout--grid-nl" data-layout="grid-nl">
    <div class="container">
        <div class="block-header">
            <h3 class="block-header__title">Latest News</h3>
            <div class="block-header__divider"></div>
            <div class="block-header__arrows-list"><button
                    class="block-header__arrow block-header__arrow--left" type="button"><svg width="7px"
                        height="11px">
                        <use xlink:href="images/sprite.svg#arrow-rounded-left-7x11"></use>
                    </svg></button> <button class="block-header__arrow block-header__arrow--right"
                    type="button"><svg width="7px" height="11px">
                        <use xlink:href="images/sprite.svg#arrow-rounded-right-7x11"></use>
                    </svg></button></div>
        </div>
        <div class="block-posts__slider">
            <div class="owl-carousel">
                <Article />
            </div>
        </div>
    </div>
</div>
<!-- .block-posts / end -->
<!-- .block-brands -->
<div class="block block-brands">
    <div class="container">
        <div class="block-header">
            <h3 class="block-header__title">Popular Categories</h3>
            <div class="block-header__divider"></div>
        </div>
        <div class="block-brands__slider">
            <div class="owl-carousel">
                <div class="block-brands__item"><a href=""><img src="images/logos/logo-1.png" alt=""></a>
                </div>
                <div class="block-brands__item"><a href=""><img src="images/logos/logo-2.png" alt=""></a>
                </div>
                <div class="block-brands__item"><a href=""><img src="images/logos/logo-3.png" alt=""></a>
                </div>
                <div class="block-brands__item"><a href=""><img src="images/logos/logo-4.png" alt=""></a>
                </div>
                <div class="block-brands__item"><a href=""><img src="images/logos/logo-5.png" alt=""></a>
                </div>
                <div class="block-brands__item"><a href=""><img src="images/logos/logo-6.png" alt=""></a>
                </div>
                <div class="block-brands__item"><a href=""><img src="images/logos/logo-7.png" alt=""></a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- .block-brands / end -->
<!-- .block-product-columns -->
<SpecialProducts />
<!-- .block-product-columns / end -->
