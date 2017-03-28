$(document).ready(function() {
  var i = 0;
  $(document).click(function() {
    $('p').after(i);
    i += (100 * i);
  });
})
