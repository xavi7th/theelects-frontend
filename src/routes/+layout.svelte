<script lang="ts">
    import Header from "$lib/components/shared/Header.svelte";
    import MobileHeader from "$lib/components/shared/MobileHeader.svelte";
    import Footer from "$lib/components/shared/Footer.svelte";
</script>

<main>
    <!-- site -->
    <div class="site">
        <Header />
        <MobileHeader />
        <slot />
    </div>
    <Footer />
    <!-- site / end -->
</main>