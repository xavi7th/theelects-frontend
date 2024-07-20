<script>
    import SmallBanner from "$lib/components/SmallBanner.svelte";
</script>

<div class="block block-banner">
    <div class="container">
        <div
            style="
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 10px;
            "
        >
            <SmallBanner />
            <SmallBanner />
        </div>
    </div>
</div>
