<script lang="ts">
	import BreadCrumbs from "$lib/components/partials/BreadCrumbs.svelte";
    import { page } from "$app/stores";

    export let data;
</script>


<BreadCrumbs />

<div class="block">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-3 d-flex">
                <div class="account-nav flex-grow-1">
                    <h4 class="account-nav__title">Navigation</h4>
                    <ul>
                        {#each data.navigation as nav}
                            <li class="account-nav__item" class:account-nav__item--active={nav.link == $page.url.pathname}>
                                <a
                                    href="{nav.link}">{nav.title}
                                </a>
                            </li>
                        {/each}
                        <li class="account-nav__item"><a href="account-login.html">Logout</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-lg-9 mt-4 mt-lg-0">
                <slot />
            </div>
        </div>
    </div>
</div>
