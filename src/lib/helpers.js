/**
 *
 * @param {HTMLElement} element
 * @param {string} layout
 */
export const initProductGallery = function ( element, layout ) {
  layout = layout !== undefined ? layout : 'standard';

  /** @type Object */
  const options = {
    dots: false,
    margin: 10,
    rtl: isRTL()
  };

  /** @type Object<string, Object> */
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

  /**
   *
   * @param {number} index
   * @returns {number}
   */
  function getIndexDependOnDir ( index ) {
    // we need to invert index id direction === 'rtl' because photoswipe do not support rtl
    if ( isRTL() ) {
      return image.find( '.owl-item img' ).length - 1 - index;
    }

    return index;
  }

  /**
   *
   * @param {Number} index
   */
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

  /**
   *
   * @param {any} el
   */
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

/** @type Record<string, string> */
export const imgUrls = import.meta.glob( '$lib/images/**/*.{jpg,jpeg,png,gif,svg}', { eager: true, query: { url: true }, import: 'default' } );
/** @type Record<string, CallableFunction> */
export const imgObjs = import.meta.glob( '$lib/images/**/*.{jpg,jpeg,png,gif,svg}', { query: { enhanced: true } } );

export const getImgUrl = (key) => imgUrls[key]
export const  getImgObj = (key) => imgObjs[key]()

/**
 * Transforms an error object into HTML string
 *
 * @param {String|Array|null} errors The errors to transform
 * @returns {String}
 */
export const getErrorString = errors => {

  if ( _.isString(errors) ) {
    var errs = errors;
  } else if ( _.size(errors) == 1 ) {
    var errs = _.reduce(errors, function ( val, n ) {
      return val.join("<br>") + "<br>" + n;
    });
  } else {
    var errs = _.reduce(errors, function ( val, n ) {
      return ( _.isString(val) ? val : val.join("<br>") ) + "<br>" + n;
    });
  }
  return errs
}

/**
 * @param {Number} amount The number to convert to currency
 * @param {String} currencySymbol The currency symbol to use. Default Naira
 * @returns {import('$lib/types').MediaHandler}
 */
export const toCurrency = ( amount, currencySymbol = '₦' ) => {
  if ( isNaN(amount) ) {
    console.log(amount);
    return 'Invalid Amount';
  }
  return currencySymbol + Number(amount).toFixed(2)
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

  var p = Number(amount)
    .toFixed(2)
    .split(".");
  return currency + p[0].split("")
    .reverse()
    .reduce(function ( acc, amount, i, orig ) {
      return amount == "-" ? acc : amount + ( i && !( i % 3 ) ? "," : "" ) + acc;
    }, "") + "." + p[1];
}

/**
 *
 * @param {String} timeString the time string to convert to 12hr format eg 13:45
 * @returns {String}
 */
export const to12HrTime = timeString => new Date('1970-01-01T' + timeString + 'Z').toLocaleTimeString(
    'en-US',
    { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
);

/**
 * Get an object sepcifying if the device is mobile or desktop using CSS media queries
 * @returns {Object}
 */
export const mediaHandler = () => {

  let isMobile, isDesktop;

  if ( window.matchMedia('(max-width: 991px)')
    .matches ) {
    isMobile = true;
    isDesktop = false;
  } else {
    isMobile = false;
    isDesktop = true;
  }
  /**
   * To set up a watcher
   */
  // window.matchMedia('(min-width: 992px)')
  //  .addEventListener("change", () => {
  //      if (window.matchMedia('(max-width: 767px)')
  //          .matches) {
  //          isMobile = true;
  //          isDesktop = false;
  //      } else {
  //          isMobile = false;
  //          isDesktop = true;
  //      }
  //  })

  return { isMobile, isDesktop }
}

/**
 * Converts a number into a file size. E.g 2000 to 2Kb
 * @param {Number} size
 * @returns {String}
 */
export function filesize( size ) {
  const i = Math.floor(Math.log(size) / Math.log(1024));
  return (
    ( size / Math.pow(1024, i) ).toFixed(2) * 1 +
    ' ' +
    ['B', 'kB', 'MB', 'GB', 'TB'][i]
  );
}

/**
 * Convert a string to s slug. Eg "A boy" to a-boy
 * @param {String} str The string to sligify
 * @returns {String}
 */
export const slugify = str =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

/**
 * Remove all white space and other characters from a string. Eg "A boy is A MAN"  to "aboyisaman"
 * @param {String} str
 * @returns {String}
 */
export const collapseCharacters = str =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '')
    .replace(/^-+|-+$/g, '');

/**
 * Get the parameters from an urlencoded string
 * @param {String} query
 * @returns {String}
 */
export const getParamsAsObject = function ( query ) {

  query = query.substring(query.indexOf('?') + 1);

  var re = /([^&=]+)=?([^&]*)/g;
  var decodeRE = /\+/g;

  var decode = function ( str ) {
    return decodeURIComponent(str.replace(decodeRE, " "));
  };

  var params = {}, e;
  while ( e = re.exec(query) ) {
    var k = decode(e[1]), v = decode(e[2]);
    if ( k.substring(k.length - 2) === '[]' ) {
      k = k.substring(0, k.length - 2);
      ( params[k] || ( params[k] = [] ) ).push(v);
    } else params[k] = v;
  }

  var assign = function ( obj, keyPath, value ) {
    var lastKeyIndex = keyPath.length - 1;
    for ( var i = 0; i < lastKeyIndex; ++i ) {
      var key = keyPath[i];
      if ( !( key in obj ) )
        obj[key] = {}
      obj = obj[key];
    }
    obj[keyPath[lastKeyIndex]] = value;
  }

  for ( var prop in params ) {
    var structure = prop.split('[');
    if ( structure.length > 1 ) {
      var levels = [];
      structure.forEach(function ( item, i ) {
        var key = item.replace(/[?[\]\\ ]/g, '');
        levels.push(key);
      });
      assign(params, levels, params[prop]);
      delete(params[prop]);
    }
  }
  return params;
};

/**
 *
 * @param {Number|String} val
 * @returns {Boolean}
 */
export const isNumeric = val => {
  let num = "" + val; //coerce num to be a string
  return !isNaN(num) && !isNaN(parseFloat(num));
}

/**
 * Shuffle an array using Fisher-Yates shuffle
 * @param {Array} arr The array to shuffle.
 * @returns {Array}
 */
export const shuffle = arr => {
  for ( let i = arr.length - 1; i > 0; i-- ) {
    let j = Math.floor(Math.random() * ( i + 1 ));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Returns the first valid HTMLElement string that matches the supplied element type
 *
 * @param {String} str The html string
 * @param {String} elem The element to sreach for. Eg 'div'. Default 'p'
 * @returns {String}
 */
export const getFirstElement = (str, elem = 'p') => {
  let reg = new RegExp(`<${elem}(.*)>(.*?)<\\/${elem}>`, 'g');

  const match = str.match(reg);

  if (match) return match[0];

  console.log("not valid data");
  return ''
}
