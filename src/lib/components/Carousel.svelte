<script>
  import { quickview } from "$lib/helpers";
	import { onMount, SvelteComponent } from 'svelte';
  import NewsArticle from '$lib/components/NewsArticle.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import DoubledProductCard from '$lib/components/DoubledProductCard.svelte';

	export let sectionName = '', layout="grid-4", mobileGridColumns = undefined, component = 'ProductCard', carouselClass = 'block-products-carousel';

  /** @type {import('$lib/types').Product[] | import('$lib/types').NewsArticle[]} */
	export let items = [];

  /** @type {import('$lib/types').ProductFilter[]} */
	export let filters = [];

  /** @type HTMLElement */
	let carousel;

  /** @type Object.<string, SvelteComponent> */
  let components = {
    NewsArticle,
    ProductCard,
    DoubledProductCard
  }

	onMount(() => {
		setTimeout(() => {
			let elem = jQuery(carousel);
			const layout = elem.data('layout');
			const options = {
				items: 4,
				margin: 14,
				nav: false,
				dots: false,
				loop: true,
				stagePadding: 1,
				rtl: false
			};
			const layoutOptions = {
				list: {
					responsive: {
						1200: {
							items: 2,
							margin: 14
						},
						992: {
							items: 2,
							margin: 10
						},
						768: {
							items: 1,
							margin: 10
						},
						576: {
							items: 1,
							margin: 10
						},
						475: {
							items: 1,
							margin: 10
						},
						0: {
							items: 1
						}
					}
				},
        'list-sm': {
          responsive: {
            992: {
              items: 2
            },
            0: {
              items: 1
            }
          }
        },
        'grid-nl': {
          responsive: {
            992: {
              items: 3
            },
            768: {
              items: 2
            },
            0: {
              items: 1
            }
          }
        },
				'grid-4': {
					responsive: {
						1200: {
							items: 4,
							margin: 14
						},
						992: {
							items: 4,
							margin: 10
						},
						768: {
							items: 3,
							margin: 10
						},
						576: {
							items: 2,
							margin: 10
						},
						475: {
							items: 2,
							margin: 10
						},
						0: {
							items: 1
						}
					}
				},
				'grid-4-sm': {
					responsive: {
						1200: {
							items: 4,
							margin: 14
						},
						992: {
							items: 3,
							margin: 10
						},
						768: {
							items: 3,
							margin: 10
						},
						576: {
							items: 2,
							margin: 10
						},
						475: {
							items: 2,
							margin: 10
						},
						0: {
							items: 1
						}
					}
				},
				'grid-5': {
					responsive: {
						1200: {
							items: 5,
							margin: 12
						},
						992: {
							items: 4,
							margin: 10
						},
						768: {
							items: 3,
							margin: 10
						},
						576: {
							items: 2,
							margin: 10
						},
						475: {
							items: 2,
							margin: 10
						},
						0: {
							items: 1
						}
					}
				},
				horizontal: {
					items: 3,
					responsive: {
						1200: {
							items: 3,
							margin: 14
						},
						992: {
							items: 3,
							margin: 10
						},
						768: {
							items: 2,
							margin: 10
						},
						576: {
							items: 1
						},
						475: {
							items: 1
						},
						0: {
							items: 1
						}
					}
				}
			};
			const owl = jQuery('.owl-carousel', carousel);

			let cancelPreviousTabChange = function () {};

			owl.owlCarousel(jQuery.extend({}, options, layoutOptions[layout]));

			elem
				.find('.block-header__group') // find the filter buttons
				.on('click', function (event) {
          const filterBtn = jQuery( this );
					const block = filterBtn.closest('.block-products-carousel');
          const key = filterBtn.data('key');

          console.log({filterBtn, key});

					event.preventDefault();

					if (filterBtn.is('.block-header__group--active')) {
						//no need to filter of button clicked is active filter
						return;
					}

					cancelPreviousTabChange(); //in case I clicked another filter while the request for previous filter is ongoing

					block.addClass('block-products-carousel--loading');

					filterBtn
						.closest('.block-header__groups-list') //change the active class
						.find('.block-header__group--active')
						.removeClass('block-header__group--active');
					filterBtn.addClass('block-header__group--active');

          /*** this is ONLY_FOR_DEMO! / start */
          //Instead of this code block, make a request to filter the data using the data-key, destroy the carousel and then re-initialise it
					let items = block.find(
						'.owl-carousel .owl-item:not(".cloned") .block-products-carousel__column'
					);

					/**/
					const itemsArray = items.get();
					/**/
					const newItemsArray = [];
					/**/
					/**/
					while (itemsArray.length > 0) {
						/**/
						const randomIndex = Math.floor(Math.random() * itemsArray.length);
						/**/
						const randomItem = itemsArray.splice(randomIndex, 1)[0];
						/**/
						/**/
						newItemsArray.push(randomItem);
						/**/
					}
					/**/
					items = jQuery(newItemsArray);
					/*** this is ONLY_FOR_DEMO! / end */


					block // either destroy and reinitialise the carousel or try to replace it like this
						.find('.owl-carousel')
						.trigger('replace.owl.carousel', [items])
						.trigger('refresh.owl.carousel')
						.trigger('to.owl.carousel', [0, 0]);

					jQuery('.product-card__quickview', block).on('click', function () {
						quickview.clickHandler.apply(carousel, arguments);
					});

					setTimeout(() => { // just a sample to simulate request delay. This should ideally be called after modifying and reinitialising the carousel
            block.removeClass('block-products-carousel--loading');
          }, 1000);

					cancelPreviousTabChange = function () {
						// abort any ongoing request
					};
				});

			elem.find('.block-header__arrow--left').on('click', function () {
				owl.trigger('prev.owl.carousel', [500]);
			});
			elem.find('.block-header__arrow--right').on('click', function () {
				owl.trigger('next.owl.carousel', [500]);
			});
		}, 1500);
	});
</script>

<div class="block {carouselClass}" data-layout="{layout}"  data-mobile-grid-columns={mobileGridColumns} bind:this={carousel}>
	<div class="container">
		<div class="block-header">
			<h3 class="block-header__title">{sectionName}</h3>

			<div class="block-header__divider"></div>

      {#if filters.length}
        <ul class="block-header__groups-list">
          <li><button type="button" class="block-header__group block-header__group--active" data-key="">All</button></li>
          {#each filters as filter (filter.key)}
            <li><button type="button" class="block-header__group" data-key={filter.key}>{filter.value}</button></li>
          {/each}
        </ul>
      {/if}

			<div class="block-header__arrows-list">
				<button class="block-header__arrow block-header__arrow--left" type="button">
					<svg width="7px" height="11px"><use xlink:href="/img/sprite.svg#arrow-rounded-left-7x11"></use></svg>
				</button>

				<button class="block-header__arrow block-header__arrow--right" type="button">
					<svg width="7px" height="11px"><use xlink:href="/img/sprite.svg#arrow-rounded-right-7x11"></use></svg>
				</button>
			</div>
		</div>

		<div class="block-products-carousel__slider">
			<div class="block-products-carousel__preloader"></div>
			<div class="owl-carousel">
				{#each items as item}
          <svelte:component this={components[component]} {item}/>
				{/each}
			</div>
		</div>
	</div>
</div>
