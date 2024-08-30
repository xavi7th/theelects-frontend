<script>
    export let title = '';
    export let dasboardOrder = false;
</script>

<div class="card" class:dashboard__orders={dasboardOrder}>
    <div class="card-header">
        <h5>{title}</h5>
    </div>
    <div class="card-divider"></div>
    <slot />
    <div class="card-divider"></div>
    {#if false}
    <div class="card-footer">
        <ul class="pagination justify-content-center">
            <li class="page-item disabled"><a class="page-link page-link--with-arrow"
                    href="javascript;:" aria-label="Previous"><svg
                        class="page-link__arrow page-link__arrow--left" aria-hidden="true"
                        width="8px" height="13px">
                        <use xlink:href="images/sprite.svg#arrow-rounded-left-8x13"></use>
                    </svg></a></li>
            <li class="page-item"><a class="page-link" href="javascript;:">1</a></li>
            <li class="page-item active"><a class="page-link" href="javascript;:">2 <span
                        class="sr-only">(current)</span></a></li>
            <li class="page-item"><a class="page-link" href="javascript;:">3</a></li>
            <li class="page-item"><a class="page-link page-link--with-arrow" href="javascript;:"
                    aria-label="Next"><svg class="page-link__arrow page-link__arrow--right"
                        aria-hidden="true" width="8px" height="13px">
                        <use xlink:href="images/sprite.svg#arrow-rounded-right-8x13"></use>
                    </svg></a></li>
        </ul>
    </div>
    {/if}
</div>
