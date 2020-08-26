$(function(){
    $(window).load(function(){
        $(window).bind('scroll resize', function(){
            var $this = $(this);
            var $this_Top=$this.scrollTop();
            if($this_Top == 0){
                   $('p').addClass('p')
            }
        }).scroll();
    });
});