( function ( $ ) {
  "use strict";

  let passiveSupported = false;

  try {
    const options = Object.defineProperty( {}, 'passive', {
      // eslint-disable-next-line getter-return
      get: function () {
        passiveSupported = true;
      }
    } );

    window.addEventListener( 'test', null, options );
  } catch ( err ) { /* empty */ }

  let DIRECTION = null;

  function direction () {
    if ( DIRECTION === null ) {
      DIRECTION = getComputedStyle( document.body ).direction;
    }

    return DIRECTION;
  }

  function isRTL () {
    return direction() === 'rtl';
  }

  /*
  // initialize custom numbers
  */
  $( function () {
    $( '.input-number' ).customNumber();
  } );


  /*
  // product tabs
  */
  $( function () {
    $( '.product-tabs' ).each( function ( i, element ) {
      $( '.product-tabs__list', element ).on( 'click', '.product-tabs__item', function ( event ) {
        event.preventDefault();

        const tab = $( this );
        const content = $( '.product-tabs__pane' + $( this ).attr( 'href' ), element );

        if ( content.length ) {
          $( '.product-tabs__item' ).removeClass( 'product-tabs__item--active' );
          tab.addClass( 'product-tabs__item--active' );

          $( '.product-tabs__pane' ).removeClass( 'product-tabs__pane--active' );
          content.addClass( 'product-tabs__pane--active' );
        }
      } );

      const currentTab = $( '.product-tabs__item--active', element );
      const firstTab = $( '.product-tabs__item:first', element );

      if ( currentTab.length ) {
        currentTab.trigger( 'click' );
      } else {
        firstTab.trigger( 'click' );
      }
    } );
  } );


  /*
  // block slideshow
  */

  setTimeout( () => {
    $( function () {
      $( '.block-slideshow .owl-carousel' ).owlCarousel( {
        items: 1,
        nav: false,
        dots: true,
        loop: true,
        rtl: isRTL()
      } );
    } );
  }, 3500 )


  /*
  // block brands carousel
  */
  setTimeout( () => {
    $( function () {
      $( '.block-brands__slider .owl-carousel' ).owlCarousel( {
        nav: false,
        dots: false,
        loop: true,
        rtl: isRTL(),
        responsive: {
          1200: {
            items: 6
          },
          992: {
            items: 5
          },
          768: {
            items: 4
          },
          576: {
            items: 3
          },
          0: {
            items: 2
          }
        }
      } );
    } );
  }, 5000 )


  /*
  // block posts carousel
  */
  setTimeout( () => {
    $( function () {
      $( '.block-posts' ).each( function () {
        const layout = $( this ).data( 'layout' );
        const options = {
          margin: 30,
          nav: false,
          dots: false,
          loop: true,
          rtl: isRTL()
        };
        const layoutOptions = {
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
          'list-sm': {
            responsive: {
              992: {
                items: 2
              },
              0: {
                items: 1
              }
            }
          }
        };
        const owl = $( '.block-posts__slider .owl-carousel' );

        owl.owlCarousel( $.extend( {}, options, layoutOptions[layout] ) );

        $( this ).find( '.block-header__arrow--left' ).on( 'click', function () {
          owl.trigger( 'prev.owl.carousel', [500] );
        } );
        $( this ).find( '.block-header__arrow--right' ).on( 'click', function () {
          owl.trigger( 'next.owl.carousel', [500] );
        } );
      } );
    } );
  }, 2700 )


  /*
  // teammates
  */
  $( function () {
    $( '.teammates .owl-carousel' ).owlCarousel( {
      nav: false,
      dots: true,
      rtl: isRTL(),
      responsive: {
        768: {
          items: 3,
          margin: 32
        },
        380: {
          items: 2,
          margin: 24
        },
        0: {
          items: 1
        }
      }
    } );
  } );


  /*
  // Checkout payment methods
  */
  $( function () {
    $( '[name="checkout_payment_method"]' ).on( 'change', function () {
      const currentItem = $( this ).closest( '.payment-methods__item' );

      $( this ).closest( '.payment-methods__list' ).find( '.payment-methods__item' ).each( function ( i, element ) {
        const links = $( element );
        const linksContent = links.find( '.payment-methods__item-container' );

        if ( element !== currentItem[0] ) {
          const startHeight = linksContent.height();

          linksContent.css( 'height', startHeight + 'px' );
          links.removeClass( 'payment-methods__item--active' );
          linksContent.height(); // force reflow

          linksContent.css( 'height', '' );
        } else {
          const startHeight = linksContent.height();

          links.addClass( 'payment-methods__item--active' );

          const endHeight = linksContent.height();

          linksContent.css( 'height', startHeight + 'px' );
          linksContent.height(); // force reflow
          linksContent.css( 'height', endHeight + 'px' );
        }
      } );
    } );

    $( '.payment-methods__item-container' ).on( 'transitionend', function ( event ) {
      if ( event.originalEvent.propertyName === 'height' ) {
        $( this ).css( 'height', '' );
      }
    } );
  } );


  /*
  // collapse
  */
  $( function () {
    $( '[data-collapse]' ).each( function ( i, element ) {
      const collapse = element;

      $( '[data-collapse-trigger]', collapse ).on( 'click', function () {
        const openedClass = $( this ).closest( '[data-collapse-opened-class]' ).data( 'collapse-opened-class' );
        const item = $( this ).closest( '[data-collapse-item]' );
        const content = item.children( '[data-collapse-content]' );
        const itemParents = item.parents();

        itemParents.slice( 0, itemParents.index( collapse ) + 1 ).filter( '[data-collapse-item]' ).css( 'height', '' );

        if ( item.is( '.' + openedClass ) ) {
          const startHeight = content.height();

          content.css( 'height', startHeight + 'px' );
          item.removeClass( openedClass );

          content.height(); // force reflow
          content.css( 'height', '' );
        } else {
          const startHeight = content.height();

          item.addClass( openedClass );

          const endHeight = content.height();

          content.css( 'height', startHeight + 'px' );
          content.height(); // force reflow
          content.css( 'height', endHeight + 'px' );
        }
      } );

      $( '[data-collapse-content]', collapse ).on( 'transitionend', function ( event ) {
        if ( event.originalEvent.propertyName === 'height' ) {
          $( this ).css( 'height', '' );
        }
      } );
    } );
  } );


  /*
  // price filter
  */
  $( function () {
    $( '.filter-price' ).each( function ( i, element ) {
      const min = $( element ).data( 'min' );
      const max = $( element ).data( 'max' );
      const from = $( element ).data( 'from' );
      const to = $( element ).data( 'to' );
      const slider = element.querySelector( '.filter-price__slider' );

      noUiSlider.create( slider, {
        start: [from, to],
        connect: true,
        direction: isRTL() ? 'rtl' : 'ltr',
        range: {
          'min': min,
          'max': max
        }
      } );

      const titleValues = [
        $( element ).find( '.filter-price__min-value' )[0],
        $( element ).find( '.filter-price__max-value' )[0]
      ];

      slider.noUiSlider.on( 'update', function ( values, handle ) {
        titleValues[handle].innerHTML = values[handle];
      } );
    } );
  } );


  /*
  // mobilemenu
  */
  $( function () {
    const body = $( 'body' );
    const mobilemenu = $( '.mobilemenu' );

    if ( mobilemenu.length ) {
      const open = function () {
        const bodyWidth = body.width();
        body.css( 'overflow', 'hidden' );
        body.css( 'paddingRight', ( body.width() - bodyWidth ) + 'px' );

        mobilemenu.addClass( 'mobilemenu--open' );
      };
      const close = function () {
        body.css( 'overflow', '' );
        body.css( 'paddingRight', '' );

        mobilemenu.removeClass( 'mobilemenu--open' );
      };


      $( '.mobile-header__menu-button' ).on( 'click', function () {
        open();
      } );
      $( '.mobilemenu__backdrop, .mobilemenu__close' ).on( 'click', function () {
        close();
      } );
    }
  } );


  /*
  // tooltips
  */
  $( function () {
    $( '[data-toggle="tooltip"]' ).tooltip( {
      trigger: 'hover'
    } );
  } );


  /*
  // layout switcher
  */
  $( function () {
    $( '.layout-switcher__button' ).on( 'click', function () {
      const layoutSwitcher = $( this ).closest( '.layout-switcher' );
      const productsView = $( this ).closest( '.products-view' );
      const productsList = productsView.find( '.products-list' );

      layoutSwitcher.find( '.layout-switcher__button' ).removeClass( 'layout-switcher__button--active' );
      $( this ).addClass( 'layout-switcher__button--active' );

      productsList.attr( 'data-layout', $( this ).attr( 'data-layout' ) );
      productsList.attr( 'data-with-features', $( this ).attr( 'data-with-features' ) );
    } );
  } );


  /*
  // offcanvas filters
  */
  $( function () {
    const body = $( 'body' );
    const blockSidebar = $( '.block-sidebar' );
    const mobileMedia = matchMedia( '(max-width: 991px)' );

    if ( blockSidebar.length ) {
      const open = function () {
        if ( blockSidebar.is( '.block-sidebar--offcanvas--mobile' ) && !mobileMedia.matches ) {
          return;
        }

        const bodyWidth = body.width();
        body.css( 'overflow', 'hidden' );
        body.css( 'paddingRight', ( body.width() - bodyWidth ) + 'px' );

        blockSidebar.addClass( 'block-sidebar--open' );
      };
      const close = function () {
        body.css( 'overflow', '' );
        body.css( 'paddingRight', '' );

        blockSidebar.removeClass( 'block-sidebar--open' );
      };
      const onChangeMedia = function () {
        if ( blockSidebar.is( '.block-sidebar--open.block-sidebar--offcanvas--mobile' ) && !mobileMedia.matches ) {
          close();
        }
      };

      $( '.filters-button' ).on( 'click', function () {
        open();
      } );
      $( '.block-sidebar__backdrop, .block-sidebar__close' ).on( 'click', function () {
        close();
      } );

      if ( mobileMedia.addEventListener ) {
        mobileMedia.addEventListener( 'change', onChangeMedia );
      } else {
        mobileMedia.addListener( onChangeMedia );
      }
    }
  } );

  /*
  // .block-finder
  */
  $( function () {
    $( '.block-finder__select' ).on( 'change', function () {
      const item = $( this ).closest( '.block-finder__form-item' );

      if ( $( this ).val() !== 'none' ) {
        item.find( '~ .block-finder__form-item:eq(0) .block-finder__select' ).prop( 'disabled', false ).val( 'none' );
        item.find( '~ .block-finder__form-item:gt(0) .block-finder__select' ).prop( 'disabled', true ).val( 'none' );
      } else {
        item.find( '~ .block-finder__form-item .block-finder__select' ).prop( 'disabled', true ).val( 'none' );
      }

      item.find( '~ .block-finder__form-item .block-finder__select' ).trigger( 'change.select2' );
    } );
  } );

  /*
  // select2
  */
  $( function () {
    $( '.form-control-select2, .block-finder__select' ).select2( {
      width: ''
    } );
  } );

  /*
  // totop
  */
  $( function () {
    let show = false;

    $( '.totop__button' ).on( 'click', function () {
      $( 'html, body' ).animate( {
        scrollTop: 0
      }, '300' );
    } );

    let fixedPositionStart = 300;

    window.addEventListener( 'scroll', function () {
      if ( window.pageYOffset >= fixedPositionStart ) {
        if ( !show ) {
          show = true;
          $( '.totop' ).addClass( 'totop--show' );
        }
      } else {
        if ( show ) {
          show = false;
          $( '.totop' ).removeClass( 'totop--show' );
        }
      }
    }, passiveSupported ? {
      passive: true
    } : false );
  } );

  svg4everybody();

} )( jQuery );
