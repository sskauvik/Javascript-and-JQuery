	$(document).ready(function(){

$('#myinput').on('change',function(ev){
 console.log('The only constant is change');
})
.on('focus',function(ev) {
  console.log('Focus is good');
});
});

$(document).ready(function(){
$('.parent div').on('click',function(ev) {
  $(ev.currentTarget).animate({width:200},{duration:500});
});

$('#stretchAll').on('click', function(ev) {
  $('.parent div').css('width','auto');
});
});