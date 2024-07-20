<script>
    import { side_menu } from "$stores/HandEvenStore";

    export let imgUrls;

    $: console.log(imgUrls);
</script>

<!-- .block-slideshow -->
<div class="block-slideshow block-slideshow--layout--with-departments">
    <div class="container">
        <div class="row">
            <div class="d-none d-lg-block" class:col-lg-3={$side_menu.is_open}></div>
            <div class="col-12" class:col-lg-9={$side_menu.is_open} class:col-lg-12={!$side_menu.is_open}>
                <div class="block-slideshow__body">
                    <div class="owl-carousel">
                        <a class="block-slideshow__slide" href="javascript;:">
                            <div class="block-slideshow__slide-image block-slideshow__slide-image--desktop" style="background-image: url({imgUrls['/src/lib/images/slides/slide-1.jpg']})"></div>
                            <div class="block-slideshow__slide-image block-slideshow__slide-image--mobile" style="background-image: url({imgUrls['/src/lib/images/slides/slide-1-mobile.jpg']})"></div>
                            <div class="block-slideshow__slide-content">
                                <div class="block-slideshow__slide-title">Big choice of<br>Plumbing products</div>
                                <div class="block-slideshow__slide-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.</div>
                                <div class="block-slideshow__slide-button"><span class="btn btn-primary btn-lg">Shop Now</span></div>
                            </div>
                        </a>
                        <a class="block-slideshow__slide" href="javascript;:">
                            <div class="block-slideshow__slide-image block-slideshow__slide-image--desktop" style="background-image: url({imgUrls['/src/lib/images/slides/slide-2.jpg']})"></div>
                            <div class="block-slideshow__slide-image block-slideshow__slide-image--mobile" style="background-image: url({imgUrls['/src/lib/images/slides/slide-2-mobile.jpg']})"></div>
                            <div class="block-slideshow__slide-content">
                                <div class="block-slideshow__slide-title">Screwdrivers<br>Professional Tools</div>
                                <div class="block-slideshow__slide-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.</div>
                                <div class="block-slideshow__slide-button"><span class="btn btn-primary btn-lg">Shop Now</span></div>
                            </div>
                        </a>
                        <a class="block-slideshow__slide" href="javascript;:">
                            <div class="block-slideshow__slide-image block-slideshow__slide-image--desktop" style="background-image: url({imgUrls['/src/lib/images/slides/slide-3.jpg']})"></div>
                            <div class="block-slideshow__slide-image block-slideshow__slide-image--mobile" style="background-image: url({imgUrls['/src/lib/images/slides/slide-3-mobile.jpg']})"></div>
                            <div class="block-slideshow__slide-content">
                                <div class="block-slideshow__slide-title">One more<br>Unique header</div>
                                <div class="block-slideshow__slide-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.</div>
                                <div class="block-slideshow__slide-button"><span class="btn btn-primary btn-lg">Shop Now</span></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- .block-slideshow / end -->
