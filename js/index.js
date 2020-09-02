<<<<<<< HEAD
$(document).ready(function(){
    $(window).scroll(function(){
        $('#scroll').text(window.scrollY);
    });
    $(function(){
        $('#Flashing').fadeIn(1500);
        $('#cat').fadeIn(1500);
=======
window.addEventListener("scroll",(event) =>{
    var y = this.scrollY;
    if(y > 400){
        $('#gotop').fadeIn();
    }
    else{
        $('#gotop').fadeOut();
    }
});

$(function(){
	$('#gotop').click(function(){ 
		$('html,body').animate({scrollTop:0}, 333);
>>>>>>> index
    });
});