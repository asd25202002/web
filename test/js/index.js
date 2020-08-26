// $(function(){
//     $(window).load(function(){
//         $(window).bind('scroll resize', function(){
//             var $this = $(this);
//             var $this_Top=$this.scrollTop();
//             if($this_Top == 0){
                   
//             }
//         }).scroll();
//     });
// });

window.addEventListener("scroll",(event)=>{
    var y = this.scrollY;
    if(y >= 100){
        console.log('安安');
        $('#p').addClass('p');
    }
});