<script>
	import { navigating, page } from '$app/stores';
	import { side_menu } from '$stores/HandEvenStore';

	let cart_is_open = false;
	let cart_list_is_open = false;
	// let side_menu_is_open = true;

	export let data;

	const {
		navigation,
		desktopSideNavigation,
		languages,
		headerCurrency,
		headerAccount,
		topNavigation,
		phoneNumber
	} = data;

	// function
	$page.url.pathname == '/' ? ($side_menu.is_open = true) : ($side_menu.is_open = false);
	$: if ($navigating)
		$page.url.pathname == '/' ? ($side_menu.is_open = true) : ($side_menu.is_open = false);

	const toggle_cart = () => {
		cart_is_open = !cart_is_open;
		setTimeout(() => {
			cart_list_is_open = !cart_list_is_open;
		}, 10);
	};

	const toggle_side_menu = () => {
		$side_menu.is_open = !$side_menu.is_open;
	};
</script>

<!-- desktop site__header -->
<header class="site__header d-lg-block d-none">
	<div class="site-header">
		<!-- .topbar -->
		<div class="site-header__topbar topbar">
			<div class="topbar__container container">
				<div class="topbar__row">
					{#each topNavigation as nav (nav.id)}
						<div class="topbar__item topbar__item--link">
							<a class="topbar-link" href={nav.url}>{nav.name}</a>
						</div>
					{/each}
					<div class="topbar__spring"></div>
					<div class="topbar__item">
						<div class="topbar-dropdown">
							<button class="topbar-dropdown__btn" type="button"
								>My Account <svg width="7px" height="5px">
									<use xlink:href="/images/sprite.svg#arrow-rounded-down-7x5"></use>
								</svg></button
							>
							<div class="topbar-dropdown__body">
								<!-- .menu -->
								<div class="menu menu--layout--topbar">
									<div class="menu__submenus-container"></div>
									<ul class="menu__list">
										{#each headerAccount as account (account.id)}
											<li class="menu__item">
												<!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. -->
												<div class="menu__item-submenu-offset"></div>
												<a class="menu__item-link" href={account.url}>{account.name}</a>
											</li>
										{/each}
										<li class="menu__item">
											<!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. -->
											<div class="menu__item-submenu-offset"></div>
											<a class="menu__item-link" href="javacript;:">Logout</a>
										</li>
									</ul>
								</div>
								<!-- .menu / end -->
							</div>
						</div>
					</div>
					<div class="topbar__item">
						<div class="topbar-dropdown">
							<button class="topbar-dropdown__btn" type="button"
								>Currency: <span class="topbar__item-value">NGN</span>
								<svg width="7px" height="5px">
									<use xlink:href="/images/sprite.svg#arrow-rounded-down-7x5"></use>
								</svg></button
							>
							<div class="topbar-dropdown__body">
								<!-- .menu -->
								<div class="menu menu--layout--topbar">
									<div class="menu__submenus-container"></div>
									<ul class="menu__list">
										{#each headerCurrency as currency (currency.country)}
											<li class="menu__item">
												<!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. -->
												<div class="menu__item-submenu-offset"></div>
												<a class="menu__item-link" href="javascript;:"
													>{`${currency.sign} ${currency.name}`}</a
												>
											</li>
										{/each}
									</ul>
								</div>
								<!-- .menu / end -->
							</div>
						</div>
					</div>
					<div class="topbar__item">
						<div class="topbar-dropdown">
							<button class="topbar-dropdown__btn" type="button"
								>Language: <span class="topbar__item-value">EN</span>
								<svg width="7px" height="5px">
									<use xlink:href="/images/sprite.svg#arrow-rounded-down-7x5"></use>
								</svg></button
							>
							<div class="topbar-dropdown__body">
								<!-- .menu -->
								<div class="menu menu--layout--topbar menu--with-icons">
									<div class="menu__submenus-container"></div>
									<ul class="menu__list">
										{#each languages as language (language.name)}
											<li class="menu__item">
												<!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. -->

												<div class="menu__item-submenu-offset"></div>
												<a class="menu__item-link" href="javascript;:">
													<div class="menu__item-icon">
														<img
															srcset={language.icon}
															src={language.icon_subset}
															alt={language.name}
														/>
													</div>
													{language.name}
												</a>
											</li>
										{/each}
									</ul>
								</div>
								<!-- .menu / end -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- .topbar / end -->
		<div class="site-header__middle container">
			<div class="site-header__logo">
				<a href="index.html"
					><svg xmlns="http://www.w3.org/2000/svg" width="196px" height="26px">
						<path
							d="M194.797,18 L184,18 C184,18.552 183.552,19 183,19 L182,19 C181.448,19 181,18.552 181,18 L181,16 L178.377,16 C177.708,16 177.119,15.556 176.935,14.912 L173.246,2 L168,2 L168,4 L168.500,4 C169.328,4 170,4.672 170,5.500 L170,24.500 C170,25.328 169.328,26 168.500,26 L165.500,26 C164.672,26 164,25.328 164,24.500 L164,5.500 C164,4.672 164.672,4 165.500,4 L166,4 L166,1.500 C166,0.672 166.672,0 167.500,0 L173.622,0 C174.292,0 174.881,0.444 175.065,1.088 L178.754,14 L181,14 L181,13 C181,12.448 181.448,12 182,12 L183,12 C183.552,12 184,12.448 184,13 L194.797,13 C195.461,13 196,13.539 196,14.203 L196,16.797 C196,17.461 195.461,18 194.797,18 ZM156.783,26 L154.483,26 C153.767,26 153.129,25.552 152.884,24.878 L150.437,18.135 C150.407,18.054 150.331,18 150.245,18 L142.768,18 C142.682,18 142.606,18.054 142.576,18.135 L140.129,24.878 C139.884,25.552 139.245,26 138.530,26 L136.230,26 C135.395,26 134.815,25.169 135.100,24.383 L143.445,1.122 C143.690,0.448 144.328,0 145.044,0 L147.969,0 C148.685,0 149.323,0.448 149.568,1.122 L157.913,24.383 C158.198,25.169 157.618,26 156.783,26 ZM148.472,12.725 L146.698,7.848 C146.633,7.668 146.380,7.668 146.315,7.848 L144.541,12.725 C144.492,12.859 144.591,13 144.733,13 L148.280,13 C148.422,13 148.521,12.859 148.472,12.725 ZM130.493,26 L128.090,26 C127.555,26 127.060,25.714 126.792,25.250 L122.610,18 L120.003,22.520 L120.003,24.500 C120.003,25.328 119.333,26 118.505,26 L116.507,26 C115.680,26 115.009,25.328 115.009,24.500 L115.009,1.500 C115.009,0.672 115.680,0 116.507,0 L118.505,0 C119.333,0 120.003,0.672 120.003,1.500 L120.003,12.520 L126.792,0.750 C127.060,0.286 127.555,0 128.090,0 L130.493,0 C131.646,0 132.367,1.250 131.791,2.250 L125.487,13 L131.791,23.750 C132.367,24.750 131.646,26 130.493,26 ZM103.987,15.775 L103.987,24.500 C103.987,25.328 103.315,26 102.486,26 L100.485,26 C99.656,26 98.984,25.328 98.984,24.500 L98.984,15.775 L98.594,15.100 L91.180,2.250 C90.610,1.250 91.330,0 92.481,0 L94.792,0 C95.322,0 95.823,0.290 96.093,0.750 L101.486,10.090 L106.879,0.750 C107.149,0.290 107.649,0 108.179,0 L110.491,0 C111.641,0 112.362,1.250 111.791,2.250 L103.987,15.775 ZM79,26 C71.821,26 66,20.179 66,13 C66,5.820 71.821,-0.001 79,-0.001 C86.180,-0.001 92.001,5.820 92.001,13 C92.001,20.179 86.180,26 79,26 ZM79,5 C74.582,5 71,8.582 71,13 C71,17.418 74.582,21 79,21 C83.418,21 87,17.418 87,13 C87,8.582 83.418,5 79,5 ZM62.793,23.750 C63.362,24.750 62.643,26 61.494,26 L59.186,26 C58.656,26 58.157,25.710 57.887,25.250 L53.711,18 L49.005,18 L49.005,24.500 C49.005,25.330 48.335,26 47.506,26 L45.508,26 C44.679,26 44.009,25.330 44.009,24.500 L44.009,1.500 C44.009,0.670 44.679,0 45.508,0 L54,0 C58.966,0 62.992,4.030 62.992,9 C62.992,12.240 61.274,15.090 58.706,16.670 L62.793,23.750 ZM54,5 L50.004,5 C49.454,5 49.005,5.450 49.005,6 L49.005,12 C49.005,12.550 49.454,13 50.004,13 L54,13 C56.208,13 57.997,11.210 57.997,9 C57.997,6.790 56.208,5 54,5 ZM39.500,5 L33,5 L33,24.500 C33,25.328 32.328,26 31.500,26 L29.500,26 C28.672,26 28,25.328 28,24.500 L28,5 L21.500,5 C20.672,5 20,4.328 20,3.500 L20,1.500 C20,0.672 20.672,0 21.500,0 L39.500,0 C40.328,0 41,0.672 41,1.500 L41,3.500 C41,4.328 40.328,5 39.500,5 ZM16.487,8 L14.181,8 C13.565,8 13.040,7.611 12.790,7.048 C12.261,5.856 10.765,5 9,5 C6.793,5 5.005,6.340 5.005,8 C5.005,8.940 5.575,9.780 6.483,10.320 C6.706,10.455 6.948,10.574 7.206,10.673 C8.059,11 8.412,12.020 7.955,12.812 L6.948,14.558 C6.573,15.208 5.768,15.499 5.080,15.201 C3.872,14.679 2.815,13.924 1.989,13 C0.751,11.630 0.012,9.890 0.012,8 C0.012,3.580 4.037,0 9,0 C13.254,0 17.017,2.629 17.950,6.163 C18.196,7.095 17.450,8 16.487,8 ZM1.513,18 L3.820,18 C4.435,18 4.960,18.389 5.210,18.952 C5.739,20.144 7.236,21 9,21 C11.207,21 12.995,19.660 12.995,18 C12.995,17.060 12.426,16.220 11.517,15.680 C11.294,15.544 11.052,15.426 10.794,15.327 C9.941,14.999 9.588,13.980 10.045,13.188 L11.053,11.442 C11.427,10.792 12.233,10.501 12.920,10.799 C14.128,11.320 15.185,12.075 16.011,13 C17.249,14.370 17.988,16.110 17.988,18 C17.988,22.420 13.964,26 9,26 C4.747,26 0.983,23.371 0.050,19.837 C-0.196,18.905 0.550,18 1.513,18 Z"
						>
						</path>
					</svg></a
				>
			</div>
			<div class="site-header__search">
				<div class="search search--location--header">
					<div class="search__body">
						<form class="search__form" action="">
							<input
								class="search__input"
								name="search"
								placeholder="Search over 10,000 products"
								aria-label="Site search"
								type="text"
								autocomplete="off"
							/>
							<button class="search__button search__button--type--submit" type="submit"
								><svg width="20px" height="20px">
									<use xlink:href="/images/sprite.svg#search-20"></use>
								</svg></button
							>
							<div class="search__border"></div>
						</form>
						<div class="search__suggestions suggestions suggestions--location--header"></div>
					</div>
				</div>
			</div>
			<div class="site-header__phone">
				<div class="site-header__phone-title">Customer Service</div>
				<div class="site-header__phone-number">{phoneNumber}</div>
			</div>
		</div>
		<div class="site-header__nav-panel">
			<!-- data-sticky-mode - one of [pullToShow, alwaysOnTop] -->
			<div class="nav-panel nav-panel--sticky" data-sticky-mode="pullToShow">
				<div class="nav-panel__container container">
					<div class="nav-panel__row">
						<div class="nav-panel__departments">
							<!-- .departments -->
							<div
								class="departments departments--open"
								data-departments-fixed-by=".block-slideshow"
							>
								<div class="departments__body">
									<div
										class="departments__links-wrapper"
										style="
                                            height: 415px;
                                            max-height: {$side_menu.is_open ? '415px' : '0'};
                                            transition: max-height 500ms ease;
                                        "
									>
										<div
											style="
                                                overflow: hidden;
                                            "
										>
											<div class="departments__submenus-container"></div>
											<ul class="departments__links">
												{#each desktopSideNavigation as side_nav (side_nav.id)}
													<li class="departments__item">
														<a class="departments__item-link" href={side_nav.url}
															>{side_nav.name}
															{#if side_nav.sub_menu}
																<svg class="departments__item-arrow" width="6px" height="9px">
																	<use xlink:href="/images/sprite.svg#arrow-rounded-right-6x9">
																	</use>
																</svg>
															{/if}
														</a>
														{#if side_nav.sub_menu && side_nav.is_grid}
															<div
																class="departments__submenu departments__submenu--type--megamenu departments__submenu--size--xl"
															>
																<!-- .megamenu -->
																<div class="megamenu megamenu--departments">
																	<div
																		class="megamenu__body"
																		style="background-image: url('images/megamenu/megamenu-1.jpg');"
																	>
																		<div class="row">
																			{#each side_nav.sub_menu_list as sub_menu (sub_menu.id)}
																				{#if sub_menu.layout == 1}
																					<div class="col-3">
																						<ul class="megamenu__links megamenu__links--level--0">
																							{#if sub_menu.inner_sub}
																								<li
																									class="megamenu__item megamenu__item--with-submenu"
																								>
																									<a href={sub_menu.url}>{sub_menu.name}</a>
																									<ul
																										class="megamenu__links megamenu__links--level--1"
																									>
																										{#each sub_menu.drop_menu as drop_menu (drop_menu.name)}
																											<li class="megamenu__item">
																												<a href={drop_menu.url}>{drop_menu.name}</a>
																											</li>
																										{/each}
																									</ul>
																								</li>
																							{:else}
																								<li class="megamenu__item">
																									<a href={sub_menu.url}>{sub_menu.name}</a>
																								</li>
																							{/if}
																						</ul>
																					</div>
																				{:else if sub_menu.layout == 2}
																					<div class="col-3">
																						<ul class="megamenu__links megamenu__links--level--0">
																							<li
																								class="megamenu__item megamenu__item--with-submenu"
																							>
																								<a href={sub_menu.url}>{sub_menu.name}</a>
																								<ul
																									class="megamenu__links megamenu__links--level--1"
																								>
																									{#each sub_menu.drop_menu as drop_menu (drop_menu.name)}
																										<li class="megamenu__item">
																											<a href={drop_menu.url}>{drop_menu.name}</a>
																										</li>
																									{/each}
																								</ul>
																							</li>
																						</ul>
																					</div>
																				{/if}
																			{/each}
																		</div>
																	</div>
																</div>
																<!-- .megamenu / end -->
															</div>
														{:else if side_nav.sub_menu && !side_nav.is_grid}
															<div class="departments__submenu departments__submenu--type--menu">
																<!-- .menu -->
																<div class="menu menu--layout--classic">
																	<div class="menu__submenus-container"></div>
																	<ul class="menu__list">
																		{#each side_nav.sub_menu_list as sub_menu (sub_menu.id)}
																			<li class="menu__item">
																				<!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. -->
																				<div class="menu__item-submenu-offset"></div>
																				<a class="menu__item-link" href={sub_menu.url}
																					>{sub_menu.name}
																					{#if sub_menu.inner_sub}
																						<svg class="menu__item-arrow" width="6px" height="9px">
																							<use
																								xlink:href="/images/sprite.svg#arrow-rounded-right-6x9"
																							>
																							</use>
																						</svg>
																					{/if}
																				</a>
																				{#if sub_menu.inner_sub}
																					<div class="menu__submenu">
																						<!-- .menu -->
																						<div class="menu menu--layout--classic">
																							<div class="menu__submenus-container"></div>
																							<ul class="menu__list">
																								{#each sub_menu.drop_menu as drop_menu (drop_menu.name)}
																									<li class="menu__item">
																										<!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. -->
																										<div class="menu__item-submenu-offset"></div>
																										<a class="menu__item-link" href={drop_menu.url}
																											>{drop_menu.name}</a
																										>
																									</li>
																								{/each}
																							</ul>
																						</div>
																						<!-- .menu / end -->
																					</div>
																				{/if}
																			</li>
																		{/each}
																	</ul>
																</div>
																<!-- .menu / end -->
															</div>
														{/if}
													</li>
												{/each}
											</ul>
										</div>
									</div>
								</div>
								<button class="departments__button" on:click={toggle_side_menu}
									><svg class="departments__button-icon" width="18px" height="14px">
										<use xlink:href="/images/sprite.svg#menu-18x14"></use>
									</svg>
									Shop By Category
									<svg
										class="departments__button-arrow"
										style="
                                            transform: rotate({$side_menu.is_open
											? '0deg'
											: '180deg'});
                                            transition: transform 500ms;
                                        "
										width="9px"
										height="6px"
									>
										<use xlink:href="/images/sprite.svg#arrow-rounded-down-9x6"></use>
									</svg></button
								>
							</div>
							<!-- .departments / end -->
						</div>
						<!-- .nav-links -->
						<div class="nav-panel__nav-links nav-links">
							<ul class="nav-links__list">
								{#each navigation as nav (nav.id)}
									{#if nav.layout == 1}
										<li class="nav-links__item nav-links__item--has-submenu">
											<a class="nav-links__item-link" href={nav.url}>
												<div class="nav-links__item-body">
													{nav.name}
													{#if nav.sub_menu}
														<svg class="nav-links__item-arrow" width="9px" height="6px">
															<use xlink:href="/images/sprite.svg#arrow-rounded-down-9x6"> </use>
														</svg>
													{/if}
												</div>
											</a>
											{#if nav.sub_menu}
												<div class="nav-links__submenu nav-links__submenu--type--menu">
													<!-- .menu -->
													<div class="menu menu--layout--classic">
														<div class="menu__submenus-container"></div>
														<ul class="menu__list">
															{#each nav.sub_menu_list as sub_menu (sub_menu.name)}
																<li class="menu__item">
																	<!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. -->
																	<div class="menu__item-submenu-offset"></div>
																	<a class="menu__item-link" href={sub_menu.url}>{sub_menu.name}</a>
																</li>
															{/each}
														</ul>
													</div>
													<!-- .menu / end -->
												</div>
											{/if}
										</li>
									{/if}
								{/each}
							</ul>
						</div>
						<!-- .nav-links / end -->
						<div class="nav-panel__indicators">
							<div class="indicator">
								<a href="/wishlist" class="indicator__button"
									><span class="indicator__area"
										><svg width="20px" height="20px">
											<use xlink:href="/images/sprite.svg#heart-20"></use>
										</svg> <span class="indicator__value">0</span></span
									></a
								>
							</div>
							<div class="indicator">
								<button on:click={toggle_cart} class="indicator__button"
									><span class="indicator__area"
										><svg width="20px" height="20px">
											<use xlink:href="/images/sprite.svg#cart-20"></use>
										</svg> <span class="indicator__value">3</span></span
									></button
								>
								{#if cart_is_open}
									<!-- svelte-ignore a11y-no-static-element-interactions -->
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<div
										on:click|self={toggle_cart}
										style="
                                                display: flex;
                                                justify-content: right;
                                                position: fixed;
                                                width: 100vw;
                                                height: 100vh;
                                                background: #00000085;
                                                top:0;
                                                left: 0;
                                                transform: scale({cart_is_open ? 1 : 0});
                                                z-index: 99999;
                                            "
									>
										<div
											style="
                                                    display:flex;
                                                    width: 350px;
                                                    height: 100%;
                                                    background: white;
                                                    position: relative;
                                                    flex-direction: column;
                                                    transform: translateX({cart_list_is_open
												? '0px'
												: '500px'});
                                                    transition: transform 500ms linear;
                                                "
										>
											<div style="width: 100%;">
												<div>
													<h3
														class="block-header__title"
														style="
                                                                display: flex;
                                                                color:black;
                                                                justify-content: space-between;
                                                                padding: 10px 15px;
                                                                padding-bottom: 0px;
                                                        "
													>
														Shopping Cart
														<button
															type="button"
															on:click={toggle_cart}
															class="dropcart__product-remove btn btn-light btn-sm btn-svg-icon"
															><svg width="20px" height="20px">
																<use xlink:href="/images/sprite.svg#cross-20"></use>
															</svg></button
														>
													</h3>
													<hr />
												</div>
											</div>
											<div class="cart__product-item" style=" padding: 15px; overflow: auto;">
												<div class="dropcart__product">
													<div class="dropcart__product-image">
														<a href="product.html"
															><img src="/images/products/product-1.jpg" alt="" /></a
														>
													</div>
													<div class="dropcart__product-info">
														<div class="dropcart__product-name" style="color: black">
															<a href="product.html">Electric Planer Brandix KL370090G 300 Watts</a>
														</div>
														<ul class="dropcart__product-options">
															<li>Color: Yellow</li>
															<li>Material: Aluminium</li>
														</ul>
														<div class="dropcart__product-meta" style="color: black">
															<span class="dropcart__product-quantity">2</span> ×
															<span class="dropcart__product-price">$699.00</span>
														</div>
													</div>
													<button
														type="button"
														class="dropcart__product-remove btn btn-light btn-sm btn-svg-icon"
														><svg width="10px" height="10px">
															<use xlink:href="/images/sprite.svg#cross-10"></use>
														</svg></button
													>
												</div>
												<div class="dropcart__product">
													<div class="dropcart__product-image">
														<a href="product.html"
															><img src="/images/products/product-1.jpg" alt="" /></a
														>
													</div>
													<div class="dropcart__product-info">
														<div class="dropcart__product-name" style="color: black">
															<a href="product.html">Electric Planer Brandix KL370090G 300 Watts</a>
														</div>
														<ul class="dropcart__product-options">
															<li>Color: Yellow</li>
															<li>Material: Aluminium</li>
														</ul>
														<div class="dropcart__product-meta" style="color: black">
															<span class="dropcart__product-quantity">2</span> ×
															<span class="dropcart__product-price">$699.00</span>
														</div>
													</div>
													<button
														type="button"
														class="dropcart__product-remove btn btn-light btn-sm btn-svg-icon"
														><svg width="10px" height="10px">
															<use xlink:href="/images/sprite.svg#cross-10"></use>
														</svg></button
													>
												</div>
											</div>
											<div style="color: black; margin-top: auto;">
												<div class="dropcart__totals">
													<table>
														<tr>
															<th>Subtotal</th>
															<td>$5,877.00</td>
														</tr>
														<tr>
															<th>Shipping</th>
															<td>$25.00</td>
														</tr>
														<tr>
															<th>Tax</th>
															<td>$0.00</td>
														</tr>
														<tr>
															<th>Total</th>
															<td>$5,902.00</td>
														</tr>
													</table>
												</div>
												<div class="dropcart__buttons">
													<a class="btn btn-secondary" href="/cart">View Cart</a>
													<a class="btn btn-primary" href="/cart">Checkout</a>
												</div>
											</div>
										</div>
									</div>
								{/if}
							</div>
							{#if false}
								<div class="indicator indicator--trigger--click">
									<a href="account-login.html" class="indicator__button"
										><span class="indicator__area"
											><svg width="20px" height="20px">
												<use xlink:href="/images/sprite.svg#person-20"></use>
											</svg></span
										></a
									>
									<div class="indicator__dropdown">
										<div class="account-menu">
											<form class="account-menu__form">
												<div class="account-menu__form-title">Log In to Your Account</div>
												<div class="form-group">
													<label for="header-signin-email" class="sr-only">Email address</label>
													<input
														id="header-signin-email"
														type="email"
														class="form-control form-control-sm"
														placeholder="Email address"
													/>
												</div>
												<div class="form-group">
													<label for="header-signin-password" class="sr-only">Password</label>
													<div class="account-menu__form-forgot">
														<input
															id="header-signin-password"
															type="password"
															class="form-control form-control-sm"
															placeholder="Password"
														/>
														<a href="javascript;:" class="account-menu__form-forgot-link">Forgot?</a
														>
													</div>
												</div>
												<div class="form-group account-menu__form-button">
													<button type="submit" class="btn btn-primary btn-sm">Login</button>
												</div>
												<div class="account-menu__form-link">
													<a href="account-login.html">Create An Account</a>
												</div>
											</form>
											<div class="account-menu__divider"></div>
											<a href="account-dashboard.html" class="account-menu__user">
												<div class="account-menu__user-avatar">
													<img src="/images/avatars/avatar-3.jpg" alt="" />
												</div>
												<div class="account-menu__user-info">
													<div class="account-menu__user-name">Helena Garcia</div>
													<div class="account-menu__user-email">stroyka@example.com</div>
												</div>
											</a>
											<div class="account-menu__divider"></div>
											<ul class="account-menu__links">
												<li><a href="account-profile.html">Edit Profile</a></li>
												<li><a href="account-orders.html">Order History</a></li>
												<li><a href="account-addresses.html">Addresses</a></li>
												<li><a href="account-password.html">Password</a></li>
											</ul>
											<div class="account-menu__divider"></div>
											<ul class="account-menu__links">
												<li><a href="account-login.html">Logout</a></li>
											</ul>
										</div>
									</div>
								</div>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
<!-- desktop site__header / end -->
