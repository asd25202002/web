$(function(){
    $(window).load(function(){
        $(window).bind('scroll resize', function(){
            var $this = $(this);
            var $this_Top=$this.scrollTop();
            var a = document.getElementById('top-bar');
            if($this_Top < 5){
                a.style.background = "#32b3bf";
            }
            if($this_Top > 5){
                a.style.background = 'black';
                        
            }
        }).scroll();
    });
});