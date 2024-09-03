<script>
	import SmallBanner from '$lib/components/SmallBanner.svelte';


  export let imgUrl = '/src/lib/images/banners/banner-1.jpg', mobileImgUrl = '/src/lib/images/banners/banner-1-mobile.jpg', url = '#';

  export let imgUrl2 = '/src/lib/images/banners/banner-1.jpg', mobileImgUrl2 = '/src/lib/images/banners/banner-1-mobile.jpg', url2 = '#';
</script>

<div class="block block-banner">
	<div class="container">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
			<SmallBanner {imgUrl} {mobileImgUrl} {url}/>

      {#if imgUrl2}
        <SmallBanner imgUrl={imgUrl2} mobileImgUrl={mobileImgUrl2} url={url2}/>
      {/if}
		</div>
	</div>
</div>
