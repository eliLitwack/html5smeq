initSMEQ = function(el) {
  var smeqhtml = '<div class="smeqslider">' +
    '<div class="smeqscore"><span>125</span></div>' +
    '<div class="smeqaxis">' +
    '<div class="smeqline">' +
    '<div class="smeqtick">0</div>' +
    '<div class="smeqtick">10</div>' +
    '<div class="smeqtick">20</div>' +
    '<div class="smeqtick">30</div>' +
    '<div class="smeqtick">40</div>' +
    '<div class="smeqtick">50</div>' +
    '<div class="smeqtick">60</div>' +
    '<div class="smeqtick">70</div>' +
    '<div class="smeqtick">80</div>' +
    '<div class="smeqtick">90</div>' +
    '<div class="smeqtick">100</div>' +
    '<div class="smeqtick">110</div>' +
    '<div class="smeqtick">120</div>' +
    '<div class="smeqtick">130</div>' +
    '<div class="smeqtick">140</div>' +
    '<div class="smeqtick">150</div>' +
    '<div class="smeqlabel">Not at all hard to do</div>' +
    '<div class="smeqlabel">Not very hard to do</div>' +
    '<div class="smeqlabel">A bit hard to do</div>' +
    '<div class="smeqlabel">Fairly hard to do</div>' +
    '<div class="smeqlabel">Rather hard to do</div>' +
    '<div class="smeqlabel">Pretty hard to do</div>' +
    '<div class="smeqlabel">Very hard to do</div>' +
    '<div class="smeqlabel">Very, very hard to do</div>' +
    '<div class="smeqlabel">Tremendously hard to do</div>' +
    '</div>' +
    '<div class="smeqhandle"></div>' +
    '</div>' +
    '</div>';
  el.html(smeqhtml);

  var dragging = false;
  var value = 0;
  var yoffset = 0;
  var origY = 0;
  var element = el;
  var axis = el.find(".smeqaxis").first();
  var smeqhandle = el.find(".smeqhandle").first();
  var smeqscore = el.find(".smeqscore > span").first();
  var setSliderY = function(y) {
    var height = axis.height();
    y = Math.max(0, y);
    y = Math.min(height, y);
    smeqhandle.css("bottom", y);
    var score = Math.round(y / height * 150);
    el.data("score", score);
    smeqscore.text(score);
  };
  var adjustSlider = function(mouseY) {
    var delta = yoffset - mouseY;
    var newY = origY + delta;
    setSliderY(newY);
  }
  var startSlider = function(mouseY) {
    dragging = true;
    yoffset = mouseY;
    origY = axis.height() - (smeqhandle.position().top + smeqhandle.outerHeight(true));
  }
  var endSlider = function(mouseY) {
    if (dragging) {
      dragging = false;
      adjustSlider(mouseY);
    }
  }
  el.on("score", function(e, score) {
    e.preventDefault();
    var height = axis.height();
    var y = Math.round(score / 150 * height);
    setSliderY(y);
  })
  smeqhandle.mousedown(function(e) {
    e.preventDefault();
    startSlider(e.pageY);
  });
  $("body").mousemove(function(e) {
    if (dragging) {
      e.preventDefault();
      adjustSlider(e.pageY);
    }
  });
  $("body").mouseup(function(e) {
    if (dragging) {
      e.preventDefault();
      endSlider(e.pageY);
    }
  });
  $("body").mouseleave(function(e) {
    if (dragging) {
      e.preventDefault();
      endSlider(e.pageY);
    }
  });
  smeqhandle.on("touchstart", function(e) {
    e.preventDefault();
    var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
    startSlider(touch.pageY);
  });
  $("body").on("touchmove", function(e) {
    if (dragging) {
      e.preventDefault();
      var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
      adjustSlider(touch.pageY);
    }
  });
  $("body").on("touchend", function(e) {
    if (dragging) {
      e.preventDefault();
      var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
      endSlider(touch.pageY);
    }
  });

  setSMEQ(el, 0);
}

setSMEQ = function(element, score) {
  element.trigger("score", score);
}
