/*
// product gallery
*/
export const initProductGallery = function ( element, layout ) {
  layout = layout !== undefined ? layout : 'standard';

  const options = {
    dots: false,
    margin: 10,
    rtl: isRTL()
  };
  const layoutOptions = {
    standard: {
      responsive: {
        1200: {
          items: 5
        },
        992: {
          items: 4
        },
        768: {
          items: 3
        },
        480: {
          items: 5
        },
        380: {
          items: 4
        },
        0: {
          items: 3
        }
      }
    },
    sidebar: {
      responsive: {
        768: {
          items: 4
        },
        480: {
          items: 5
        },
        380: {
          items: 4
        },
        0: {
          items: 3
        }
      }
    },
    columnar: {
      responsive: {
        768: {
          items: 4
        },
        480: {
          items: 5
        },
        380: {
          items: 4
        },
        0: {
          items: 3
        }
      }
    },
    quickview: {
      responsive: {
        1200: {
          items: 5
        },
        768: {
          items: 4
        },
        480: {
          items: 5
        },
        380: {
          items: 4
        },
        0: {
          items: 3
        }
      }
    }
  };

  const gallery = $( element );

  const image = gallery.find( '.product-gallery__featured .owl-carousel' );
  const carousel = gallery.find( '.product-gallery__carousel .owl-carousel' );

  setTimeout( () => {
    image
      .owlCarousel( {
        items: 1,
        dots: false,
        rtl: isRTL()
      } )
      .on( 'changed.owl.carousel', syncPosition );
  }, 1500 )

  setTimeout( () => {
    carousel
      .on( 'initialized.owl.carousel', function () {
        carousel.find( '.product-gallery__carousel-item' ).eq( 0 ).addClass( 'product-gallery__carousel-item--active' );
      } )
      .owlCarousel( $.extend( {}, options, layoutOptions[layout] ) );
  }, 1500 )

  carousel.on( 'click', '.owl-item', function ( e ) {
    e.preventDefault();

    image.data( 'owl.carousel' ).to( $( this ).index(), 300, true );
  } );

  gallery.find( '.product-gallery__zoom' ).on( 'click', function () {
    openPhotoSwipe( image.find( '.owl-item.active' ).index() );
  } );

  image.on( 'click', '.owl-item > a', function ( event ) {
    event.preventDefault();

    openPhotoSwipe( $( this ).closest( '.owl-item' ).index() );
  } );

  function getIndexDependOnDir ( index ) {
    // we need to invert index id direction === 'rtl' because photoswipe do not support rtl
    if ( isRTL() ) {
      return image.find( '.owl-item img' ).length - 1 - index;
    }

    return index;
  }

  function openPhotoSwipe ( index ) {
    const photoSwipeImages = image.find( '.owl-item > a' ).toArray().map( function ( element ) {
      return {
        src: element.href,
        msrc: element.href,
        w: 700,
        h: 700
      };
    } );

    if ( isRTL() ) {
      photoSwipeImages.reverse();
    }

    const photoSwipeOptions = {
      getThumbBoundsFn: function ( index ) {
        const imageElements = image.find( '.owl-item img' ).toArray();
        const dirDependentIndex = getIndexDependOnDir( index );

        if ( !imageElements[dirDependentIndex] ) {
          return null;
        }

        const imageElement = imageElements[dirDependentIndex];
        const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
        const rect = imageElement.getBoundingClientRect();

        return {
          x: rect.left,
          y: rect.top + pageYScroll,
          w: rect.width
        };
      },
      index: getIndexDependOnDir( index ),
      bgOpacity: .9,
      history: false
    };

    const photoSwipeGallery = new PhotoSwipe( $( '.pswp' )[0], PhotoSwipeUI_Default, photoSwipeImages, photoSwipeOptions );

    photoSwipeGallery.listen( 'beforeChange', function () {
      image.data( 'owl.carousel' ).to( getIndexDependOnDir( photoSwipeGallery.getCurrentIndex() ), 0, true );
    } );

    photoSwipeGallery.init();
  }

  function syncPosition ( el ) {
    let current = el.item.index;

    carousel
      .find( '.product-gallery__carousel-item' )
      .removeClass( 'product-gallery__carousel-item--active' )
      .eq( current )
      .addClass( 'product-gallery__carousel-item--active' );
    const onscreen = carousel.find( '.owl-item.active' ).length - 1;
    const start = carousel.find( '.owl-item.active' ).first().index();
    const end = carousel.find( '.owl-item.active' ).last().index();

    if ( current > end ) {
      carousel.data( 'owl.carousel' ).to( current, 100, true );
    }
    if ( current < start ) {
      carousel.data( 'owl.carousel' ).to( current - onscreen, 100, true );
    }
  }
};

export const quickview = {
  cancelPreviousModal: function () {},
  clickHandler: function () {
    const modal = jQuery(quickModal);
    const button = jQuery(this);
    const doubleClick = button.is('.product-card__quickview--preload');

    quickview.cancelPreviousModal(); // If there was a previous request going, abort it.

    if (doubleClick) {
      return;
    }

    button.addClass('product-card__quickview--preload');

    let xhr = jQuery.ajax({ // send a request for the product details
      url: 'quickview.html', // change to the needed url
      success: function (data) { //data shoould be json

        quickview.cancelPreviousModal = function () {};

        button.removeClass('product-card__quickview--preload');

        modal.find('.modal-content').html(data); // change this to set the product returned to the variable declared

        modal.find('.quickview__close').on('click', function () {
          modal.modal('hide');
        });

        modal.modal('show'); // show the modal
      }
    });

    quickview.cancelPreviousModal = function () { //Define a method to abort prev request case I click another product while the request for the previous is still on going.
      button.removeClass('product-card__quickview--preload');

      if (xhr) {
        // abort the prev request if any
        xhr.abort();
      }
    };
  }
};
