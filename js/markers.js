(function($) {
  var bxObj, select;
  var test = 'wtf';

  var readOrientation = function() {
    return (window.innerHeight > window.innerWidth) ? 'portrait' : 'landscape';
  };

  var styleForOrientation = function() {
    var orientation = readOrientation();
    var bxWrapper = $('.barcodes-swipeable-outer');
    var newHeight = window.innerHeight - 60;
    if (orientation === 'landscape') {
      orientationCSS = {
        width: newHeight,
        height: newHeight,
        margin: 'auto'
      };
    } else {
      orientationCSS ={
        width: '100%',
        height: 'inherit',
        margin: 'auto'
      };
    }
    bxWrapper.css(orientationCSS);
    bxObj.redrawSlider();
  };

  var setupMarkerSlider = function(selector, selectListSelector) {
    var markers = $(selector);
    var sliderOptions = {
      controls: false,
      speed: 200,
      infiniteLoop: true,
      // preventDefaultSwipeY: true,
      pagerType: 'short',
      responsive: true,
      onSlideAfter: onSlideAfter(selectListSelector),
      onSliderLoad: onSliderLoad(selectListSelector)
    };
    var bxObj = markers.bxSlider(sliderOptions);
    return bxObj;
  };

  var onSliderLoad = function(selectListSelector) {
    // @TODO: additional setup
  };

  var onSlideAfter = function(selectListSelector) {
    select = $(selectListSelector);
    if (select.length) {
      select.change(function(evt) {
        var val = $(evt.target).val();
        bxObj.goToSlide(val);
      });
    }
    return function($slideElement, oldIndex, newIndex) {
      if (select.length) {
        select.val(newIndex);
      }

      // Scroll back to top whenever we switch
      window.scrollTo(0,0);
    }
  };

  var init = function() {
    bxObj = setupMarkerSlider('.barcodes-swipeable', '.barcode-select');
    styleForOrientation();

    // Setup orientation listener
    window.addEventListener("orientationchange", function() {
      styleForOrientation();
    }, false);

    // @TODO: Also listen for resize event... needs throttle function
    // window.addEventListener("resize", function() {
    //   console.log('resize', arguments);
    // 	styleForOrientation();
    // }, false);
  };

  $(function() {
    init();
  });
})(jQuery);
