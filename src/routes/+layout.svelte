<!-- svelte-ignore a11y-missing-attribute -->
<script lang="ts">
    import Header from "$lib/components/shared/Header.svelte";
    import MobileHeader from "$lib/components/shared/MobileHeader.svelte";
    import Footer from "$lib/components/shared/Footer.svelte";
    import { onMount, beforeUpdate } from 'svelte';
    import { oldPage, currentPage } from '../stores/ChangeStore';
	import MobileNav from './../lib/components/shared/MobileNav.svelte';
    import Dialog from "$lib/components/shared/Dialog.svelte";
    import QuickView from "$lib/components/shared/QuickView.svelte";

    beforeUpdate(() => {
        if ($oldPage !== $currentPage) {
            console.log('red');
            currentPage.set($oldPage);
        }
    });
</script>

<main>
    <!-- site -->
    <div class="site">
        <Header />
        <MobileHeader />
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