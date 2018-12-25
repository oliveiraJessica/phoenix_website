$('.carousel').carousel({
  interval: false
})

$('#carouselExampleControls').on('slide.bs.carousel', function () {
  console.log("OI")
})

var img0 = document.getElementById('img0');
var img1 = document.getElementById('img1');

img0.onclick = function() { 
  $('#carouselExampleControls').carousel(0);
}

img1.onclick = function() { 
  $('#carouselExampleControls').carousel(1);
}