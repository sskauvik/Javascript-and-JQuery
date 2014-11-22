	$(document).ready(function(){

$('#myinput').on('change',function(ev){
 console.log('The only constant is change');
})
.on('focus',function(ev) {
  console.log('Focus is good');
});

});
