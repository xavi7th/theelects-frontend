<script lang="ts">
    export let sectionName:string = "";
</script>

<div class="block block-products-carousel" data-layout="grid-5">
    <div class="container">
        <div class="block-header">
            <h3 class="block-header__title">{ sectionName }</h3>
            <div class="block-header__divider"></div>
            <ul class="block-header__groups-list">
                <li><button type="button"
                        class="block-header__group block-header__group--active">All</button></li>
                <li><button type="button" class="block-header__group">Power Tools</button></li>
                <li><button type="button" class="block-header__group">Hand Tools</button></li>
                <li><button type="button" class="block-header__group">Plumbing</button></li>
            </ul>
            <div class="block-header__arrows-list"><button
                    class="block-header__arrow block-header__arrow--left" type="button"><svg width="7px"
                        height="11px">
                        <use xlink:href="images/sprite.svg#arrow-rounded-left-7x11"></use>
                    </svg></button> <button class="block-header__arrow block-header__arrow--right"
                    type="button"><svg width="7px" height="11px">
                        <use xlink:href="images/sprite.svg#arrow-rounded-right-7x11"></use>
                    </svg></button></div>
        </div>
        <div class="block-products-carousel__slider">
            <div class="block-products-carousel__preloader"></div>
            <div class="owl-carousel">
                <div class="block-products-carousel__column">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</div>