// $(window).scroll(function(){
//     if($(this).serollTop > 400){
        
//     }
//     else{
//         $('#gotop').fadeOut();
//     }
// });

window.addEventListener("scroll",(event) =>{
    var y = this.scrollY;
    if(y > 400){
        $('#gotop').fadeIn();
    }
    else{
        $('#gotop').fadeOut();
    }
});