<!-- svelte-ignore a11y-missing-attribute -->
<script lang="ts">
    import Header from "$lib/components/shared/Header.svelte";
    import MobileHeader from "$lib/components/shared/MobileHeader.svelte";
    import Footer from "$lib/components/shared/Footer.svelte";
	// import MobileNav from './../lib/components/shared/MobileNav.svelte';
    import Dialog from "$lib/components/shared/Dialog.svelte";
    import QuickView from "$lib/components/shared/QuickView.svelte";

    export let data:any;

    const { header } = data;
</script>

<main>
    <!-- site -->
    <div class="site">
        <Header data="{header}" />
        <MobileHeader data="{header}" />
        <div class="site__body">
            <slot />
        </div>
    </div>
    <Footer />
    <!-- quickview-modal -->
    <QuickView />
    <!-- quickview-modal / end -->
    <!-- photoswipe -->
    <Dialog />
    <!-- photoswipe / end -->
    <!-- site / end -->
</main>