window.addEventListener("scroll",(event)=>{
    var y = this.scrollY;
    if(y >= 100){
        $('#first-words').addClass('first-words');
        $('#second-words').addClass('second-words');
        $('#third-words').addClass('third-words');
        $('#four-words').addClass('four-words');
        $('#five-words').addClass('five-words');
        $('#six-words').addClass('six-words');
    }
});