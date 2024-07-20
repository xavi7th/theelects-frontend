<script>
  /** @type string */
	export let imgUrl = '/@imagetools/d742a43cf341554eb6bb66e78791a1c2c17536f0',
		mobileImgUrl = '/@imagetools/254c5990436af8173b46d419ed5f791f251d7cdb';
</script>

<div class="block block-banner">
	<div class="container">
		<a href="" class="block-banner__body">
			<div class="block-banner__image block-banner__image--desktop" style="background-image: url('{imgUrl}')"></div>
			<div class="block-banner__image block-banner__image--mobile" style="background-image: url('{mobileImgUrl}')"></div>
			<div class="block-banner__title">
				<slot name="title">Hundreds<br class="block-banner__mobile-br" />Hand Tools</slot>
			</div>
			<div class="block-banner__text">
				<slot name="text">Hammers, Chisels, Universal Pliers, Nippers, Jigsaws, Saws</slot>
			</div>
			<div class="block-banner__button"><span class="btn btn-sm btn-primary">Shop Now</span></div>
		</a>
	</div>
</div>
