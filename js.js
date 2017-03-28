function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


$(document).ready(function() {
  $(document).click(function() {
   // $('body').css('background-color', getRandomColor());
    $('body').animate({background-color: getRandomColor()}, 1000);
  });
})
