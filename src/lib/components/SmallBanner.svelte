<script>
  import { getImgUrl } from "$lib/helpers";

  export let imgUrl = '/src/lib/images/banners/banner-1.jpg', mobileImgUrl = '/src/lib/images/banners/banner-1-mobile.jpg', url = '';
</script>

<div  class="block-banner__body">
  <div class="block-banner__image block-banner__image--desktop" style="background-image: url({ getImgUrl(imgUrl) });"></div>
  <div class="block-banner__image block-banner__image--mobile" style="background-image: url({ getImgUrl(mobileImgUrl) });"></div>

  <div class="block-banner__action">
    <a href="{url}" class="btn btn-primary btn-action">View</a>
  </div>
</div>

<style lang="scss">
  .block-banner__body{
    height: 250px;

    &:hover{

      .block-banner__action{
        opacity: 1;
        pointer-events: all;
        transition: opacity 600ms ease-in-out;
      }
    }
  }
  .block-banner__image{
    background-size: cover;
    border-radius: 5px;
    box-shadow: 4px 4px 7px hsla(0, 1%, 22%, 0.078);
  }

  .block-banner__action{
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 300ms ease-in-out;

    &::before{
      content: "";
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.7);
      z-index: -1;
    }

    .btn-action{
      color: #fff;
      border: 2px solid transparent;
      transition: all 300ms ease;
    }
  }
</style>
