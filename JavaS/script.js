window.addEventListener('wheel', function(e) {
    var scrollableElements = document.querySelectorAll('.still-pane');
  
    for (var i = 0; i < scrollableElements.length; i++) {
      var scrollableElement = scrollableElements[i];
      scrollableElement.scrollTop += e.deltaY;
    }
  });
  