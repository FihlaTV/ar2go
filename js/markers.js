(function($) {
  var bxObj, select;

  var setupMarkerSlider = function(selector, selectListSelector) {
    var markers = $(selector);
    var sliderOptions = {
      controls: false,
      speed: 200,
      infiniteLoop: true,
      // preventDefaultSwipeY: true,
      pagerType: 'short',
      onSlideAfter: onSlideAfter(selectListSelector)
    };
    var bxObj = markers.bxSlider(sliderOptions);
    return bxObj;
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
  };

  $(function() {
    init();
  });
})(jQuery);
