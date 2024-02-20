<script lang="ts">
    import MiniCard from "./MiniCard.svelte";
</script>

<div class="block block-product-columns d-lg-block d-none">
    <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="block-header">
                    <h3 class="block-header__title">Top Rated Products</h3>
                    <div class="block-header__divider"></div>
                </div>
                <div class="block-product-columns__column">
                    <MiniCard tag="hot" />
                </div>
            </div>
        </div>
    </div>
</div>