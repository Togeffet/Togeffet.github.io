$(document).ready(function() {
  var i = 1;
  $(document).click(function() {
    $('p').after(i);
    i++;
    i += (100 * i);
  });
})
