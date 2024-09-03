<script>
	import { getImgObj } from '$lib/helpers';

  /** @type {import('$lib/types').VideoReview} */
  export let review;

  export let isFeatured = false;
</script>

<div class="block-products-carousel__column hover:shadow shadow-gray-600">
  <div class="block-products-carousel__cell mt-[10px]">
    <div class="product-card rounded-2xl">
      <div class="product-card__image grow">
        <a href="{review?.url}" target="_blank">
          {#await getImgObj(review?.imgUrl)}
            <span>loading...</span>
          {:then src}
            <enhanced:img src="{ src.default }" alt="brand-logo" class="review-card__image-img" class:featured={isFeatured}/>
          {/await}
        </a>
      </div>
      <div class="product-card__info">
        <div class="product-card__name"><a href="{review?.url}" target="_blank">{review?.title}</a></div>
        <div class="product-card__rating">
          <div class="product-card__rating-stars">
            <div class="rating">
              <div class="rating__body">
                {#each Array(Number(review?.rating || 0)) as i}
                  <svg class="rating__star rating__star--active" width="13px" height="12px">
                    <g class="rating__fill"><use xlink:href="/img/sprite.svg#star-normal"></use></g>
                    <g class="rating__stroke"><use xlink:href="/img/sprite.svg#star-normal-stroke"></use></g>
                  </svg>
                  <div class="rating__star rating__star--only-edge rating__star--active">
                    <div class="rating__fill"><div class="fake-svg-icon"></div></div>
                    <div class="rating__stroke"><div class="fake-svg-icon"></div></div>
                  </div>
                {/each}
                {#each Array(5 - Number(review?.rating || 0)) as i}
                  <svg class="rating__star" width="13px" height="12px">
                    <g class="rating__fill"><use xlink:href="/img/sprite.svg#star-normal"></use></g>
                    <g class="rating__stroke"><use xlink:href="/img/sprite.svg#star-normal-stroke"></use></g>
                  </svg>
                  <div class="rating__star rating__star--only-edge">
                    <div class="rating__fill"><div class="fake-svg-icon"></div></div>
                    <div class="rating__stroke"><div class="fake-svg-icon"></div></div>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="product-card__actions !grow-0">
        <div class="product-card__prices">{review?.created_at}</div>

        <div class="product-card__buttons">
          <button class="btn btn-primary product-card__addtocart" type="button">Watch Review</button>
          <button class="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Watch Review</button>
        </div>
      </div>

    </div>
  </div>
</div>

<style lang="scss">
  .review-card__image-img:not(.featured) {
    height: 200px;
    width: 200px;

    @media (max-width:991px) {
      height: 100%;
      width: 100%;
    }
  }

  :global{
    .review-card__image-img.featured{
      object-fit: fill;
      height: 425px;

      @media (max-width:991px) {
        height: 100%;
        object-fit: scale-down;
      }
    }
  }
</style>
