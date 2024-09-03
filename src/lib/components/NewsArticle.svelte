<script>
  /** @type {import('$lib/types').NewsArticle} */
  export let item;
</script>

<div class="post-card">
  <div class="post-card__image">
    <a href="{item?.url}"><img src="{item?.imgUrl}" alt="" class="rounded-xl" /></a>
  </div>
  <div class="post-card__info">
    <div class="post-card__category"><a href="">Special Offers</a></div>
    <div class="post-card__name">
      <a href="{item?.url}">{ item?.title }</a>
    </div>
    <div class="post-card__date">{ new Date(item?.created_at).toDateString() }</div>
    <div class="post-card__content">
      {item?.summary}
    </div>
    <div class="post-card__read-more">
      <a href="{item?.url}" class="btn btn-secondary btn-sm">Read More</a>
    </div>
  </div>
</div>
