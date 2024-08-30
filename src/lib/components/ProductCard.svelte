<script>
  /** @type {import('$lib/types').Product | import('$lib/types').NewsArticle} */
  export let item = {};
</script>

<div class="block-products-carousel__column">
  <div class="block-products-carousel__cell" style="margin-top: 10px;">
    <div class="product-card">
      <button class="product-card__quickview" type="button">
        <svg width="16px" height="16px">
          <use xlink:href="/img/sprite.svg#quickview-16"></use>
        </svg>
        <span class="fake-svg-icon"></span>
      </button>
      <div class="product-card__badges-list">
        {#each item.tags as tag}
          <div class="product-card__badge" class:product-card__badge--sale={tag == 'sale'} class:product-card__badge--new={['new', 'featured'].includes(tag)} class:product-card__badge--hot={tag == 'hot'}>
            {tag}
          </div>
        {/each}
      </div>
      <div class="product-card__image">
        <a href="item.html"><img src="{item.imgUrl}" alt="" /></a>
      </div>
      <div class="product-card__info">
        <div class="product-card__name"><a href="item.html">{item.name}</a></div>
        <div class="product-card__rating">
          <div class="product-card__rating-stars">
            <div class="rating">
              <div class="rating__body">
                {#each Array(Number(item.rating)) as i}
                  <svg class="rating__star rating__star--active" width="13px" height="12px">
                    <g class="rating__fill"><use xlink:href="/img/sprite.svg#star-normal"></use></g>
                    <g class="rating__stroke"><use xlink:href="/img/sprite.svg#star-normal-stroke"></use></g>
                  </svg>
                  <div class="rating__star rating__star--only-edge rating__star--active">
                    <div class="rating__fill"><div class="fake-svg-icon"></div></div>
                    <div class="rating__stroke"><div class="fake-svg-icon"></div></div>
                  </div>
                {/each}
                {#each Array(5 - Number(item.rating)) as i}
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
          <div class="product-card__rating-legend">{item.reviews} Reviews</div>
        </div>
        <ul class="product-card__features-list">
          {#each item.features as feature}
            <li>{feature}</li>
          {/each}
        </ul>
      </div>

      <div class="product-card__actions">
        <div class="product-card__availability">
          Availability: {#if item.in_stock} <span class="text-success">In Stock</span> {:else}<span class="text-warning">Out of Stock</span>{/if}
        </div>

        {#if item.tags.includes('sale') }
          <div class="product-card__prices">
            <span class="product-card__new-price">{item.sale_price}</span>
            <span class="product-card__old-price">{item.price}</span>
          </div>
        {:else}
          <div class="product-card__prices">{item.price}</div>
        {/if}

        <div class="product-card__buttons">
          <button class="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
          <button class="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
          <button class="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
            <svg width="16px" height="16px"><use xlink:href="/img/sprite.svg#wishlist-16"></use></svg> <span class="fake-svg-icon fake-svg-icon--wishlist-16"></span>
          </button>
          <button class="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
            <svg width="16px" height="16px"><use xlink:href="/img/sprite.svg#compare-16"></use></svg> <span class="fake-svg-icon fake-svg-icon--compare-16"></span>
          </button>
        </div>
      </div>

    </div>
  </div>
</div>
