<script>
    import { header_nav, header_side_nav, header_languages, header_currencies, header_account, header_top_nav } from "../../../stores/HeaderStore";
    import { PUBLIC_NAME, PUBLIC_LOGO, PUBLIC_PHONE_NUMBER } from "$env/static/public"; 
</script>

<div class="mobilemenu">
    <div class="mobilemenu__backdrop"></div>
    <div class="mobilemenu__body">
        <div class="mobilemenu__header">
            <div class="mobilemenu__title">Menu</div><button type="button" class="mobilemenu__close"><svg
                    width="20px" height="20px">
                    <use xlink:href="/images/sprite.svg#cross-20"></use>
                </svg></button>
        </div>
        <div class="mobilemenu__content">
            <ul class="mobile-links mobile-links--level--0" data-collapse
                data-collapse-opened-class="mobile-links__item--open">
                {#each $header_nav as nav (nav.id)}
                    <li class="mobile-links__item" data-collapse-item>
                        <div class="mobile-links__item-title"><a href="{nav.sub_menu ? 'javascript;:' : nav.url}" class="mobile-links__item-link">{nav.name}</a>
                            {#if nav.sub_menu}
                                <button class="mobile-links__item-toggle" type="button" data-collapse-trigger><svg
                                        class="mobile-links__item-arrow" width="12px" height="7px">
                                        <use xlink:href="/images/sprite.svg#arrow-rounded-down-12x7"></use>
                                    </svg></button>
                            {/if}
                        </div>
                        {#if nav.sub_menu}
                            <div class="mobile-links__item-sub-links" data-collapse-content>
                                <ul class="mobile-links mobile-links--level--1">
                                    {#each nav.sub_menu_list as sub_menu (sub_menu.name)}
                                        <li class="mobile-links__item" data-collapse-item>
                                            <div class="mobile-links__item-title"><a href="{sub_menu.url}"
                                                    class="mobile-links__item-link">{sub_menu.name}</a></div>
                                        </li>
                                    {/each}
                                </ul>
                            </div>
                        {/if}
                    </li>
                {/each}
                <li class="mobile-links__item" data-collapse-item>
                    <div class="mobile-links__item-title"><a href="javascript;:" data-collapse-trigger
                            class="mobile-links__item-link">Currency</a> <button class="mobile-links__item-toggle"
                            type="button" data-collapse-trigger><svg class="mobile-links__item-arrow" width="12px"
                                height="7px">
                                <use xlink:href="/images/sprite.svg#arrow-rounded-down-12x7"></use>
                            </svg></button></div>
                    <div class="mobile-links__item-sub-links" data-collapse-content>
                        <ul class="mobile-links mobile-links--level--1">
                            {#each $header_currencies as currency (currency.country)}
                                <li class="mobile-links__item" data-collapse-item>
                                    <div class="mobile-links__item-title"><a href="javascript;:" class="mobile-links__item-link">{ `${currency.sign} ${currency.name}` }</a></div>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </li>
                <li class="mobile-links__item" data-collapse-item>
                    <div class="mobile-links__item-title"><a href="javascript;:" data-collapse-trigger
                            class="mobile-links__item-link">Language</a> <button class="mobile-links__item-toggle"
                            type="button" data-collapse-trigger><svg class="mobile-links__item-arrow" width="12px"
                                height="7px">
                                <use xlink:href="/images/sprite.svg#arrow-rounded-down-12x7"></use>
                            </svg></button></div>
                    <div class="mobile-links__item-sub-links" data-collapse-content>
                        <ul class="mobile-links mobile-links--level--1">
                            {#each $header_languages as language (language.name)}
                            <li class="mobile-links__item" data-collapse-item>
                                <div class="mobile-links__item-title"><a href="javascript;:"
                                        class="mobile-links__item-link"><img
                                        srcset="{language.icon}"
                                        src="{language.icon_subset}" alt="{language.name}"> {language.name}</a></div>
                            </li>
                            {/each}
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>