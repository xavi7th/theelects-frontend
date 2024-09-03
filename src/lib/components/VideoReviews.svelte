<script>

	import VideoReviewCard from './VideoReviewCard.svelte';

  /** @type {import('$lib/types').VideoReview[]} */
  export let video_reviews;

  /** @type {import('$lib/types').VideoReview} */
  export let featured_review;
</script>

<div class="block block-products block-products--layout--large-first">
  <div class="container">
    <div class="block-header">
      <h3 class="block-header__title">Video Reviews and Comparisons</h3>
      <div class="block-header__divider"></div>
    </div>
    <div class="block-products__body">
      <div class="block-products__list">
        {#each video_reviews as review}
          <div class="block-products__list-item">
            <VideoReviewCard review={review} />
          </div>
        {/each}
      </div>

      <div class="block-products__featured">
        <div class="block-products__featured-item">
          <VideoReviewCard review={featured_review} isFeatured/>
        </div>
      </div>
    </div>
  </div>
</div>
